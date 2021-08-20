import React from "react";

import classes from "./ButtonPlus.scss";

const ButtonPlus = props => {
  const execute = () => {
    props.clicked();
    props.location();
  };
  return (
    <div
      className={classes.Container}
      onClick={() => execute()}
      style={{
        gridTemplateRows: props.confGridRows ? props.confGridRows : "100%"
      }}
    >
      <div className={classes.BtnPlus}>
        <div className={classes.Icon}>
          <span className={"fas fa-plus"} />
        </div>
        <div className={classes.Text}>
          <span
            className={classes.RealText}
            style={{
              fontSize: props.confFontSize ? props.confFontSize : "0.88rem"
            }}
          >
            {props.spanText}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ButtonPlus;
