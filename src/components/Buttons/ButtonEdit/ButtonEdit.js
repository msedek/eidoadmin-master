import React from "react";

import classes from "./ButtonEdit.scss";

const ButtonEdit = props => {
  return (
    <div onClick={props.clicked} className={classes.BtnEdit}>
      <div className={classes.FrontIcon} style={{marginTop: props.confMarginTopIcon}} >
        <span className="far fa-edit" />
      </div>
      <div className={classes.BackIcon} style={{marginTop: props.confMarginTopIcon}} >
        <span className="fas fa-edit" />
      </div>
      <div
        className={classes.Text}
        style={{
          marginTop: props.confMarginTopText ? props.confMarginTopText : "0rem",
          marginLeft: props.confMarginLeft
        }}
      >
        <span className={classes.RealText}>Editar</span>
      </div>
    </div>
  );
};

export default ButtonEdit;
