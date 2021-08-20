import React from "react";

import classes from "./ListRow.scss";

const ListRow = props => {
  return (
    <div
      className={classes.Container}
      style={{
        background: props.confBackground,
        color: props.confColor,
        fontSize: props.confFontSize ? props.confFontSize : "1rem"
      }}
    >
      <span
        style={{
          marginLeft: props.confMarginLeft ? props.confMarginLeft : "0",
          fontWeight: props.confFontWeight,
        }}
      >
        {props.text ? props.text : "test"}
      </span>
      
    </div>
  );
};

export default ListRow;
