import React, { Component } from "react";

import classes from "./CreateEmployee.scss";
import ButtonSave from "../../components/Buttons/ButtonSave/ButtonSave";
import ButtonEdit from "../../components/Buttons/ButtonEdit/ButtonEdit";
import HeaderTitleProduct from "../../components/HeaderTitle/HeaderTitleProduct/HeaderTitleProduct";
import ProductManagerShape from "../../components/ProductManagerShape/ProductManagerShape";

class CreateEmployee extends Component {
  state = {
    nombre: "",
    apellido: "",
    identificacion: "",
    cargo: "",
    direccion: "",
    centroCosto: "",
    mesasAsignadas: "",
    puntoVenta: "",
    empleados: [
      { nombre: "Juan" },
      { nombre: "David" },
      { nombre: "Maria" },
      { nombre: "Pedro" },
      { nombre: "Carmen" },
      { nombre: "Genesis" },
      { nombre: "Daniel" },
      { nombre: "Julio" },
      { nombre: "Ana" },
      { nombre: "Marc" }
    ],
    targetRadio: null,
    edit: false
  };
  componentDidMount() {
    this.props.cardSize("18.2%");
  }

  typeHandler = t => {
    switch (t.target.name) {
      case "nombre":
        this.setState({
          nombre: t.target.value
        });

        break;
      case "apellido":
        this.setState({
          apellido: t.target.value
        });

        break;
      case "identificacion":
        this.setState({
          identificacion: t.target.value
        });

        break;
      case "cargo":
        this.setState({
          cargo: t.target.value
        });

        break;
      case "direccion":
        this.setState({
          direccion: t.target.value
        });

        break;
      case "centroCosto":
        this.setState({
          centroCosto: t.target.value
        });

        break;
      case "mesasAsignadas":
        this.setState({
          mesasAsignadas: t.target.value
        });

        break;
      case "puntoVenta":
        this.setState({
          puntoVenta: t.target.value
        });

        break;

      default:
        break;
    }
  };

  saveEmployeeHandler = () => {
    let enabler1 = this.state.nombre === "";
    let enabler2 = this.state.apellido === "";
    let enabler3 = this.state.identificacion === "";
    let enabler4 = this.state.cargo === "";
    let enabler5 = this.state.direccion === "";
    let enabler6 = this.state.centroCosto === "";
    let enabler7 = this.state.mesasAsignadas === "";
    let enabler8 = this.state.puntoVenta === "";
    if (enabler1) {
      alert("Debe escribir un nombre");
    } else if (enabler2) {
      alert("Debe escribir un apellido");
    } else if (enabler3) {
      alert("Debe escribir un DNI");
    } else if (enabler4) {
      alert("Debe escribir un Cargo");
    } else if (enabler5) {
      alert("Debe escribir una direccion");
    } else if (enabler6) {
      alert("Debe escribir un centro de costo ");
    } else if (enabler7) {
      alert("Debe escribir las mesas asignadas ");
    } else if (enabler8) {
      alert("Debe escribir un punto de venta");
    }
  };
  editEmployeeHandler = () => {
    this.setState({
      nombre: "",
      apellido: "",
      identificacion: "",
      cargo: "",
      direccion: "",
      centroCosto: "",
      mesasAsignadas: "",
      puntoVenta: "",
      targetRadio: true,
      edit: true
    });
  };

  onClickHandler = e => {
    if (!this.state.edit) {
      e.target.checked = false;
      alert("Para Editar presione editar");
      this.setState({
        nombre: "",
        apellido: "",
        identificacion: "",
        cargo: "",
        direccion: "",
        centroCosto: "",
        mesasAsignadas: "",
        puntoVenta: "",
        targetRadio: false,
        edit: false
      });
    } else {
    }
  };

  onClickEmployeesHandler = e => {
    console.log('e', e)

  }

  onClickSuppliesHandler = () => {
    console.log("test");
  };


  render() {
    return (
      <div className={classes.Container}>
        <div className={classes.Zone1}>
          <div className={classes.FormText}>
            <span className={classes.ZoneName}>Nombre</span>
            <span className={classes.ZoneLastName}>Apellido</span>
            <span className={classes.ZoneID}>DNI/Carnet de extranjeria</span>
            <span className={classes.ZonePosition}>Cargo</span>
            <span className={classes.ZoneAddress}>Dirreccion</span>
            <span className={classes.ZoneCenter}>Centro de costo</span>
            <span className={classes.ZoneTablet}>Mesas asignadas</span>
            <span className={classes.ZonePoint}>Punto de venta</span>
          </div>
          <div className={classes.FormBox}>
            <input
              className={classes.BoxName}
              type="text"
              name="nombre"
              id=""
              onChange={this.typeHandler}
            />
            <input
              className={classes.BoxLastName}
              type="text"
              name="apellido"
              id=""
              onChange={this.typeHandler}
            />
            <input
              className={classes.BoxID}
              type="text"
              name="identificacion"
              id=""
              onChange={this.typeHandler}
            />
            <input
              className={classes.BoxPosition}
              type="text"
              name="cargo"
              id=""
              onChange={this.typeHandler}
            />
            <input
              className={classes.BoxAddress}
              type="text"
              name="direccion"
              id=""
              onChange={this.typeHandler}
            />
            <input
              className={classes.BoxCenter}
              type="text"
              name="centroCosto"
              id=""
              onChange={this.typeHandler}
            />
            <input
              className={classes.BoxTablet}
              type="text"
              name="mesasAsignadas"
              id=""
              onChange={this.typeHandler}
            />
            <input
              className={classes.BoxPoint}
              type="text"
              name="puntoVenta"
              id=""
              onChange={this.typeHandler}
            />
          </div>
        </div>
        <div className={classes.ZonaBody}>
          <div className={classes.ZoneTitle}>
            <HeaderTitleProduct
            confFontSize={"1.05rem"}
              confGridColumns={"0% 1fr 0%"}
              spanText={"Nombre del Empleado"}
            />
          </div>

          <div className={classes.ZoneBody}>
            <ProductManagerShape
            onClickSuppliesHandler={this.onClickSuppliesHandler}
              data={this.state.empleados}
              confHeight={"160px"}
              confGridColumns={"0% 1fr 0%"}
              confMarfinLeftBox={"-5rem"}
              confWidth={"98.5%"}
              onClickHandler={this.onClickHandler}
            />
          </div>
        </div>
        <div className={classes.Zone2}>
          <div className={classes.ZonePhoto}>
            <input className={classes.Photo} type="image" src="" alt="" />
          </div>
        </div>
        <div className={classes.ZoneButtons}>
          <div className={classes.BtnSave}>
            <ButtonSave
              confMarginLeftIcon={"0.5rem"}
              confPaddingTop={"0.6rem"}
              confMarginLeftText={"-0.2rem"}
              confMarginTopText={"-0.2rem"}
              clicked={this.saveEmployeeHandler}
              onClickSuppliesHandler={this.onClickEmployeesHandler}
            />
          </div>
          <div className={classes.BtnExit}>
            <ButtonEdit
              confMarginTopIcon={"0.2rem"}
              confMarginTopText={"-0.2rem"}
              clicked={this.editEmployeeHandler}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default CreateEmployee;
