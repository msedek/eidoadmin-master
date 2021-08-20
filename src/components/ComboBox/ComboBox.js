import React from "react";

import classes from "./ComboBox.scss";
import FaCaretDown from "react-icons/lib/fa/caret-down";

const ComboBox = props => {
  let options = [];
  let row = [];
  props.text.forEach((element, index) => {
    row.push(<option key={index}>{element.nombre}</option>);
  });
  options.push(row);
  return (
    <div
      className={classes.ComboContainer}
    >
      <select
        className={classes.ComboCash}
        onClick={ev => props.onClickHandler(ev, props.text)}
      >
        <option hidden> </option>
        {options}
      </select>
      <div className={classes.Arrow}>
        <FaCaretDown />
      </div>
    </div>
  );
};

export default ComboBox;
