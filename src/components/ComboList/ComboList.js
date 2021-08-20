import React from "react";

import classes from "./ComboList.scss";

const ComboList = props => {
  let row = [];
  let trow = [];
  let data = [];
  if (props.data) {
    data = props.data;
  }
  let name;
  data.forEach((el, index) => {
    name = el.nombre;

    trow.push(
      <tr key={index}>
        <td>
          <input type="checkbox" name="" id=""  onClick={ev => props.onChangeHandler(ev, el)} />
        </td>
        <td
          style={{
            fontSize: "0.94rem",
            color: "#5D5D5D",
            marginLeft: "1rem",
          }}
        >
          {name}
        </td>
      </tr>
    );
  });
  row.push(trow);
  return (
    <div className={classes.ContainerList}>
      <div className={classes.ListaCheck}>
        <table>
          <tbody>{row}</tbody>
        </table>
      </div>
    </div>
  );
};
export default ComboList;
