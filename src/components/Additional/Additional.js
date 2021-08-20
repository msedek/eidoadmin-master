import React from "react";

import classes from "./Additional.scss";
import ComboList from "../ComboList/ComboList";

const Additional = props => {
  return (
    <div className={classes.Container}>
      <div className={classes.ZoneHeader}>
        <div className={classes.ZoneTitle1}>
          <div className={classes.Title}>
            <span className={classes.Text}>{props.spanText}</span>
          </div>
        </div>
      </div>
      <div className={classes.ZoneBody}>
        <ComboList onChangeHandler={props.onChangeHandler} data={props.data} />
      </div>
    </div>
  );
};

export default Additional;
