import React from "react";

import classes from "./ChartShape.scss";

const ChartShape = props => {
  return (
    <div
      style={{
        height: props.confHeight,
        width: props.confWidth,
        background: "red",
        borderTopRightRadius: "15px",
        WebkitBorderTopLeftRadius: "15pc"
      }}
    >
      hola
    </div>
  );
};
export default ChartShape;
