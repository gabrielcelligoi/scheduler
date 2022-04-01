import React from "react";
import DayListItem from "./DayListItem";

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