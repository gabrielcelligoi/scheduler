# Interview Scheduler

### a single page application (SPA) that allows users to book appointments selecting specific time and interviewer
<br>

## Briefing

This single page application (SPA) was built using React.

The data is persisted by the API server using a PostgreSQL database.

The client application communicates with an API server over HTTP, using Axios.

Jest, Storybook and Cypress tests are used through the development of the project.

<br>

## Funcionality:

- Interviews can be booked between Monday and Friday.

- A user can switch between weekdays.

- A user can book an interview in an empty appointment slot.

- Interviews are booked by typing in a student name and clicking on an interviewer from a list of available interviewers.

- A user can cancel an existing interview.

- A user can edit the details of an existing interview.

- The list of days informs the user how many slots are available for each day.

- The expected day updates the number of spots available when an interview is booked or canceled.

- A user is presented with a confirmation when they attempt to cancel an interview.

- A user is shown an error if an interview cannot be saved or deleted.

- A user is shown a status indicator while asynchronous operations are in progress.

- When the user presses the close button of the error they are returned to the Form or Show view (skipping Status and Confirm).

- The application makes API requests to load and persist data.



## Final Product

!["Home Page"](https://github.com/gabrielcelligoi/scheduler/blob/master/docs/Scheduler.png?raw=true)



## Getting Started

1. Install all dependencies (using the `npm install` command).
2. Run the API server using `npm start`.
3. Run the development web server using `npm start`.


## Dependencies
- axios: ^0.26.1
- classnames: ^2.2.6
- normalize.css: ^8.0.1
- react: ^16.9.0
- react-dom: ^16.9.0
- react-scripts: 3.0.0
