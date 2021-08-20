import React, { Component } from "react";
import { withRouter } from "react-router-dom"; //hack para quitar con redux
import { connect } from "react-redux";

import classes from "./CostCenter.scss";
import ComboBox from "../../components/ComboBox/ComboBox";
import ButtonPlus from "../../components/Buttons/ButtonPlus/ButtonPlus";
import ButtonEdit from "../../components/Buttons/ButtonEdit/ButtonEdit";
import ButtonExit from "../../components/Buttons/ButtonExit/ButtonExit";
import * as locationActions from "../../store/actions/index";

class CostCenter extends Component {
  state = {
    unidades: ["Contabilidad", "Administracion", "Costo"]
  };

  createHandler = () => {
    this.props.history.push("/createcostcenter");
  };

  componentDidMount() {
    this.props.cardSize("18.2%");
  }

  onClickHandler=()=>{
    console.log("test")
  }

  render() {
    return (
      <div className={classes.Container}>
        <div className={classes.ZoneData}>
          <div className={classes.InfoEnterprise}>
            <div className={classes.Name}>
              <span className={classes.Text1}>Nombre:</span>
            </div>
            <div className={classes.Ruc}>
              <span className={classes.Text2}>RUC:</span>
            </div>
            <div className={classes.FiscalAddress}>
              <span className={classes.Text3}>Dirección fiscal:</span>
            </div>
            <div className={classes.CostCenter}>
              <span className={classes.Text4}>Centro de Costo:</span>
            </div>
          </div>
          <div className={classes.DataEnterprise}>
            <div className={classes.DataName}>
              <span className={classes.Text1}>La Mabini</span>
            </div>
            <div className={classes.DataRuc}>
              <span>
                <span className={classes.Text2}> 20454332269 </span>
              </span>
            </div>
            <div className={classes.DataFiscalAddress}>
              <span className={classes.Text3}>
                Av. Jose Pardo 432, Oficina 701 Distrito Miraflores, Lima, Peru.
              </span>
            </div>
            <div className={classes.DataCostCenter}>
              <ComboBox text={this.state.unidades}
              onClickHandler={this.onClickHandler} />
            </div>
          </div>
          <div className={classes.ZoneImag}>
            <div className={classes.RealImage} />
          </div>
        </div>
        <div className={classes.ZoneText}>
          <div className={classes.RealText}>
            <input className={classes.Text} type="text" name="" id="" />
          </div>
        </div>
        <div className={classes.ZoneButtos}>
          <div className={classes.ZoneBtnPlus}>
            <div className={classes.BtnPlus}>
              <ButtonPlus
                clicked={this.createHandler}
                spanText={"Agregar Centro de Costo"}
                confFontSize={"0.81rem"}
                location={() => this.props.onGoToLocation("new")}
              />
            </div>
          </div>
          <div className={classes.ZoneBtnDE}>
            <div className={classes.BtnEdit}>
              <ButtonEdit confMarginTop={"-0.11rem"} />
            </div>
            <div className={classes.BtnExit}>
              <ButtonExit
                clicked={() => this.props.getOutEnterprise("enterprise")}
                confMarginLeftIcon={"0.25rem"}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    getOutEnterprise: state.getOutEnterprise.getOutEnterpriseHandler
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGoToLocation: location => dispatch(locationActions.goToLocation(location))
  };
};

export default connect(mapStateToProps, mapDispatchToProps )(withRouter(CostCenter));
