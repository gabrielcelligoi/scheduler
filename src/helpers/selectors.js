export function getAppointmentsForDay(state, day) {
  let appointmentsArray = [];
  let appointments = null;

  for (let stateDay of state.days) {
    if (stateDay.name === day) {
      appointments = stateDay.appointments;
    }
  }

  if (appointments === null) {
    return appointmentsArray;
  }

  for (let appointmentId of appointments) {
    for (let appointment in state.appointments) {
      if (appointmentId == appointment) {
        appointmentsArray.push(state.appointments[appointment]);
      }
    }
  }

  return appointmentsArray;
}


export function getInterviewersForDay(state, day) {
  let interviewersArray = [];
  let interviewers = null;

  for (let stateDay of state.days) {
    if (stateDay.name === day) {
      interviewers = stateDay.interviewers;
    }
  }

  if (interviewers === null) {
    return interviewersArray;
  }

  for (let interviewerId of interviewers) {
    for (let interviewer in state.interviewers) {
      if (interviewerId == interviewer) {
        interviewersArray.push(state.interviewers[interviewer]);
      }
    }
  }

  return interviewersArray;
}


export function getInterview(state, interview) {
  let interviewObj = interview;

  if (interview) {
    for (let interviewId in state.interviewers) {
      if (interviewId == interview.interviewer) {
        interview.interviewer = state.interviewers[interviewId];
      }
    }

  } else {
    return null;
  }

  return interviewObj;
}
