import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom"; //hack para quitar con redux

import classes from "./SideBarProduct.scss";
import * as sideBarActions from "../../store/actions/index";
import * as newProductActions from "../../store/actions/index";
import * as editProductActions from "../../store/actions/index";
import * as getOutProductActions from "../../store/actions/index";

class SideBarProduct extends Component {
  sideBarClickHandler = option => {
    switch (option) {
      case "new":
        this.props.onSetConfBackgroundMan(null);
        this.props.onSetConfColorMan(null);
        this.props.onSetConfBackgroundNew("#9EC446");
        this.props.onSetConfColorNew("#F3F3F4");
        this.props.onSetConfBackgroundEdit(null);
        this.props.onSetConfColorEdit(null);
        this.props.onSetConfBackgroundDis(null);
        this.props.onSetConfColorDis(null);
        this.props.history.push("/newproduct");
        break;
      case "edit":
        this.props.onSetConfBackgroundMan(null);
        this.props.onSetConfColorMan(null);
        this.props.onSetConfBackgroundNew(null);
        this.props.onSetConfColorNew(null);
        this.props.onSetConfBackgroundEdit("#9EC446");
        this.props.onSetConfColorEdit("#F3F3F4");
        this.props.onSetConfBackgroundDis(null);
        this.props.onSetConfColorDis(null);
        this.props.history.push("/editproduct");

        break;

        case "create":
        this.props.onSetConfBackgroundMan(null);
        this.props.onSetConfColorMan(null);
        this.props.onSetConfBackgroundNew(null);
        this.props.onSetConfColorNew(null);
        this.props.onSetConfBackgroundEdit(null);
        this.props.onSetConfColorEdit(null);
        this.props.onSetConfBackgroundDis("#9EC446");
        this.props.onSetConfColorDis("#F3F3F4");
        this.props.history.push("/CreateSubrecipe");

        break;

      default:
        this.props.onSetConfBackgroundMan("#9EC446");
        this.props.onSetConfColorMan("#F3F3F4");
        this.props.onSetConfBackgroundNew(null);
        this.props.onSetConfColorNew(null);
        this.props.onSetConfBackgroundEdit(null);
        this.props.onSetConfColorEdit(null);
        this.props.onSetConfBackgroundDis(null);
        this.props.onSetConfColorDis(null);
        this.props.history.push("/product");

        break;
    }
  };

  componentDidMount() {
    this.props.onSetConfBackgroundMan("#9EC446");
    this.props.onSetConfColorMan("#F3F3F4");
    this.props.onSetConfBackgroundNew(null);
    this.props.onSetConfColorNew(null);
    this.props.onSetConfBackgroundEdit(null);
    this.props.onSetConfColorEdit(null);
    this.props.onGoToNewProduct(this.sideBarClickHandler);
    this.props.onGoToEditProduct(this.sideBarClickHandler);
    this.props.onGoGetOutProduct(this.sideBarClickHandler);
    this.props.onGoSelectRecipe(this.sideBarClickHandler);
    this.props.onGoEditRecipe(this.sideBarClickHandler);
  }

  render() {
    return (
      <div className={classes.SideBarContainer}>
        <div
          className={classes.ZoneText1}
          style={{
            background: this.props.sideBarState.confBackgroundMan,
            color: this.props.sideBarState.confColorMan
          }}
        >
          <span className={classes.Text1}>Gestor</span>
          <span className={classes.Text12}>de Producto</span>
        </div>
        <div
          className={classes.ZoneText2}
          style={{
            background: this.props.sideBarState.confBackgroundNew,
            color: this.props.sideBarState.confColorNew
          }}
        >
          <span className={classes.Text2}>Nuevo</span>
        </div>
        <div
          className={classes.ZoneText3}
          style={{
            background: this.props.sideBarState.confBackgroundEdit,
            color: this.props.sideBarState.confColorEdit
          }}
        >
          <span className={classes.Text3}>Editar</span>
        </div>
        <div
          className={classes.ZoneText4}
          onClick={() => this.sideBarClickHandler("create")}
          style={{
            background: this.props.sideBarState.confBackgroundDis,
            color: this.props.sideBarState.confColorDis
          }}
        >
          <span className={classes.Text4}>Preparar</span>
          <span className={classes.Text5}>Sub-Receta</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    sideBarState: state.sideBarState
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSetConfBackgroundMan: confBackgroundMan =>
      dispatch(sideBarActions.setConfBackgroundMan(confBackgroundMan)),
    onSetConfColorMan: confColorMan =>
      dispatch(sideBarActions.setConfColorMan(confColorMan)),
    onSetConfBackgroundNew: confBackgroundNew =>
      dispatch(sideBarActions.setConfBackgroundNew(confBackgroundNew)),
    onSetConfColorNew: confColorNew =>
      dispatch(sideBarActions.setConfColorNew(confColorNew)),
    onSetConfBackgroundEdit: confBackgroundEdit =>
      dispatch(sideBarActions.setConfBackgroundEdit(confBackgroundEdit)),
    onSetConfColorEdit: confColorEdit =>
      dispatch(sideBarActions.setConfColorEdit(confColorEdit)),
    onGoToNewProduct: newProductHandler =>
      dispatch(newProductActions.goToNewProduct(newProductHandler)),
      onSetConfBackgroundDis: confBackgroundDis =>
      dispatch(sideBarActions.setConfBackgroundDis(confBackgroundDis)),
    onSetConfColorDis: confColorDis =>
      dispatch(sideBarActions.setConfColorDis(confColorDis)),
    onGoToEditProduct: editProductHandler =>
      dispatch(editProductActions.goToEditProduct(editProductHandler)),
    onGoGetOutProduct: getOutProductHandler =>
      dispatch(getOutProductActions.goGetOutProduct(getOutProductHandler)),
    onGoSelectRecipe: goSelectRecipeHandler =>
      dispatch(getOutProductActions.goSelectRecipe(goSelectRecipeHandler)),
    onGoEditRecipe: goEditRecipeHandler =>
      dispatch(getOutProductActions.goEditRecipe(goEditRecipeHandler))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SideBarProduct));
