import React from "react";

import classes from "./ButtonDelete.scss";

const ButtonDelete = props => {
  return (
    <div className={classes.BtnDelete}>
      <div
        className={classes.FrontIcon}
        style={{
          marginTop: props.confMarginTop ? props.confMarginTop : "0",
          marginRight: props.confMarginRightIcon
            ? props.confMarginRightIcon
            : "0rem"
        }}
      >
        <span className="far fa-file-excel" />
      </div>
      <div
        className={classes.BackIcon}
        style={{
          marginTop: props.confMarginTop ? props.confMarginTop : "0",
          marginRight: props.confMarginRightIcon
            ? props.confMarginRightIcon
            : "0rem"
        }}
      >
        <span className="fas fa-file-excel" />
      </div>
      <div className={classes.Text}>
        <span
          className={classes.RealText}
          style={{
            marginRight: props.confMarginRightText
              ? props.confMarginRightText
              : "0rem",
            marginTop: props.confMarginTopText
              ? props.confMarginTopText
              : "0rem"
          }}
        >
          Eliminar
        </span>
      </div>
    </div>
  );
};

export default ButtonDelete;
