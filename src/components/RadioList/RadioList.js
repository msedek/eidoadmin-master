import React from "react";

import classes from "./RadioList.scss";

const RadioList = props => {
  return (
    <div className={classes.Container}>
      <input
        onChange={e => props.onClickSuppliesHandler(e, props.data)}
        style={{
          marginLeft: props.confMarfinLeftBox,
          marginTop: props.confMarginTopBox,
          marginRight: props.confMarginRightBox,
          height: props.confiHeight,
          marginBottom: props.ConfmarginBottomBox,
          paddingTop: props.confiPaddingTopBox,
          paddingBottom: props.confiPaddingBottomBox
        }}
        type="radio"
        name="radio-group"
      />
    </div>
  );
};

export default RadioList;
