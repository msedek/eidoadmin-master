import React from "react";

import classes from "./RecipeList.scss";
import ItemsList from "../ItemsList/ItemsList";

const RecipeList = props => {
  let items = [];
  let data = [
    "text1",
    "text2",
    "text3",
    "text4",
    "text5",
    "text6",
    "text7",
    "text8"
  ];

  if (props.data) {
    data = props.data;
  }

  data.forEach((el, index) => {
    items.push(
      <ItemsList
        key={index}
        confMarginRight={"7rem"}
        confMarginTop={"0.1rem"}
        confColor={"#5D5D5D"}
        // labelText={data[index]}
        labelText={"Loren Ipsun"}
        confFloat={"left"}
        confPaddingBottom={"0.1rem"}
        confMarginTopBox={"0.4rem"}
        ConfmarginBottomBox={"-1rem"}
      />
    );
  });
  return (
    <div className={classes.ContainerList}>
      <div className={classes.ListaCheck}>{items}</div>
    </div>
  );
};

export default RecipeList;
