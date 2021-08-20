import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom"; //hack para quitar con redux

import classes from "./SideBarEnterprise.scss";
import * as sideBarActions from "../../store/actions/index";
import * as getOutEnterpriseActions from "../../store/actions/index";

class SideBarEnterprise extends Component {
  sideBarClickHandler = option => {
    switch (option) {
      case "create":
        this.props.onSetConfBackgroundMan(null);
        this.props.onSetConfColorMan(null);
        this.props.onSetConfBackgroundNew("#9EC446");
        this.props.onSetConfColorNew("#F3F3F4");
        this.props.onSetConfBackgroundEdit(null);
        this.props.onSetConfColorEdit(null);
        this.props.onSetConfBackgroundDis(null);
        this.props.onSetConfColorDis(null);
        this.props.onSetConfBackgroundWai(null);
        this.props.onSetConfColorWai(null);
        this.props.history.push("/createenterprise");
        break;
      case "center":
        this.props.onSetConfBackgroundMan(null);
        this.props.onSetConfColorMan(null);
        this.props.onSetConfBackgroundNew(null);
        this.props.onSetConfColorNew(null);
        this.props.onSetConfBackgroundEdit("#9EC446");
        this.props.onSetConfColorEdit("#F3F3F4");
        this.props.onSetConfBackgroundDis(null);
        this.props.onSetConfColorDis(null);
        this.props.onSetConfBackgroundWai(null);
        this.props.onSetConfColorWai(null);
        this.props.history.push("/costcenter");
        break;
      case "employee":
        this.props.onSetConfBackgroundMan(null);
        this.props.onSetConfColorMan(null);
        this.props.onSetConfBackgroundNew(null);
        this.props.onSetConfColorNew(null);
        this.props.onSetConfBackgroundEdit(null);
        this.props.onSetConfColorEdit(null);
        this.props.onSetConfBackgroundDis("#9EC446");
        this.props.onSetConfColorDis("#F3F3F4");
        this.props.onSetConfBackgroundWai(null);
        this.props.onSetConfColorWai(null);
        this.props.history.push("/createemployee");
        break;
      case "table":
        this.props.onSetConfBackgroundMan(null);
        this.props.onSetConfColorMan(null);
        this.props.onSetConfBackgroundNew(null);
        this.props.onSetConfColorNew(null);
        this.props.onSetConfBackgroundEdit(null);
        this.props.onSetConfColorEdit(null);
        this.props.onSetConfBackgroundDis(null);
        this.props.onSetConfColorDis(null);
        this.props.onSetConfBackgroundWai("#9EC446");
        this.props.onSetConfColorWai("#F3F3F4");
        this.props.history.push("/createtablet");
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
        this.props.onSetConfBackgroundWai(null);
        this.props.onSetConfColorWai(null);
        this.props.history.push("/enterprise");
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
    this.props.onSetConfBackgroundDis(null);
    this.props.onSetConfColorDis(null);
    this.props.onSetConfBackgroundWai(null);
    this.props.onSetConfColorWai(null);
    this.props.onGoGetOutEnterprise(this.sideBarClickHandler);
  }

  render() {
    return (
      <div className={classes.SideBarContainer}>
        <div
          className={classes.ZoneText1}
          onClick={() => this.sideBarClickHandler("enterprise")}
          style={{
            background: this.props.sideBarState.confBackgroundMan,
            color: this.props.sideBarState.confColorMan
          }}
        >
          <span className={classes.Text1}>Mi Empresa</span>
        </div>
        <div
          className={classes.ZoneText2}
          onClick={() => this.sideBarClickHandler("create")}
          style={{
            background: this.props.sideBarState.confBackgroundNew,
            color: this.props.sideBarState.confColorNew
          }}
        >
          <span className={classes.Text2}>Crear Empresa</span>
        </div>
        <div
          className={classes.ZoneText3}
          onClick={() => this.sideBarClickHandler("center")}
          style={{
            background: this.props.sideBarState.confBackgroundEdit,
            color: this.props.sideBarState.confColorEdit
          }}
        >
          <span className={classes.Text3}>Centro de Costo</span>
        </div>
        <div
          className={classes.ZoneText4}
          onClick={() => this.sideBarClickHandler("employee")}
          style={{
            background: this.props.sideBarState.confBackgroundDis,
            color: this.props.sideBarState.confColorDis
          }}
        >
          <span className={classes.Text4}>Crear Empleado</span>
        </div>
        <div
          className={classes.ZoneText5}
          onClick={() => this.sideBarClickHandler("table")}
          style={{
            background: this.props.sideBarState.confBackgroundWai,
            color: this.props.sideBarState.confColorWai
          }}
        >
          <span className={classes.Text5}>Crear Mesas</span>
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
      onSetConfBackgroundDis: confBackgroundDis =>
      dispatch(sideBarActions.setConfBackgroundDis(confBackgroundDis)),
    onSetConfColorDis: confColorDis =>
      dispatch(sideBarActions.setConfColorDis(confColorDis)),
    onSetConfBackgroundWai: confBackgroundWai =>
      dispatch(sideBarActions.setConfBackgroundWai(confBackgroundWai)),
    onSetConfColorWai: confColorWai =>
      dispatch(sideBarActions.setConfColorWai(confColorWai)),

    onGoGetOutEnterprise: getOutEnterpriseHandler =>
      dispatch(
        getOutEnterpriseActions.goGetOutEnterprise(getOutEnterpriseHandler)
      )
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SideBarEnterprise));
