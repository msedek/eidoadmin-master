import React from "react";

import classes from "./EditCatalogShape.scss";
import ItemsList from "../ItemsList/ItemsList";

const EditCatalogShape = props => {
  let row = [];
  let trow = [];
  let name = [];
  let data = [];

  if (props.data.length > 0) {
    data = props.data;
  }

  data.forEach((el, index) => {
    if (props.origen === "Enterprise") {
      name = el.data.nombre;
    } else if (props.origen === "Catalog") {
      name = el.nombre;
    } else {
      name = el;
    }

    let parity = index % 2;
    let confBackground = "#DADEE9";
    if (parity === 1) {
      confBackground = "#F3F3F5";
    }

    trow.push(
      <tr key={index} style={{ height: "1.69rem" }}>
        <td style={{ width: "26.95rem", background: confBackground }}>
          <span
            style={{
              display: "grid",
              fontSize: "0.8rem",
              color: "#5D5D5D",
              marginLeft: "2.9rem"
            }}
          >
            {name}
          </span>
        </td>
        <td style={{ background: confBackground }}>
          <ItemsList
            confColor={"#5D5D5D"}
            confMarfinLeftBox={
              props.confMarfinLeftBox ? props.confMarfinLeftBox : "6.9rem"
            }
            confiHeight={"0.6rem"}
            onChangeHandler={ev => props.onChangeHandler(ev, el)}
          />
        </td>
      </tr>
    );
  });
  row.push(trow);
  return (
    <div className={classes.ContainerList}>
      <div
        className={classes.ListaCheck}
        style={{
          height: props.confHeightCheck ? props.confHeightCheck : "45vh",
          width: props.confWidth ? props.confWidth : "100%"
        }}
      >
        <table style={{ borderSpacing: "0" }}>
          <tbody>{row}</tbody>
        </table>
      </div>
    </div>
  );
};

export default EditCatalogShape;
