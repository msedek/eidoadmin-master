import React from "react";

import classes from "./ButtonNew.scss";

const ButtonNew = props => {
  return (
    <div onClick={props.clicked} className={classes.BtnNew}>
      <div
        className={classes.FrontIcon}
        style={{
          marginTop: props.confMarginTopIcon ? props.confMarginTopIcon : "0",
          marginLeft: props.confMarginLeftIcon ? props.confMarginLeftIcon : "0"
        }}
      >
        <span className="far fa-file-alt" />
      </div>
      <div
        className={classes.BackIcon}
        style={{
          marginTop: props.confMarginTopIcon ? props.confMarginTopIcon : "0",
          marginLeft: props.confMarginLeftIcon ? props.confMarginLeftIcon : "0"
        }}
      >
        <span className="fas fa-file-alt" />
      </div>
      <div
        className={classes.Text}
        style={{
          fontSize: props.ConfFontSize
        }}
      >
        <span
          className={classes.RealName}
          style={{
            marginBottom: props.confMarginBottom ? props.confMarginBottom : "0",
            marginLeft: props.confMarginLeft ? props.confMarginLeft : "0",
            marginTop: props.confMarginTopText ? props.confMarginTopText : "0"
          }}
        >
          {props.spanText}
        </span>
      </div>
    </div>
  );
};

export default ButtonNew;
