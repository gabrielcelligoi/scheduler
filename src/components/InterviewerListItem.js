import React from "react"
import classNames from "classnames";
import "components/InterviewerListItem.scss"


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