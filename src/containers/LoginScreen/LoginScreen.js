import React, { Component } from "react";
import { withRouter } from "react-router-dom"; //hack para quitar con redux

import classes from "./LoginScreen.scss";
import FaUser from "react-icons/lib/fa/user";
import FaLock from "react-icons/lib/fa/lock";
import LoginScreenShape from "../../components/LoginScreenShape/LoginScreenShape";
import ButtonSwicht from "../../components/Buttons/ButtonSwicht/ButtonSwicht";

class LoginScreen extends Component {
  loginHandler = () => {
    this.props.history.push("/enterprise");
    this.props.cardSize("18.2%");
    this.props.topBarVisible("visible");
    this.props.sideBarHandler("hidden");
  };
  render() {
    return (
      <div className={classes.LoginContainer}>
        <div className={classes.Zone1} />
        <div className={classes.ContainerControls}>
          <div className={classes.Margin1} />
          <div className={classes.User}>
            <LoginScreenShape placeholder={"Usuario"} id={'usuario'} icon={<FaUser />} />
          </div>
          <div className={classes.Margin2} />
          <div className={classes.Password}>
            <LoginScreenShape
              placeholder={"Password"}
              Type={"Password"}
              icon={<FaLock />}
              id={'password'}
            />
          </div>
          <div className={classes.Button}>
            <div onClick={this.loginHandler} className={classes.RealButton}>
              <div className={classes.TextBtn}>
                <span>Entrar</span>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.ContainerOnOff}>
          <ButtonSwicht />
        </div>
      </div>
    );
  }
}

export default withRouter(LoginScreen);
