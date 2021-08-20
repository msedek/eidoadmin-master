import React from "react";

import classes from "./CreateSubRecipeHeaderShape.scss";
import RecipeList from "../RecipeList/RecipeList";

const CreateSubRecipeHeaderShape = props => {
  let row = [];
  let trow = [];
  let name = "";
  let data = [
    { nombre: "pan" },
    { nombre: "jugo" },
    { nombre: "harina" },
    { nombre: "pan" },
    { nombre: "pan" },
    { nombre: "pan" },
    { nombre: "pan" },
    { nombre: "pan" },
    { nombre: "pan" },
    { nombre: "pan" },
    { nombre: "pan" },
    { nombre: "pan" },
    { nombre: "pan" },
    { nombre: "pan" },
    { nombre: "pan" },
    { nombre: "pan" },
    { nombre: "pan" },
    { nombre: "pan" },
    { nombre: "pan" }
  ];

  if (data.length > 0) {
    data = data;
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
        <tr key={index} style={{ height: "1.4rem", background: "#F3F3F5" }}>
          <td style={{ width: "10.5rem" }}>
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
          <td style={{ width: "7rem" }}>
            <input
              className={classes.TexBox}
              style={{ width: "6rem" }}
              type="text"
              name=""
              id=""
            />
          </td>
          <td style={{ width: "7rem" }}>
            <input
              className={classes.TexBox}
              style={{ width: "5rem" }}
              type="text"
              name=""
              id=""
            />
          </td>
          <td style={{ width: "7rem" }}>
            <input
              className={classes.TexBox}
              style={{ width: "5rem" }}
              type="text"
              name=""
              id=""
            />
          </td>
          <td style={{ width: "8rem" }}>
            <input
              style={{ marginLeft: "3rem" }}
              className={classes.RealCheckbox}
              type="checkbox"
              name=""
              id=""
            />
          </td>
        </tr>
      );
    });
  }
  row.push(trow);

  return (
    <div className={classes.Container}>
      <div className={classes.List}>{row}</div>
    </div>
  );
};
export default CreateSubRecipeHeaderShape;
