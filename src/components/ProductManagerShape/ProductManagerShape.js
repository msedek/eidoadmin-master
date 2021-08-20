import React from "react";

import classes from "./ProductManagerShape.scss";
import RadioList from "../RadioList/RadioList";

const ProductManagerShape = props => {
  let row = [];
  let trow = [];
  let name = "";
  let data = [];

  if (props.data.length > 0) {
    data = props.data;
    data.forEach((el, index) => {
      if (props.origen === "product") {
        name = el;
      } else {
        name = el.nombre;
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
                fontSize: "0.9rem",
                color: "#5D5D5D",
                marginLeft: "2.9rem"
              }}
            >
              {name}
            </span>
          </td>
          <td style={{ background: confBackground }}>
            <div
              style={{
                paddingLeft: props.confMarginLeft ? props.confMarginLeft : null
              }}
            >
              <RadioList
                data={el}
                confColor={"#5D5D5D"}
                confMarfinLeftBox={props.confMarfinLeftBox}
                confiHeight={"0.6rem"}
                onChangeHandler={() => props.onChangeHandler(el)}
                onClickSuppliesHandler={props.onClickSuppliesHandler}
              />
            </div>
          </td>
        </tr>
      );
    });
  }
  row.push(trow);
  return (
    <div
      className={classes.ContainerList}
      style={{
        gridTemplateColumns: props.confGridColumns
          ? props.confGridColumns
          : "4.5% 1fr 5.4%"
      }}
    >
      <div
        className={classes.ListaCheck}
        style={{
          height: props.confHeight ? props.confHeight : "45vh",
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
export default ProductManagerShape;
