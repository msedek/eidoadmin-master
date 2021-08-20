import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

import classes from "./CreateCostCenter.scss";
import ButtonSave from "../../components/Buttons/ButtonSave/ButtonSave";
import ButtonExit from "../../components/Buttons/ButtonExit/ButtonExit";

class CreateCostCenter extends Component {
  state = {
    nombre: "",
    codigo: ""
  };
  logOutHandler = () => {
    this.props.topBarVisible("visible");
    this.props.cardSize("18.2%");
    this.props.history.push("/costcenter");
    this.props.sideBarHandler("visible");
  };

  componentDidMount() {
    this.props.cardSize("18.2%");
  }

  onChangeHandler = e => {
    switch (e.target.name) {
      case "nombre":
        this.setState({
          nombre: e.target.value
        });
        break;
      case "codigo":
        this.setState({
          codigo: e.target.value
        });
        break;

      default:
        break;
    }
  };

  saveCenterCosto = () => {
    let enabler1 = this.state.nombre === "";
    let enabler2 = this.state.codigo === "";
    if (enabler1) {
      alert("Debe indica Nombre del centro de costo");
    } else if (enabler2) {
      alert("Debe indica codigo del centro de costo");
    } else if (!enabler1 && !enabler2) {
      let centrocosto = {};
      centrocosto.nombre = this.state.nombre;
      centrocosto.codigo = this.state.codigo;
      axios
        .post("http://68.183.27.146:4000/api/centrodecostos", centrocosto, {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json"
          },
          responseType: "json"
        })
        .then(response => {
          if (response.status === 200) {
            alert("Centro de costo Creado con Exito");
            this.setState({
              nombre: "",
              codigo: ""
            });
          }
        })
        .catch(error => {
          console.log(error); //dispatch error
        });
    }
  };
  render() {
    return (
      <div className={classes.Container}>
        <div className={classes.ZoneData}>
          <div className={classes.Data}>
            <div className={classes.ZoneInfo}>
              <div className={classes.ZoneName}> Nombre </div>
              <div className={classes.ZoneCode}> Codigo </div>
            </div>
            <div className={classes.ZoneText}>
              <div className={classes.TextName}>
                <input
                  className={classes.Text}
                  type="text"
                  name="nombre"
                  id=""
                  placeholder="Nombre"
                  onChange={this.onChangeHandler}
                  value={this.state.nombre}
                />
              </div>
              <div className={classes.textCode}>
                <input
                  className={classes.Text1}
                  type="text"
                  name="codigo"
                  id=""
                  placeholder="Codigo"
                  onChange={this.onChangeHandler}
                  value={this.state.codigo}
                />
              </div>
            </div>
          </div>
          <div className={classes.ZonePhoto}>
            <div className={classes.Photo} />
          </div>
        </div>
        <div className={classes.ZoneButtons}>
          <div className={classes.BtnSave}>
            <ButtonSave
              confMarginLeftIcon={"0.5rem"}
              confMarginTopText={"-0.12rem"}
              // clicked={this.logOutHandler}
              clicked={this.saveCenterCosto}
            />
          </div>
          <div className={classes.BtnExit}>
            <ButtonExit
              clicked={this.logOutHandler}
              confMarginLeftIcon={"0.3rem"}
            />
          </div>
        </div>
      </div>
    );
  }
}



export default withRouter(CreateCostCenter);
