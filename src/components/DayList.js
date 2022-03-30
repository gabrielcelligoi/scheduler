import React from "react";
import DayListItem from "./DayListItem";

//PROPS FOR DayListItem
// name:String the name of the day
// spots:Number the number of spots remaining
// selected:Boolean true or false declaring that this day is selected
// setDay:Function accepts the name of the day eg. "Monday", "Tuesday"

//PROPS FOR DayList
// days:Array an array of objects (each object represents a day and includes an id, name, and spots)
// day:String the currently selected day
// setDay:Function sets the currently selected day and accepts the name of the day eg. "Monday", "Tuesday"



export default function DayList(props) {
  const {days, value, onChange} = props;

  const listDays = days.map((day) => (
  <DayListItem 
        key={day.id}
        name={day.name} 
        spots={day.spots} 
        selected={day.name === value}
        setDay={() => onChange(day.name)}  
      /> ));

  return (
    <ul>
      
      {listDays}

    </ul>
  )
}