import React from "react";

import classes from "./ButtonPrepare.scss";

const ButtonPrepare = props => {
  return (
    <div
      className={classes.Container}
      onClick={props.clicked}
      style={{
        gridTemplateRows: props.confGridRows ? props.confGridRows : "100%"
      }}
    >
   
        <div className={classes.Icon}>
          <span className={"fas fa-check"} />
        </div>
        <span
            className={classes.RealText}
            style={{
              fontSize: props.confFontSize ? props.confFontSize : "1rem"
            }}
          >
            Preparar
          </span>
  
    </div>
  );
};

export default ButtonPrepare;
