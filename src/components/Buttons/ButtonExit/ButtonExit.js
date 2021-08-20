import React from "react";

import classes from "./ButtonExit.scss";

const ButtonExit = props => {
  return (
    <div
      className={classes.BtnExit}
      onClick={props.clicked}
      style={{
        gridTemplateRows: props.confGridRow ? props.confGridRow : "50% 15% 1fr"
      }}
    >
      <div
        className={classes.IconExit}
        style={{
          marginTop: props.confMarginTop ? props.confMarginTop : "0",
          marginLeft: props.confMarginLeftIcon ? props.confMarginLeftIcon : "0"
        }}
      >
        <span className="fas fa-arrow-left" />
      </div>
      <div className={classes.Text}>
        <span
          className={classes.RealText}
          style={{
            marginLeft: props.confMarginLeftText ? props.confMarginLeftText : "0",
            marginTop: props.confMarginTopText
              ? props.confMarginTopText
              : "0"
          }}
        >
          Salir
        </span>
      </div>
    </div>
  );
};

export default ButtonExit;
