import React from "react";

import classes from "./WaiterList.scss";

const WaiterList = props => {
  return (
    <div className={classes.Container}>
      <div className={classes.CirclesContainer}>
        <div className={classes.BigCircle}>
          <div
            className={classes.CircleInner}
            style={{
              background: props.confBackground
            }}
          >
            <span className="fas fa-user" />
          </div>
        </div>
      </div>
      <div className={classes.TextContainer}>
        <span className={classes.Text}>{props.textSpan}</span>
      </div>
    </div>
  );
};

export default WaiterList;
