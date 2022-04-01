import React from "react";
import classNames from "classnames";
import "components/DayListItem.scss";


export default function DayListItem(props) {
  let full = false;
  if (props.spots === 0) {
    full = true;
  }
  
const dayClass = classNames("day-list__item", {
  "day-list__item--selected": props.selected,
  "day-list__item--full" : full
});

  

  const formatSpots = function() {
    let spotsMsg = `no spots remaining`;
    if (props.spots > 1 ) {
      spotsMsg = `${props.spots} spots remaining`;
    } else if (props.spots === 1 ) {
      spotsMsg = `${props.spots} spot remaining`;
    } else if (props.spots === 0) {
      spotsMsg = `no spots remaining`;
    }
    return spotsMsg;
  };

  const sportsDeclaration = formatSpots();

  return (
    <li onClick={props.setDay} className={dayClass} selected={props.selected}>
      <h2 className="text--regular">{props.name}</h2> 
      <h3 className="text--light">{sportsDeclaration}</h3>
    </li>
  );
}