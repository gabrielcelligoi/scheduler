import React from "react";
import InterviewerListItem from "./InterviewerListItem";
import "components/InterviewerList.scss";
import PropTypes from 'prop-types';

export default function InterviewerList(props) {


  const listInterviewers = props.interviewers.map(interviewer =>
    
    <InterviewerListItem
      key={interviewer.id}      
      name={interviewer.name}
      avatar={interviewer.avatar}
      setInterviewer={() => props.onChange(interviewer.id)}
      selected={interviewer.id === props.value}
    />)

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{listInterviewers}</ul>
    </section>
  )
}

InterviewerList.propTypes = {
  interviewers: PropTypes.array.isRequired
}