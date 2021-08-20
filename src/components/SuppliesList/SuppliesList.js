import React from "react";

import classes from "./SuppliesList.scss";

const SuppliesList = props => {
  let row = [];
  let trow = [];
  let name = "";
  let data = [];

  if (props.data.length > 0) {
    data = props.data;
    data.forEach((element, index) => {
      name = element.nombre;

      trow.push(
        <tr key={index} style={{}}>
          <td style={{ width: "100%", height: "1.4rem" }}>
            <span
              onClick={() => props.onChangeHandler(element)}
              style={{
                display: "grid",
                fontSize: "0.9rem",
                color: "#5D5D5D",
                marginLeft: "1rem",
                marginTop: "0.2rem",
                cursor: "pointer"
              }}
            >
              {name}
            </span>
          </td>
        </tr>
      );
    });
  }
  row.push(trow);
  return (
    <div className={classes.ContainerList}>
      <div
        className={classes.ListaCheck}
        style={{
          height: props.confiHeightLis
        }}
      >
        <table>
          <tbody>{row}</tbody>
        </table>
      </div>
    </div>
  );
};
export default SuppliesList;
