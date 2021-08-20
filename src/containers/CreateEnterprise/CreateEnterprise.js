import React, { Component } from "react";
import { withRouter } from "react-router-dom"; //hack para quitar con redux
import { connect } from "react-redux";
import axios from "axios";

import classes from "./CreateEnterprise.scss";
import ButtonSave from "../../components/Buttons/ButtonSave/ButtonSave";
import EditCatalogShape from "../../components/EditCatalogShape/EditCatalogShape";
import HeaderTitleProduct from "../../components/HeaderTitle/HeaderTitleProduct/HeaderTitleProduct";
import * as centerCostActions from "../../store/actions/index";

class CreateEnterprise extends Component {
  state = {
    nombre: "",
    ruc: "",
    direccionFiscal: "",
    sucursal: "",
    direccionFisica: "",
    paginaWeb: "",
    centerCoste: [],
    centrosDeCosto: [],
    logo: ""
  };

  componentDidMount() {
    this.props.cardSize("18.2%");
    this.props.onGetCenterCost();
  }

  componentDidUpdate() {
    let centerCoste = [];
    let sorted = [];

    if (this.props.centerCost.length > 0) {
      this.props.centerCost.forEach(element => {
        let fullData = {};
        fullData.nombre = element.nombre;
        fullData.data = element;
        centerCoste.push(fullData);
      });
      sorted = centerCoste.slice(0);
      sorted.sort(function(a, b) {
        let x = a.nombre.toLowerCase();
        let y = b.nombre.toLowerCase();
        return x < y ? -1 : x > y ? 1 : 0;
      });
      this.setState(
        {
          centerCoste: sorted
        },
        () => this.props.onDeleteCenterCost()
      );
    }
  }

  onClickHandler = e => {
    switch (e.target.name) {
      case "nombre":
        this.setState({
          nombre: e.target.value
        });
        break;
      case "ruc":
        this.setState({
          ruc: e.target.value
        });
        break;
      case "direccionFiscal":
        this.setState({
          direccionFiscal: e.target.value
        });
        break;
      case "sucursal":
        this.setState({
          sucursal: e.target.value
        });
        break;
      case "direccionFisica":
        this.setState({
          direccionFisica: e.target.value
        });
        break;
      case "paginaWeb":
        this.setState({
          paginaWeb: e.target.value
        });
        break;

      default:
        break;
    }
  };

  saveEntreprise = () => {
    let enabler1 = this.state.nombre === "";
    let enabler2 = this.state.ruc === "";
    let enabler3 = this.state.direccionFiscal === "";
    let enabler4 = this.state.sucursal === "";
    let enabler5 = this.state.direccionFisica === "";
    let enabler6 = this.state.paginaWeb === "";
    if (enabler1) {
      alert("Debe indicar el nombre de la empresa");
    } else if (enabler2) {
      alert("Debe indicar el RUC de la empresa");
    } else if (enabler3) {
      alert("Debe indicar la direccion fiscal de la empresa");
    } else if (enabler4) {
      alert("Debe numero de suculsal de la empresa");
    } else if (enabler5) {
      alert("Debe indicar la direccion fisca de la empresa");
    } else if (enabler6) {
      alert("Debe indicar sitio Web de la empresa");
    } else if (
      !enabler1 &&
      !enabler2 &&
      !enabler3 &&
      !enabler4 &&
      !enabler5 &&
      !enabler6
    ) {
      let empresa = {};

      empresa.nombre = this.state.nombre;
      empresa.ruc = this.state.ruc;
      empresa.direccionFiscal = this.state.direccionFiscal;
      empresa.sucursal = this.state.sucursal;
      empresa.direccionFisica = this.state.direccionFisica;
      empresa.paginaWeb = this.state.paginaWeb;
      empresa.centrosDeCosto = this.state.centrosDeCosto;
      axios
        .post("http://68.183.27.146:4000/api/empresas", empresa, {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json"
          },
          responseType: "json"
        })
        .then(response => {
          if (response.status === 200) {
            alert("Empresa Creado con Exito");
            this.setState({
              nombre: "",
              ruc: "",
              direccionFiscal: "",
              sucursal: "",
              direccionFisica: "",
              paginaWeb: "",
              centrosDeCosto: []
            });
          }
        })
        .catch(error => {
          console.log(error); //dispatch error
        });
    }
  };

  onChangeHandler = (ev, data) => {
    let status = ev.target.checked;
    let centrosDeCosto = this.state.centrosDeCosto.slice(0);
    if (status) {
      centrosDeCosto.push({
        codigo: data.data.codigo,
        nombre: data.nombre,
        empleados: data.data.empleados,
        insumos: data.data.insumos,
        _id: data.data._id
      });
      this.setState({
        centrosDeCosto: centrosDeCosto
      });
    } else {
      let filtrado = [];
      filtrado = centrosDeCosto.filter(a => a !== data);
      this.setState({
        centrosDeCosto: filtrado
      });
    }
  };

  render() {
    return (
      <div className={classes.ContainerEnterprise}>
        <div className={classes.DataCreate}>
          <div className={classes.DataEnterprise}>
            <div className={classes.NameEnterprise}>
              <span>Nombre</span>
            </div>
            <div className={classes.RucEnterprise}>
              <span>RUC</span>
            </div>
            <div className={classes.FiscalAddress}>
              <span>Dirección Físcal</span>
            </div>

            <div className={classes.FiscalPhysical}>
              <span>Dirección Física</span>
            </div>
            <div className={classes.WebSite}>
              <span>Sitio Web</span>
            </div>
          </div>
          <div className={classes.CreateData}>
            <div className={classes.TextName}>
              <input
                className={classes.RealName}
                type="text"
                name="nombre"
                onChange={this.onClickHandler}
                value={this.state.nombre}
              />
            </div>
            <div className={classes.TextRuc}>
              <input
                className={classes.RealRuc}
                type="number"
                name="ruc"
                onChange={this.onClickHandler}
                value={this.state.ruc}
                min="0"
              />
            </div>
            <div className={classes.TextAddress}>
              <input
                className={classes.RealAddress}
                type="text"
                name="direccionFiscal"
                onChange={this.onClickHandler}
                value={this.state.direccionFiscal}
              />
            </div>
            <div className={classes.TextPhysical}>
              <input
                className={classes.RealPhysical}
                type="text"
                name="direccionFisica"
                onChange={this.onClickHandler}
                value={this.state.direccionFisica}
              />
            </div>
            <div className={classes.TextWeb}>
              <input
                className={classes.RealWeb}
                type="text"
                onChange={this.onClickHandler}
                value={this.state.paginaWeb}
                name="paginaWeb"
              />
            </div>
          </div>
        </div>
        <div className={classes.Image}>
          <div className={classes.Logo}>
            <div className={classes.RealLogo}>
              <input type="image" src="" alt="" />
            </div>
          </div>
          <div className={classes.TextBranch}>
            <div className={classes.NoBranch}>
              <span>Nr. Sucursal</span>
            </div>
            <input
              className={classes.RealBranch}
              type="number"
              name="sucursal"
              onChange={this.onClickHandler}
              value={this.state.sucursal}
              min="0"
            />
          </div>
        </div>
        <div className={classes.ZoneList}>
          <div className={classes.ZoneTitle}>
            <HeaderTitleProduct
              confFontSize={"1.05rem"}
              spanText={"Centro de Costo"}
            />
          </div>
          <div className={classes.List}>
            <EditCatalogShape
              data={this.state.centerCoste}
              onChangeHandler={this.onChangeHandler}
              confHeightCheck={"100%"}
              confMarfinLeftBox={"-5rem"}
              confWidth={"99.8%"}
              origen={"Enterprise"}
            />
          </div>
        </div>
        <div className={classes.ZoneButton}>
          <div className={classes.BtnSave}>
            <ButtonSave
              confGridRows={"50% 15% 1fr"}
              confPaddingTop={"0rem"}
              confMarginLeftIcon={"0.65rem"}
              confMarginTopText={"-0.03rem"}
              confMarginTopIcon={"0.3rem"}
              // clicked={() => this.props.getOutEnterprise("enterprise")}
              clicked={this.saveEntreprise}
            />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    getOutEnterprise: state.getOutEnterprise.getOutEnterpriseHandler,
    centerCost: state.centerCost.centerCost
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetCenterCost: () => {
      dispatch(centerCostActions.getCenterCost());
    },
    onDeleteCenterCost: () => {
      dispatch(centerCostActions.deleteCenterCost([]));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CreateEnterprise));
