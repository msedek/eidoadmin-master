import React from "react";

import classes from "./Table.scss";

const Table = props => {
  return (
    <div
      className={classes.ContainerTable}
      style={{
        background: props.backCircle
      }}
    >
      <div
        className={classes.InnerCircle}
        style={{
          background: props.innerCircle,
          border: "1px solid " + props.innerBorder
        }}
      >
        {props.tableNumber}
      </div>
    </div>
  );
};

export default Table;
