import React, { Component } from "react";
import { withRouter } from "react-router-dom"; //hack para quitar con redux
import { connect } from "react-redux";
import axios from "axios";
// import Select from "react-select";
// import "react-select/dist/react-select.css"

import classes from "./CreateSupplies.scss";
import ComboBox from "../../components/ComboBox/ComboBox";
import HeaderTitleProduct from "../../components/HeaderTitle/HeaderTitleProduct/HeaderTitleProduct";
import ProductManagerShape from "../../components/ProductManagerShape/ProductManagerShape";
import ButtonSearch from "../../components/Buttons/ButtonSearch/ButtonSearch";
import ButtonSave from "../../components/Buttons/ButtonSave/ButtonSave";
import ButtonExit from "../../components/Buttons/ButtonExit/ButtonExit";
import ButtonEdit from "../../components/Buttons/ButtonEdit/ButtonEdit";
import * as suppliesActions from "../../store/actions/index";
import * as centerCostActions from "../../store/actions/index";

class CreateSupplies extends Component {
  state = {
    unidades: ["kg", "gr", "ml", "cc", "l", "ud"],
    nombre: "",
    codigo: "",
    unidad: "",
    expira: "",
    minimo: "",
    maximo: "",
    optimo: "",
    critico: "",
    edit: false,
    // insumos: [],
    editing: false,
    id: "",
    targetRadio: null,
    selectedOptions: "",
    centerCoste: [],
    centroDeCosto: {}
  };

  componentDidMount() {
    this.props.cardSize("18.2%");
    this.props.onGetSupplies();
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

  // onChangeHandler = e => {
  //   if (!this.state.edit) {
  //     switch (e.target.name) {
  //       case "nombre":
  //         this.setState({
  //           nombre: e.target.value
  //         });
  //         break;
  //       case "codigo":
  //         this.setState({
  //           codigo: e.target.value.toUpperCase()
  //         });
  //         break;
  //       case "unidad":
  //         this.setState({
  //           unidad: e.target.value
  //         });
  //         break;
  //       case "expira":
  //         this.setState({
  //           expira: e.target.value
  //         });
  //         break;
  //       case "minimo":
  //         console.log(e.target.value);
  //         this.setState({
  //           minimo: e.target.value
  //         });
  //         break;
  //       case "maximo":
  //         this.setState({
  //           maximo: e.target.value
  //         });
  //         break;
  //       case "optimo":
  //         this.setState({
  //           optimo: e.target.value
  //         });
  //         break;
  //       case "critico":
  //         this.setState({
  //           critico: e.target.value
  //         });
  //         break;

  //       default:
  //         break;
  //     }
  //   }
  // };

  editSupplyHandler = () => {
    this.setState({
      nombre: "",
      codigo: "",
      unidad: "",
      expira: "",
      minimo: "",
      maximo: "",
      optimo: "",
      critico: "",
      edit: true,
      insumos: [],
      editing: true,
      id: "",
      targetRadio: null
    });
  };

  onClickSuppliesHandler = (e, data) => {
    if (!this.state.edit) {
      e.target.checked = false;
      alert("Para Editar presione editar");
      this.setState({
        nombre: "",
        codigo: "",
        unidad: "",
        expira: "",
        minimo: "",
        maximo: "",
        optimo: "",
        critico: "",
        edit: false,
        insumos: [],
        editing: false,
        id: "",
        targetRadio: null
      });
    } else {
      this.setState({
        nombre: data.nombre,
        codigo: data.data.codigo,
        unidad: data.data.unidad,
        expira: data.data.expira,
        minimo: data.data.minimo,
        maximo: data.data.maximo,
        optimo: data.data.optimo,
        critico: data.data.critico,
        id: data.data._id,
        targetRadio: e.target
      });
    }
  };

  saveSupply = () => {
    if (this.state.edit === true) {
      alert("Se encuentra en modo editar");
    }

    let critico = parseFloat(this.state.critico);
    let maximo = parseFloat(this.state.maximo);
    let minimo = parseFloat(this.state.minimo);
    let optimo = parseFloat(this.state.optimo);
    let nombre = this.state.nombre;
    let codigo = this.state.codigo;
    let unidad = this.state.unidad;
    let expira = this.state.expira;
    let centroDeCosto = this.state.centroDeCosto;

    if (critico < 0) {
      alert("Escriba un estado critico mayor a 0");
    } else if (this.state.critico === "") {
      alert("No puede dejar estado critico en blanco");
    } else if (minimo <= critico) {
      alert("Estado minimo debe ser superior a estado critico");
    } else if (minimo >= maximo) {
      alert("El estado Minimo debe ser manor que maximo");
    } else if (this.state.minimo === "") {
      alert("No puede dejar estado minimo en blanco");
    } else if (optimo >= maximo) {
      alert("Estado optimo debe ser menor a estado maximo");
    } else if (this.state.maximo === "") {
      alert("No puede dejar estado maximo en blanco");
    } else if (this.state.optimo === "") {
      alert("No puede dejar estado optimo en blanco");
    } else if (nombre === "") {
      alert("No puede dejar estado nombre en blanco");
    } else if (codigo === "") {
      alert("No puede dejar estado codigo en blanco");
    } else if (unidad === "") {
      alert("No puede dejar estado unidad en blanco");
    } else if (expira === "") {
      alert("No puede dejar estado expira en blanco");
    } else if (Object.keys(centroDeCosto).length === 0) {
      alert("Debe seleccionar un centro de costo ");
    } else {
      let insumo = {};
      if (this.state.editing) {
        insumo.id = this.state.id;
      }
      insumo.nombre = this.state.nombre;
      insumo.codigo = this.state.codigo;
      insumo.unidad = this.state.unidad;
      insumo.expira = this.state.expira;
      insumo.minimo = this.state.minimo;
      insumo.maximo = this.state.maximo;
      insumo.optimo = this.state.optimo;
      insumo.critico = this.state.critico;
      insumo.centroDeCosto = this.state.centroDeCosto;
      if (!this.state.editing) {
        axios
          .post("http://68.183.27.146:4000/api/insumos", insumo, {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json"
            },
            responseType: "json"
          })
          .then(response => {
            if (response.status === 200) {
              alert("Insumo Creado con Exito");
              this.props.onGetSupplies();
              this.setState({
                nombre: "",
                codigo: "",
                unidad: "",
                expira: "",
                minimo: "",
                maximo: "",
                optimo: "",
                critico: "",
                edit: false,
                insumos: [],
                editing: false,
                id: "",
                targetRadio: null,
                centroDeCosto: {}
              });
            }
          })
          .catch(error => {
            console.log(error); //dispatch error
          });
      } else {
        axios
          .put("http://68.183.27.146:4000/api/insumos/" + insumo.id, insumo, {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json"
            },
            responseType: "json"
          })
          .then(response => {
            if (response.status === 200) {
              alert("Insumo Editado con Exito");
              this.props.onGetSupplies();
              let radio = this.state.targetRadio;
              radio.checked = false;
              this.setState({
                nombre: "",
                codigo: "",
                unidad: "",
                expira: "",
                minimo: "",
                maximo: "",
                optimo: "",
                critico: "",
                edit: false,
                insumos: [],
                editing: false,
                id: ""
              });
            }
          })
          .catch(error => {
            console.log(error); //dispatch error
          });
      }
    }
  };

  keyDownHandler = e => {
    this.setState({
      edit: false
    });
    switch (e.target.name) {
      case "nombre":
        this.setState({
          nombre: e.target.value
        });
        break;
      case "codigo":
        this.setState({
          codigo: e.target.value.toUpperCase()
        });
        break;
      case "unidad":
        this.setState({
          unidad: e.target.value
        });
        break;
      case "expira":
        this.setState({
          expira: e.target.value
        });
        break;
      case "minimo":
        this.setState({
          minimo: e.target.value
        });
        break;
      case "maximo":
        this.setState({
          maximo: e.target.value
        });
        break;
      case "optimo":
        this.setState({
          optimo: e.target.value
        });
        break;
      case "critico":
        this.setState({
          critico: e.target.value
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
    // const customStyles = {
    //   // option: (base, state) => ({
    //   //   ...base
    //   // }),
    //   control: () => ({
    //     // width: "12rem",
    //     // background: "#D0D1D3",
    //     // background: "red",
    //     // height: "1.45rem"
    //     width: 200
    //   })
    // };

    let insumos = [];
    let sorted = [];
    let options = [];
    if (this.props.supplies.length > 0) {
      this.props.supplies.forEach(element => {
        let fullData = {};
        fullData.nombre = element.nombre;
        options.push({
          value: element.nombre,
          label: element.nombre
        });
        fullData.data = element;
        insumos.push(fullData);
      });
      sorted = insumos.slice(0);
      sorted.sort(function(a, b) {
        let x = a.nombre.toLowerCase();
        let y = b.nombre.toLowerCase();
        return x < y ? -1 : x > y ? 1 : 0;
      });
    }

    // let switchUnity = (
    //   <ComboBox className={classes.RealComboBox} text={this.state.unidades} />
    // );
    let switchUnity = (
      <input
        className={classes.BoxCode}
        onChange={this.keyDownHandler}
        type="text"
        value={this.state.unidad}
        // onChange={this.onChangeHandler}
        name="unidad"
        placeholder={"(kg, l, gr ...)"}
      />
    );

    if (!this.state.edit) {
      switchUnity = (
        <input
          className={classes.BoxCode}
          onChange={this.keyDownHandler}
          type="text"
          value={this.state.unidad}
          // onChange={this.onChangeHandler}
          name="unidad"
          placeholder={"(kg, l, gr ...)"}
        />
      );
    }
    return (
      <div className={classes.Container}>
        <div className={classes.Zone1}>
          <div className={classes.FormText}>
            <span className={classes.ZoneName}>Nombre</span>
            <span className={classes.ZoneCode}>Código</span>
            <span className={classes.ZoneUnity}>Unidad</span>
            <span className={classes.ZoneCritical}>Expira</span>
            <span className={classes.ZoneCenterCosto}>C. costo</span>
            {/* <Select
              options={options}
              clearable={false}
              className={classes.BoxName}
            /> */}

            <input
              className={classes.BoxName}
              onChange={this.keyDownHandler}
              type="text"
              value={this.state.nombre}
              // onChange={this.onChangeHandler}
              name="nombre"
              placeholder={"Nombre"}
            />
            <input
              className={classes.BoxCode}
              onChange={this.keyDownHandler}
              type="text"
              value={this.state.codigo}
              // onChange={this.onChangeHandler}
              name="codigo"
              placeholder={"Codigo"}
            />
            <input
              className={classes.BoxDate}
              onChange={this.keyDownHandler}
              type="number"
              min="0"
              value={this.state.expira}
              // onChange={this.onChangeHandler}
              name="expira"
              placeholder={"Días"}
            />

            <div className={classes.CenterCoste}>
              <ComboBox
                text={this.state.centerCoste}
                onClickHandler={this.onClickHandler}
              />
            </div>
            <div className={classes.ComboBox}>{switchUnity}</div>
          </div>
          <div className={classes.FormBox}>
            <span className={classes.ZoneMin}>Minimo</span>
            <span className={classes.ZoneMax}>Maximo</span>
            <span className={classes.ZoneOpt}>Optimo</span>
            <span className={classes.ZoneTime}>Crítico</span>
            <input
              className={classes.BoxMin}
              onChange={this.keyDownHandler}
              type="number"
              min="0"
              value={this.state.minimo}
              // onChange={this.onChangeHandler}
              name="minimo"
              placeholder={"Cantidad"}
            />
            <input
              className={classes.BoxMax}
              onChange={this.keyDownHandler}
              // type="number"
              // min="0"
              value={this.state.maximo}
              // onChange={this.onChangeHandler}
              name="maximo"
              placeholder={"Cantidad"}
            />
            <input
              className={classes.BoxOpt}
              onChange={this.keyDownHandler}
              // type="number"
              // min="0"
              value={this.state.optimo}
              // onChange={this.onChangeHandler}
              name="optimo"
              placeholder={"Cantidad"}
            />
            <input
              className={classes.BoxCritical}
              onChange={this.keyDownHandler}
              type="number"
              min="0"
              value={this.state.critico}
              // onChange={this.onChangeHandler}
              name="critico"
              placeholder={"Cantidad"}
            />
          </div>
        </div>
        <div className={classes.Zone2}>
          <div className={classes.ZoneTitle}>
            <HeaderTitleProduct
              confGridColumns={"0% 1fr 0%"}
              confFontSize={"1rem"}
            />
          </div>

          <div className={classes.ZoneBody}>
            <ProductManagerShape
              data={sorted}
              confWidth={"98.5%"}
              confHeight={"150px"}
              confGridColumns={"0% 1fr 0%"}
              onChangeHandler={this.onChangeHandler}
              origen={"supplies"}
              onClickSuppliesHandler={this.onClickSuppliesHandler}
              confMarfinLeftBox={"6rem"}
            />
          </div>
        </div>
        <div className={classes.Zone3}>
          <div className={classes.ZoneSearch}>
            <div className={classes.BtnSearch}>
              <ButtonSearch confBackground={"#DADEE9"} />
            </div>
          </div>
          <div className={classes.ZoneButtons}>
            <div className={classes.BtnEdit}>
              <ButtonEdit
                confMarginTopText={"-0.1rem"}
                clicked={this.editSupplyHandler}
              />
            </div>
            <div className={classes.BtnSave}>
              <ButtonSave
                confMarginLeftIcon={"-0.2rem"}
                confMarginLeftText={"-0.2rem"}
                confMarginTopText={"-0.1rem"}
                clicked={this.saveSupply}
              />
            </div>
            <div className={classes.BtnExit}>
              <ButtonExit
                confMarginTopText={"1rem"}
                confMarginLeftText={"0.2rem"}
                clicked={() => this.props.getOutPurshase("crearec")}
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
    getOutPurshase: state.getOutPurshase.getOutPurshaseHandler,
    supplies: state.supplies.supplies,
    centerCost: state.centerCost.centerCost
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetSupplies: () => {
      dispatch(suppliesActions.getSupplies());
    },
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
)(withRouter(CreateSupplies));
