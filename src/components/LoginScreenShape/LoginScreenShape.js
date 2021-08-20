import React from "react";

import classes from "./LoginScreenShape.scss";

const LoginScreenShape = props => (
  <div className={classes.User}>
    <div className={classes.Separator1} />
    <div className={classes.Icon}>
      <div className={classes.Border1} />
      <div className={classes.Circle}>
        <div className={classes.MarginIcon1} />
        <div className={classes.RealIcon}>{props.icon}</div>
        <div className={classes.MarginIcon2} />
        <div className={classes.MarginIcon3} />
        <div className={classes.MarginIcon4} />
      </div>
      <div className={classes.Border2} />
    </div>
    <div className={classes.Separator2} />
    <div className={classes.Text}>
      <div className={classes.MarginTxt1} />
      <div className={classes.RealText}>
        <input
          type={props.Type ? props.Type : 'text'}
          name=""
          id={props.Id}
          className={classes.TextBox}
          placeholder={props.placeholder}
        />
      </div>
    </div>
    <div className={classes.Separator3}> </div>
  </div>
);

export default LoginScreenShape;
