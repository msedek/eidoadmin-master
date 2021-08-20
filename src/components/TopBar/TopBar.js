import React from "react";
import { withRouter } from "react-router-dom"; //hack para quitar con redux

import classes from "./TopBar.scss";

const TopBar = props => {
  
  let url = "/catalog";
  let url2 = "/enterprise";
  let url3 = "/product";
  let url4 = "/purshase";
  let url5 = "/statistics";
  let url6 = "/inventory";
  let execute = urlparam => {
    props.clicked("catalog");
    props.history.push(urlparam);
  };
  let execute2 = urlparam => {
    props.clicked("enterprise");
    props.history.push(urlparam);
  };
  let execute3 = urlparam => {
    props.clicked("product");
    props.history.push(urlparam);
  };
  let execute4 = urlparam => {
    props.clicked("purshase");
    props.history.push(urlparam);
  };
  let execute5 = urlparam => {
    props.clicked("statistics");
    props.history.push(urlparam);
  };
  let execute6 = urlparam => {
    props.clicked("inventory");
    props.history.push(urlparam);
  };
  return (
    
    <div
      className={classes.TopBarContainer}
      style={{
        visibility: props.topBarVisible
      }}
    >
      <div
        className={classes.Enterprise}
        onClick={() => execute2(url2)}
        style={{
          borderBottom: props.topBarActiveEnt
        }}
      >
        <span className={classes.TextEnterprise}>EMPRESA</span>
      </div>
      <div
        className={classes.Product}
        onClick={() => execute3(url3)}
        style={{
          borderBottom: props.topBarActivePro
        }}
      >
        <span className={classes.TextProduct}>PRODUCTO</span>
      </div>
      <div
        className={classes.Catalogue}
        onClick={() => execute(url)}
        style={{
          borderBottom: props.topBarActiveCat
        }}
      >
        <span className={classes.TextCatalogo}>CATALOGO</span>
      </div>
      <div
        className={classes.Buy}
        onClick={() => execute4(url4)}
        style={{
          borderBottom: props.topBarActivePur
        }}
      >
        <span className={classes.TextBuy}>COMPRAS</span>
      </div>
      <div
        className={classes.Statistics}
        onClick={() => execute5(url5)}
        style={{
          borderBottom: props.topBarActiveSta
        }}
      >
        <span className={classes.TextStatistics}>ESTADISTICAS</span>
      </div>
      <div
        className={classes.Inventory}
        onClick={() => execute6(url6)}
        style={{
          borderBottom: props.topBarActiveInv
        }}
      >
        <span className={classes.TextInventory}>INVENTARIO</span>
      </div>
    </div>
  );
};

export default withRouter(TopBar);
