import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom"; //hack para quitar con redux

import classes from "./SideBarPurshase.scss";
import * as sideBarActions from "../../store/actions/index";
import * as getOutPurshaseActions from "../../store/actions/index";

class SideBarPurshase extends Component {
  sideBarClickHandler = option => {
    switch (option) {
      case "createp":
        this.props.onSetConfBackgroundMan(null);
        this.props.onSetConfColorMan(null);
        this.props.onSetConfBackgroundNew("#9EC446");
        this.props.onSetConfColorNew("#F3F3F4");
        this.props.onSetConfBackgroundEdit(null);
        this.props.onSetConfColorEdit(null);
        this.props.history.push("/createprovider");
        break;
      case "createi":
        this.props.onSetConfBackgroundMan(null);
        this.props.onSetConfColorMan(null);
        this.props.onSetConfBackgroundNew(null);
        this.props.onSetConfColorNew(null);
        this.props.onSetConfBackgroundEdit("#9EC446");
        this.props.onSetConfColorEdit("#F3F3F4");
        this.props.history.push("/createspplies");
        break;

      default:
        this.props.onSetConfBackgroundMan("#9EC446");
        this.props.onSetConfColorMan("#F3F3F4");
        this.props.onSetConfBackgroundNew(null);
        this.props.onSetConfColorNew(null);
        this.props.onSetConfBackgroundEdit(null);
        this.props.onSetConfColorEdit(null);
        this.props.history.push("/purshase");
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
    this.props.onGoGetOutPurshase(this.sideBarClickHandler);
  }

  render() {
    return (
      <div className={classes.SideBarContainer}>
        <div
          className={classes.ZoneText1}
          onClick={() => this.sideBarClickHandler("crearec")}
          style={{
            background: this.props.sideBarState.confBackgroundMan,
            color: this.props.sideBarState.confColorMan
          }}
        >
          <span className={classes.Text1}>Crear Compra</span>
        </div>
        <div
          className={classes.ZoneText2}
          onClick={() => this.sideBarClickHandler("createp")}
          style={{
            background: this.props.sideBarState.confBackgroundNew,
            color: this.props.sideBarState.confColorNew
          }}
        >
          <span className={classes.Text2}>Crear Provedor</span>
        </div>
        <div
          className={classes.ZoneText3}
          onClick={() => this.sideBarClickHandler("createi")}
          style={{
            background: this.props.sideBarState.confBackgroundEdit,
            color: this.props.sideBarState.confColorEdit
          }}
        >
          <span className={classes.Text3}>Crear Insumo</span>
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

      onGoGetOutPurshase: getOutPurshaseHandler =>
      dispatch(getOutPurshaseActions.goGetOutPurshase(getOutPurshaseHandler))
      
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SideBarPurshase));
