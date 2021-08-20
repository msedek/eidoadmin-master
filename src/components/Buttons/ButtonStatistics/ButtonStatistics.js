import React from "react";

import classes from "./ButtonStatistics.scss";

const ButtonStatistics = props => {
  let background = null;
  switch (props.confScreen) {
    case "sales":
      background = "#00A0F6";
      break;
    case "tables":
      background = "#DC9600";
      break;
    case "dishes":
      background = "#BA007D";
      break;
    case "mesonero":
      background = "#9EC446";
      break;

    default:
      break;
  }

  return (
    <div
      className={classes.Button}
      style={{
        background: props.confbackground ? background : "#ABB9C2"
      }}
      onClick={() => props.clicked(props.textSpan)}
    >
      <span className={classes.Text}> {props.textSpan} </span>
    </div>
  );
};

export default ButtonStatistics;
