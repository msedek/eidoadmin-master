import React, { Component } from "react";
import { withRouter } from "react-router-dom"; //hack para quitar con redux

import classes from "./Enterprise.scss";
import ButtonExit from "../../components/Buttons/ButtonExit/ButtonExit";
import ButtonEdit from "../../components/Buttons/ButtonEdit/ButtonEdit";
import Logo from "../../images/image.png";
import ComboBox from "../../components/ComboBox/ComboBox";

class Enterprise extends Component {
  state = {
    empresa: ["La Mabini", "El Dorsol"]
  };
  logOutHandler = () => {
    this.props.topBarVisible("hidden");
    this.props.cardSize("3.9%");
    this.props.history.push("/");
    this.props.sideBarHandler("hidden");
  };
  componentDidMount() {
    this.props.cardSize("18.2%");
    this.props.topBarVisible("visible");
    this.props.sideBarHandler("visible");
  }

  onClickHandler = () => {
    console.log("test");
  };

  render() {
    return (
      <div className={classes.EnterpriseContainer}>
        <div className={classes.DataContainer}>
          <div className={classes.ListDatos}>
            <div className={classes.IconList}>
              <ComboBox
                text={this.state.empresa}
                onClickHandler={this.onClickHandler}
              />
            </div>
          </div>
          <div className={classes.RucDatos}>
            <div className={classes.TextDatos}>
              <div className={classes.DatosRuc}>
                <span>
                  RUC: <span className={classes.Nruc}> 20454332269 </span>
                </span>
              </div>
              <div className={classes.DatosAddress}>
                <span> Direccion Fiscal: </span>
                <div className={classes.Datos}>
                  <span>
                    Av. Jose Pardo 432, Oficina 701 Distrito Miraflores, Lima,
                    Peru.
                  </span>
                </div>
              </div>
              <div className={classes.DatosBranch}>
                <span>Nr. Sucursal: 1</span>
              </div>
              <div className={classes.PhysicAladdress}>
                <span> Direccion Física: </span>
                <div className={classes.Datos}>
                  <span>
                    Av. Jose Pardo 432, Oficina 701 Distrito Miraflores, Lima,
                    Peru.
                  </span>
                </div>
              </div>
              <div className={classes.WebSite}>
                <span className={classes.WebTitle}>Sitio Web:</span>
                <span className={classes.UrlWeb}>www.lamabini.com.pe</span>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.Button}>
          <div className={classes.Image}>
            <div
              className={classes.RealImage}
              style={{
                backgroundImage: `url(${Logo})`
              }}
            />
          </div>
          <div className={classes.Buttons}>
            <div className={classes.BtnEdit}>
              <ButtonEdit confMarginTop={"-0.11rem"} />
            </div>
            <div className={classes.BtnExit}>
              <ButtonExit
                clicked={this.logOutHandler}
                confMarginLeftIcon={"-0.1rem"}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(Enterprise);
