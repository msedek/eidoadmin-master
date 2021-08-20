import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";

import classes from "./CreateProvider.scss";
import ButtonSave from "../../components/Buttons/ButtonSave/ButtonSave";
import ButtonExit from "../../components/Buttons/ButtonExit/ButtonExit";
import ComboBox from "../../components/ComboBox/ComboBox";
import * as centerCostActions from "../../store/actions/index";

class CreateProvider extends Component {
  state = {
    nombre: "",
    codigo: "",
    ruc: "",
    direccionFiscal: "",
    telefono: "",
    eMail: "",
    tipos: [{ nombre: "Servicios" }, { nombre: "Insumos" }],
    Tipo: "",
    centerCoste: [],
    centroDeCosto: {}
  };
  componentDidMount() {
    this.props.cardSize("18.2%");
    this.props.onGetCenterCost();
  }

  componentDidUpdate() {
    let centerCoste = [];
    let sortedCenter = [];
    if (this.props.centerCost.length > 0) {
      this.props.centerCost.forEach(element => {
        let fullData = {};
        fullData.nombre = element.nombre;
        fullData.data = element;
        centerCoste.push(fullData);
      });
      sortedCenter = centerCoste.slice(0);
      sortedCenter.sort(function(a, b) {
        let x = a.nombre.toLowerCase();
        let y = b.nombre.toLowerCase();
        return x < y ? -1 : x > y ? 1 : 0;
      });

      this.setState(
        {
          centerCoste: sortedCenter
        },
        () => this.props.onDeleteCenterCost()
      );
    }
  }

  typeHandler = e => {
    switch (e.target.name) {
      case "codigo":
        this.setState({
          codigo: e.target.value
        });
        break;
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
      case "telefono":
        this.setState({
          telefono: e.target.value
        });
        break;
      case "eMail":
        this.setState({
          eMail: e.target.value
        });
        break;

      default:
        break;
    }
  };
  onClickHandler = (ev, options) => {
    let filtrado = [];
    for (let index = 0; index < options.length; index++) {
      const element = options[index];
      if (element.nombre === ev.target.value) {
        filtrado.push(element);
        break;
      }
    }
    let data = filtrado.pop();

    if (data !== undefined) {
      let codigo =
        data.nombre[0] + data.nombre[1] + data.nombre[2] + "-" + this.state.ruc;
      this.setState({
        Tipo: data.nombre,
        codigo: codigo.toUpperCase()
      });
    }
  };

  saveProviderHandler = () => {
    let enabler1 = this.state.nombre === "";
    let enabler2 = this.state.ruc === "";
    let enabler3 = this.state.direccionFiscal === "";
    let enabler4 = Object.keys(this.state.Tipo).length === 0;

    let enabler5 = this.state.telefono === "";
    let enabler6 = this.state.eMail === "";
    let enabler7 = Object.keys(this.state.centroDeCosto).length === 0;
    if (enabler1) {
      alert("Debe ingresar nombre del proveedor");
    } else if (enabler2) {
      alert("Debe ingresar ruc del proveedor");
    } else if (enabler3) {
      alert("Debe ingresar direccion del proveedor");
    } else if (enabler4) {
      alert("Debe seleccionar un tipo");
    } else if (enabler5) {
      alert("Debe ingresar numero del proveedor");
    } else if (enabler6) {
      alert("Debe ingresar E-mail del proveedor");
    } else if (enabler7) {
      alert("Debe seleccionar un Centro de costo");
    }
    if (
      !enabler1 &&
      !enabler2 &&
      !enabler3 &&
      !enabler4 &&
      !enabler5 &&
      !enabler6 &&
      !enabler7
    ) {
      let tipo = "";
      tipo = this.state.Tipo.slice(0);
      let toSend = {};
      toSend.nombre = this.state.nombre;
      toSend.ruc = this.state.ruc;
      toSend.direccionFiscal = this.state.direccionFiscal;
      toSend.tipo = tipo;
      toSend.telefono = this.state.telefono;
      toSend.email = this.state.eMail;
      toSend.codigo = this.state.codigo;
      toSend.centroDeCosto = this.state.centroDeCosto;
      axios
        .post("http://68.183.27.146:4000/api/proveedores", toSend, {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json"
          },
          responseType: "json"
        })
        .then(response => {
          if (response.status === 200) {
            alert("proveedor Creado con Exito");
            this.setState({
              // codigo: "",
              // nombre: "",
              // direccionFiscal: "",
              // ruc: "",
              // tipo: [],
              // telefono: "",
              // eMail: ""
            });
          }
        })
        .catch(error => {
          console.log(error); //dispatch error

          if (error.response.status === 500) {
            alert("Proveedor repetido, cambie el Ruc");
          }
        });
    }
  };

  onClickHandlerCenterCoste = (ev, options) => {
    let filtrado = [];
    for (let index = 0; index < options.length; index++) {
      const element = options[index];
      if (element.nombre === ev.target.value) {
        filtrado.push(element);
        break;
      }
    }
    let data = filtrado.pop();

    if (data !== undefined) {
      this.setState({
        centroDeCosto: {
          codigo: data.data.codigo,
          nombre: data.nombre,
          empleados: data.data.empleados,
          insumos: data.data.insumos,
          _id: data.data._id
        }
      });
    }
  };

  render() {
    return (
      <div className={classes.Container}>
        <div className={classes.Zone1}>
          <div className={classes.FormText}>
            <span className={classes.ZoneCode}>Código</span>
            <span className={classes.ZoneName}>Nombre</span>
            <span className={classes.ZoneRuc}>RUC</span>
            <span className={classes.ZoneAddress}>Dirección</span>
            <span className={classes.ZoneType}>Tipo</span>
            <span className={classes.ZonePhone}>Teléfono</span>
            <span className={classes.ZoneEmail}>E-mail</span>
            <span className={classes.ZoneCenterCoste}>C. de Costo</span>
          </div>
          <div className={classes.FormBox}>
            <input
              className={classes.BoxCode}
              type="text"
              name="codigo"
              id=""
              value={this.state.codigo}
              readOnly={true}
              onChange={this.typeHandler}
            />
            <input
              className={classes.BoxName}
              type="text"
              name="nombre"
              id=""
              onChange={this.typeHandler}
            />
            <input
              className={classes.BoxRuc}
              type="text"
              name="ruc"
              id=""
              onChange={this.typeHandler}
            />
            <input
              className={classes.BoxAddress}
              type="text"
              name="direccionFiscal"
              id=""
              onChange={this.typeHandler}
            />
            <div className={classes.BoxType}>
              <ComboBox
                text={this.state.tipos}
                onClickHandler={this.onClickHandler}
              />
            </div>
            <input
              className={classes.BoxPhone}
              type="text"
              name="telefono"
              id=""
              onChange={this.typeHandler}
            />
            <input
              className={classes.BoxEmail}
              type="email"
              name="eMail"
              id=""
              onChange={this.typeHandler}
            />
            <div className={classes.CenterCoste}>
              <ComboBox
                text={this.state.centerCoste}
                onClickHandler={this.onClickHandlerCenterCoste}
              />
            </div>
          </div>
        </div>
        <div className={classes.Zone2}>
          <div className={classes.BtnSave}>
            <ButtonSave
              confMarginLeftIcon={"0.5rem"}
              confPaddingTop={"0.6rem"}
              confMarginLeftText={"-0.2rem"}
              confMarginTopText={"-0.2rem"}
              clicked={this.saveProviderHandler}
            />
          </div>
          <div className={classes.BtnExit}>
            <ButtonExit
              marginLeftText={"0rem"}
              confMarginTopText={"-0.01rem"}
              clicked={() => this.props.getOutPurshase("crearec")}
            />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    getOutPurshase: state.getOutPurshase.getOutPurshaseHandler,
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
)(withRouter(CreateProvider));
