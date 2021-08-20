import React from "react";

import classes from "./ItemsList.scss";

const ItemsList = props => {

  return (

    <div
      className={classes.ListaCheck}
      style={{
        background: props.confBackground
      }}
    >
      <input
        onClick={(ev) => props.onChangeHandler(ev)}
        type="checkbox"
        name="checkbox"
        id="cbox1"
        value="value"
        style={{
          marginLeft: props.confMarfinLeftBox,
          marginTop: props.confMarginTopBox,
          marginRight: props.confMarginRightBox,
          height: props.confiHeight,
          marginBottom: props.ConfmarginBottomBox,
          paddingTop: props.confiPaddingTopBox,
          paddingBottom: props.confiPaddingBottomBox
        }}
      />
      <label
        className={classes.NameList}
        htmlFor="cbox1"
        style={{
          marginLeft: props.confMarginLeft,
          marginRight: props.confMarginRight,
          marginTop: props.confMarginTop,
          paddingBottom: props.confPaddingBottom,
          paddingRight: props.confPaddingRight,
          color: props.confColor,
          float: props.confFloat,
          fontWeight: props.conffontWeight,
          width: props.confWidthText,
          background: props.confBackgroundText
        }}
      >
        {props.labelText}
      </label>
    </div>
  );
};

export default ItemsList;
