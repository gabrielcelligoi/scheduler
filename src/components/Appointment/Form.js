import React, { useState } from "react";
import InterviewerList from "components/InterviewerList";
import Button from "components/Button";

// The <Form> component should track the following state:

// student:String
// interviewer:Number
// The <Form> component should have the following actions:

// setStudent:Function
// setInterviewer:Function
// The <Form> component should take the following props:

// student:String
// interviewers:Array
// interviewer:Number
// onSave:Function
// onCancel:Function


export default function Form(props) {
  const [student, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);
  const [error, setError] = useState("");

  const reset = () => {
    setStudent("");
    setInterviewer(null);
  };

  const cancel = () => {
    reset();
    props.onCancel();
  };

  function validate() {
    if (student === "") {
      setError("Student name cannot be blank");
      return;
    }
    
    setError("");
    props.onSave(student, interviewer);
  }

  

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off">
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Student Name"
            value={student}
            onChange={event => setStudent(event.target.value)}
            onSubmit={event => event.preventDefault()}
            data-testid="student-name-input"
          />
        </form>
        <section className="appointment__validation">{error}</section>
        <InterviewerList 
          value={interviewer}
          onChange={setInterviewer}
          interviewers={props.interviewers}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={cancel}>Cancel</Button>
          {/* <Button confirm onClick={() => save(props)}>Save</Button> */}
          <Button confirm onClick={validate}>Save</Button>


        </section>
      </section>
    </main>
  )
}



// export default function Form(props) {
//   const [student, setStudent] = useState(props.student || "");
//   const [interviewer, setInterviewer] = useState(props.interviewer || null);

//   const reset = () => {
//     setStudent("")
//     setInterviewer(null)
//   }

//   const cancel = () => {
//     reset()
//     return props.onCancel
//   }

//   return (
//     <main className="appointment__card appointment__card--create">
//       <section className="appointment__card-left">
//         <form autoComplete="off">
//           <input
//             className="appointment__create-input text--semi-bold"
//             name="name"
//             type="text"
//             placeholder="Enter Student Name"
//             value={student}
//             onChange={event => setStudent(event.target.value)}
//             onSubmit={event => event.preventDefault()}
//           />
//         </form>
//         <InterviewerList 
//           value={interviewer}
//           onChange={setInterviewer}
//           interviewers={props.interviewers}
//         />
//       </section>
//       <section className="appointment__card-right">
//         <section className="appointment__actions">
//           <Button danger onClick={cancel}>Cancel</Button>
//           <Button confirm onClick={props.onSave}>Save</Button>
//         </section>
//       </section>
//     </main>
//   )
// }