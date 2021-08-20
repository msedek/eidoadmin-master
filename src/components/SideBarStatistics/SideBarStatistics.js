import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom"; //hack para quitar con redux

import classes from "./SideBarStatistics.scss";
import * as sideBarActions from "../../store/actions/index";

class SideBarStatistics extends Component {
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
  }
  sideBarClickHandler = option => {
    switch (option) {
      case "sales":
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
        this.props.history.push("/salestatistics");
        break;
      case "tablet":
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
        this.props.history.push("/statisticstables");
        break;
      case "dishes":
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
        this.props.history.push("/statisticsdishes");
        break;
      case "waiter":
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
        this.props.history.push("/waiterstatistics")
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
        this.props.history.push("/statistics");
        break;
    }
  };
  render() {
    return (
      <div className={classes.SideBarContainer}>
        <div
          className={classes.ZoneText1}
          onClick={() => this.sideBarClickHandler("occupation")}
          style={{
            background: this.props.sideBarState.confBackgroundMan,
            color: this.props.sideBarState.confColorMan
          }}
        >
          <span className={classes.Text1}>Ocupacion</span>
          <span className={classes.Text12}>de mesas</span>
        </div>
        <div
          className={classes.ZoneText2}
          onClick={() => this.sideBarClickHandler("sales")}
          style={{
            background: this.props.sideBarState.confBackgroundNew,
            color: this.props.sideBarState.confColorNew
          }}
        >
          <span className={classes.Text2}>Ventas</span>
        </div>
        <div
          className={classes.ZoneText3}
          onClick={() => this.sideBarClickHandler("tablet")}
          style={{
            background: this.props.sideBarState.confBackgroundEdit,
            color: this.props.sideBarState.confColorEdit
          }}
        >
          <span className={classes.Text3}>Mesas</span>
        </div>
        <div
          className={classes.ZoneText4}
          onClick={() => this.sideBarClickHandler("dishes")}
          style={{
            background: this.props.sideBarState.confBackgroundDis,
            color: this.props.sideBarState.confColorDis
          }}
        >
          <span className={classes.Text4}>Platos</span>
        </div>
        <div
          className={classes.ZoneText5}
          onClick={() => this.sideBarClickHandler("waiter")}
          style={{
            background: this.props.sideBarState.confBackgroundWai,
            color: this.props.sideBarState.confColorWai
          }}
        >
          <span className={classes.Text5}>Meseros</span>
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
      dispatch(sideBarActions.setConfColorWai(confColorWai))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  withRouter(SideBarStatistics)
);
