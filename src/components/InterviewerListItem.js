import React from "react"
import classNames from "classnames";
import "components/InterviewerListItem.scss"

// id:number - the id of the interviewer
// name:string - the name of the interviewer
// avatar:url - a url to an image of the interviewer
// The <InterviewerListItem> also needs a prop to know if it is selected.

export default function InterviewerListItem(props) {
  let interviewerClass = "interviewers__item" + classNames({"--selected": props.selected});
  
  const showInterviewerName = function() {
    return props.selected && props.name;
  }
  
  const interviewerName = showInterviewerName();

  return (
    <li className={interviewerClass} onClick={props.setInterviewer}>
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {interviewerName}
    </li>
  )
}