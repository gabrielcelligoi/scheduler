import React from "react";
import { Fragment } from "react";
import "components/Appointment/styles.scss";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import useVisualMode from "hooks/useVisualMode";
import Form from "./Form";
import Status from "./Status";
import Confirm from "./Confirm";
import Error from "./Error";

export default function Appointment(props) {
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const DELETING = "DELETING";
  const CONFIRM = "CONFIRM";
  const EDIT = "EDIT";
  const ERROR_SAVE = "ERROR_SAVE";
  const ERROR_DELETE = "ERROR_DELETE";

  const {mode, transition, back } = useVisualMode(props.interview ? SHOW : EMPTY);

  function save(name, interviewer) {        
    const interview = {
      student: name,
      interviewer
    }

    transition(SAVING);
    props.bookInterview(props.id, interview)
      .then(() => {
        transition(SHOW);
      })
      .catch(error => {
        transition(ERROR_SAVE, true)
      })
  }

  function confirmDelete() {
    transition(CONFIRM);
  }

  function deleteInterview(id) {
    transition(DELETING, true);
    props.cancelInterview(id)
      .then(() => {
        transition(EMPTY);
      })
      .catch(error => {
        transition(ERROR_DELETE, true)
      })
  }

  function editAppointment() {
    transition(EDIT);
  }

  return (    
    <article className="appointment">
      <Fragment>
        <Header time={props.time} bookInterview={props.bookInterview}/>
      </Fragment>
      
      <Fragment>
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} bookInterview={props.bookInterview}/>}
      {mode === SHOW && (
        <Show
          id={props.id}
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          bookInterview={props.bookInterview}
          onDelete={confirmDelete}
          onEdit={editAppointment}
        />
      )}
      {mode === CREATE && 
        <Form
          interviewers={props.interviewers}
          onSave={save}
          onCancel={() => back()}
          bookInterview={props.bookInterview}
        />
      }
      {mode === SAVING && <Status message={"Saving"} />}
      {mode === DELETING && <Status message={"Deleting"} />}
      {mode === CONFIRM && 
        <Confirm
          message={"Are you sure you would like to delete?"}
          onConfirm={() => deleteInterview(props.id)}
          onCancel={() => back()}
        />
      }
      {mode === EDIT &&
        <Form
          student={props.interview.student}
          interviewer={props.interview.interviewer.id}
          interviewers={props.interviewers}
          onSave={save} onCancel={() => back()}
          bookInterview={props.bookInterview}
        />
      }
      {mode === ERROR_SAVE &&
        <Error
          onClose={() => back()}
          message="Error, cannot save appointment. Please try again."
        />
      }
      {mode === ERROR_DELETE && (
        <Error
          onClose={() => back()}
          message="Error, cannot delete appointment. Please try again."
        />
      )}
      </Fragment>
    </article>
  )
}

