import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom"; //hack para quitar con redux

import classes from "./SideBarCatalog.scss";
import * as sideBarActions from "../../store/actions/index";
import * as getOutCatalogActions from "../../store/actions/index";

class SideBarCatalog extends Component {
  sideBarClickHandler = option => {
    switch (option) {
      case "edit":
        this.props.onSetConfBackgroundMan(null);
        this.props.onSetConfColorMan(null);
        this.props.onSetConfBackgroundNew("#9EC446");
        this.props.onSetConfColorNew("#F3F3F4");
        this.props.onSetConfBackgroundEdit(null);
        this.props.onSetConfColorEdit(null);
        this.props.history.push("/editcatalog");
        break;
      case "create":
        this.props.onSetConfBackgroundMan(null);
        this.props.onSetConfColorMan(null);
        this.props.onSetConfBackgroundNew(null);
        this.props.onSetConfColorNew(null);
        this.props.onSetConfBackgroundEdit("#9EC446");
        this.props.onSetConfColorEdit("#F3F3F4");
        this.props.history.push("/createrecipe");
        break;

      default:
        this.props.onSetConfBackgroundMan("#9EC446");
        this.props.onSetConfColorMan("#F3F3F4");
        this.props.onSetConfBackgroundNew(null);
        this.props.onSetConfColorNew(null);
        this.props.onSetConfBackgroundEdit(null);
        this.props.onSetConfColorEdit(null);
        this.props.history.push("/catalog");
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
    this.props.onGoGetOutCatalog(this.sideBarClickHandler);
  }

  render() {
    return (
      <div className={classes.SideBarContainer}>
        <div
          className={classes.ZoneText1}
          onClick={() => this.sideBarClickHandler("manager")}
          style={{
            background: this.props.sideBarState.confBackgroundMan,
            color: this.props.sideBarState.confColorMan
          }}
        >
          <span className={classes.Text1}>Gestor</span>
          <span className={classes.Text12}>de Catalogo</span>
        </div>
        <div
          className={classes.ZoneText2}
          onClick={() => this.sideBarClickHandler("edit")}
          style={{
            background: this.props.sideBarState.confBackgroundNew,
            color: this.props.sideBarState.confColorNew
          }}
        >
          <span className={classes.Text2}>Editar Catalogo</span>
        </div>
        <div
          className={classes.ZoneText3}
          onClick={() => this.sideBarClickHandler("create")}
          style={{
            background: this.props.sideBarState.confBackgroundEdit,
            color: this.props.sideBarState.confColorEdit
          }}
        >
          <span className={classes.Text3}>Crear</span>
          <span className={classes.Text13}>Sub-Receta</span>
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
    onSetConfBackgroundMan: confBackgroundMan => {
      dispatch(sideBarActions.setConfBackgroundMan(confBackgroundMan));
    },
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

      onGoGetOutCatalog: getOutCatalogHandler =>
      dispatch(getOutCatalogActions.goGetOutCatalog(getOutCatalogHandler))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SideBarCatalog));
