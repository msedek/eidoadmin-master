import React, { Component } from "react";
import { withRouter } from "react-router-dom"; //hack para quitar con redux
import { connect } from "react-redux";
import _ from "underscore";
import socketIOClient from "socket.io-client";

import classes from "./Inventory.scss";
import InventoryHeader from "../../components/HeaderTitle/InventoryHeader/InventoryHeader";
import ButtonNew from "../../components/Buttons/ButtonNew/ButtonNew";
import ButtonInventory from "../../components/Buttons/ButtonInventory/ButtonInventory";
import * as suppliesActions from "../../store/actions/index";
import ComboBox from "../../components/ComboBox/ComboBox";
import * as centerCostActions from "../../store/actions/index";
import * as ordenComprasActions from "../../store/actions/index";

import {
  GET_CENTROS,
  SEND_CENTROS,
  UPDATE_CENTRO,
  END_POINT
} from "../../endpoint/endpoint";

class Inventory extends Component {
  state = {
    insumos: [],
    costCenter: [],
    centroDeCosto: {},
    socket: socketIOClient(END_POINT)
  };

  componentWillMount() {
    this.state.socket.on("connect", () => {
      // console.log("Connected to server");
    });
  }

  componentWillUnmount() {
    this.state.socket.close();
  }

  goInventory = () => {
    this.props.topBarVisible("visible");
    this.props.cardSize("3.9%");
    this.props.sideBarHandler("hidden");
    this.props.history.push("/inventorytwo");
  };

  componentDidMount() {
    this.props.cardSize("3.9%");
    this.props.sideBarHandler("hidden");
    this.props.topBarVisible("visible");
    // this.props.onGetSupplies();
    // this.props.onGetCenterCost();
    this.props.onGetOrdenCompras();

    this.state.socket.emit(SEND_CENTROS);
    this.state.socket.on(GET_CENTROS, data => {
      // console.log([...JSON.parse(data)])
      if (this.state.costCenter.length === 0) {
        let costCenter = [...JSON.parse(data)];
        costCenter = _.sortBy(costCenter, function(center) {
          return center.nombre;
        });

        let center = [];
        costCenter.forEach(element => {
          let fullData = {};
          fullData.nombre = element.nombre;
          fullData.data = element;
          center.push(fullData);
        });
        this.setState({
          costCenter: center
        });
      }
    });

    this.state.socket.on(UPDATE_CENTRO, data => {
      // const centroDeCosto = _.clone(this.state.centroDeCosto);

      this.setState({
        // insumos: data.insumos,
        centroDeCosto: {
          codigo: data.codigo,
          nombre: data.nombre,
          empleados: data.empleados,
          insumos: data.insumos,
          _id: data._id
        }
      });

      // for (let i = 0; i < costCenter.length; i++) {
      //   const element = costCenter[i];
      //   if (element._id === data._id) {
      //     costCenter[i] = data;
      //     break;
      //   }
      // }
      // this.setState({
      //   costCenter: costCenter
      // });
    });
  }

  // componentDidUpdate() {
  //   // let sorted = [];
  //   // let insumos = [];

  //   // if (this.props.supplies.length > 0) {
  //   //   this.props.supplies.forEach(element => {
  //   //     let fullData = {};
  //   //     fullData.nombre = element.nombre;
  //   //     fullData.data = element;
  //   //     insumos.push(fullData);
  //   //   });
  //   //   sorted = insumos.slice(0);
  //   //   sorted.sort(function(a, b) {
  //   //     let x = a.nombre.toLowerCase();
  //   //     let y = b.nombre.toLowerCase();
  //   //     return x < y ? -1 : x > y ? 1 : 0;
  //   //   });
  //   //   this.setState(
  //   //     {
  //   //       insumos: sorted
  //   //     },
  //   //     () => this.props.onDeleteSupplies()
  //   //   );
  //   // }

  //   let costCenter = [];
  //   // let sortedCenter = [];

  //   if (this.state.costCenter.length > 0) {
  //     this.s.costCenter.forEach(element => {
  //       let fullData = {};
  //       fullData.nombre = element.nombre;
  //       fullData.data = element;
  //       costCenter.push(fullData);
  //     });
  //     // sortedCenter = costCenter.slice(0);

  //     costCenter = _.sortBy(costCenter, function(center) {
  //       return center.nombre;
  //     });

  //     // sortedCenter.sort(function(a, b) {
  //     //   let x = a.nombre.toLowerCase();
  //     //   let y = b.nombre.toLowerCase();
  //     //   return x < y ? -1 : x > y ? 1 : 0;
  //     // });

  //     this.setState(
  //       {
  //         costCenter: costCenter
  //       },
  //       () => this.props.onDeleteCenterCost()
  //     );
  //   }

  //   // let ordenCompras = [];
  //   // let sortedOrdenCompra = [];
  //   // if (this.props.ordenCompras.length > 0) {
  //   //   this.props.ordenCompras.forEach(element => {
  //   //     let fullData = {};
  //   //     fullData.insumos = element.listaInsumos;
  //   //     fullData.insumos.forEach(element => {
  //   //       let fullData = {};
  //   //       fullData.nombre = element.insumo;
  //   //       fullData.data = element;
  //   //       ordenCompras.push(fullData);
  //   //     });
  //   //   });
  //   //   sortedOrdenCompra = costCenter.slice(0);
  //   //   sortedOrdenCompra.sort(function(a, b) {
  //   //     let x = a.nombre.toLowerCase();
  //   //     let y = b.nombre.toLowerCase();
  //   //     return x < y ? -1 : x > y ? 1 : 0;
  //   //   });

  //   //   // this.setState(
  //   //   //   {
  //   //   //     costCenter: sortedOrdenCompra
  //   //   //   },
  //   //   //   () => this.props.onDeleteCenterCost()
  //   //   // );
  //   // }
  // }

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
        // insumos: data.insumos,
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
    let insumos = [];
    let row = [];
    let trow = [];

    if (this.state.centroDeCosto.insumos) {
      insumos = _.clone(this.state.centroDeCosto.insumos);

      if (insumos.length > 0) {
        insumos = _.sortBy(insumos, function(insumo) {
          return insumo.nombre;
        });

        insumos.forEach((insumo, index) => {
          let confBackground = null;
          let parity = 0;
          let description = "";
          let critical = 0;
          let minimum = 0;
          let max = 0;
          let unity = null;
          let optimo = 0;
          let inventory = 0;
          let confBackgroundCrit = null;
          let textCrit = "";
          let textMin = "";
          let textMax = "";
          let observation = "";
          let borderLeft = "";
          let colorTextCrit = null;
          let confBackgroundMin = null;
          let confBackgroundMax = null;
          let colorTextMin = null;
          let colorTextMax = null;
          let colorObservation = null;

          // console.log(insumo);

          description = insumo.nombre;
          critical = insumo.critico;
          minimum = insumo.minimo;
          optimo = insumo.optimo;
          max = insumo.maximo;
          unity = insumo.unidad;
          inventory =
            parseFloat(insumo.cantActual) + parseFloat(insumo.cantAnterior);

          parity = index % 2;
          confBackground = "#DADEE9";
          if (parity === 1) {
            confBackground = "#F3F3F5";
          }

          let deterMinante = "MAXIMO";

          if (inventory === 0) {
            deterMinante = "SIN INV";
          } else if (inventory > 0 && inventory <= critical) {
            deterMinante = "CRITICO";
          } else if (inventory > critical && inventory <= minimum) {
            deterMinante = "MINIMO";
          } else if (inventory > minimum && inventory <= optimo) {
            deterMinante = "OPTIMO";
          }

          confBackgroundCrit = confBackground;
          colorTextCrit = confBackground;
          confBackgroundMin = confBackground;
          colorTextMin = confBackground;
          confBackgroundMax = confBackground;
          colorTextMax = confBackground;
          colorObservation = confBackground;

          switch (deterMinante) {
            case "SIN INV":
              observation = "Comprar Urgente";
              colorObservation = "#E70050";
              borderLeft = "3px solid #E70050";
              colorTextCrit = "#E70050";
              textCrit = inventory.toFixed(2);
              break;
            case "CRITICO":
              confBackgroundCrit = "#E70050";
              colorTextCrit = confBackground;
              textCrit = inventory.toFixed(2);
              observation = "Comprar Urgente";
              colorObservation = "#E70050";
              break;
            case "MINIMO":
              confBackgroundCrit = "#DC9600";
              confBackgroundMin = "#DC9600";
              colorTextMin = confBackground;
              textMin = inventory.toFixed(2);
              observation = "Comprar";
              colorObservation = "#DC9600";
              break;
            case "OPTIMO":
              confBackgroundCrit = "#485923";
              confBackgroundMin = "#485923";
              confBackgroundMax = "#485923";
              colorTextMax = confBackground;
              colorTextMin = "#485923";
              colorTextCrit = "#485923";
              textMax = inventory.toFixed(2);
              observation = "Optimo";
              colorObservation = "#485923";
              break;
            default:
              confBackgroundCrit = "#9EC446";
              confBackgroundMin = "#9EC446";
              confBackgroundMax = "#9EC446";
              colorTextMin = "#9EC446";
              colorTextCrit = "#9EC446";
              colorTextMax = "#F3F3F5";
              textMax = inventory.toFixed(2);
              observation = "Sobre Compra";
              colorObservation = "#9EC446";
              break;
          }

          trow.push(
            <tr
              key={index}
              style={{
                height: "0.9rem",
                background: confBackground,
                color: "#5D5D5D",
                fontSize: "0.8rem",
                borderBottom: "2px solid #F3F3F5"
              }}
            >
              <td
                style={{
                  width: "11.2rem",
                  height: "1.13rem"
                }}
              >
                <span style={{ marginLeft: "1rem" }}>{description}</span>
              </td>
              <td
                style={{
                  width: "3.3rem",
                  height: "1rem",
                  textAlign: "center"
                }}
              >
                <span>{critical}</span>
              </td>
              <td
                style={{
                  width: "3.1rem",
                  height: "1rem",
                  textAlign: "center"
                }}
              >
                <span>{minimum}</span>
              </td>
              <td
                style={{
                  width: "3.3rem",
                  height: "1rem",
                  textAlign: "center"
                }}
              >
                <span>{max}</span>
              </td>
              <td
                style={{
                  width: "3.3rem",
                  height: "1rem",
                  textAlign: "center"
                }}
              >
                <span>{unity}</span>
              </td>
              <td
                style={{
                  width: "3.4rem",
                  height: "1rem",
                  textAlign: "center"
                }}
              >
                <span>{inventory}</span>
              </td>
              <td
                style={{
                  width: "4.8rem",
                  height: "1rem",
                  background: confBackgroundCrit,
                  color: colorTextCrit,
                  textAlign: "right",
                  borderLeft: borderLeft
                }}
              >
                <span>{textCrit}</span>
              </td>
              <td
                style={{
                  width: "4.9rem",
                  height: "1rem",
                  background: confBackgroundMin,
                  color: colorTextMin,
                  textAlign: "right"
                }}
              >
                <span>{textMin}</span>
              </td>
              <td
                style={{
                  width: "5.2rem",
                  height: "1rem",
                  textAlign: "right",
                  background: confBackgroundMax,
                  color: colorTextMax
                }}
              >
                <span>{textMax}</span>
              </td>

              <td
                style={{
                  width: "0rem",
                  height: "1rem",
                  color: colorObservation,
                  textAlign: "center"
                }}
              >
                <span>{observation}</span>
              </td>
            </tr>
          );
        });
        row.push(trow);
      }
    }

    return (
      <div className={classes.ContainerInventory}>
        <div className={classes.ZoneInfoInventario}>
          <div className={classes.ZoneHeader}>
            <InventoryHeader />
          </div>
          <div className={classes.ListaContainer}>
            <table style={{ borderCollapse: "collapse" }}>
              <tbody>{row}</tbody>
            </table>
          </div>
        </div>
        <div className={classes.Buttons}>
          <div className={classes.ComboBox}>
            <span className={classes.Text}>Centro de Costo:</span>
            <ComboBox
              text={this.state.costCenter}
              onClickHandler={this.onClickHandler}
            />
          </div>
          <div className={classes.BtnShoppingList}>
            <ButtonNew
              spanText={"Lista de Compras"}
              confMarginTopText={"-0.4rem"}
              confMarginLeft={"-0.1rem"}
            />
          </div>
          <div className={classes.BtnPhysicalInventory}>
            <ButtonInventory clicked={this.goInventory} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    supplies: state.supplies.supplies,
    centerCost: state.centerCost.centerCost,
    ordenCompras: state.ordenCompras.ordenCompras
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetSupplies: () => {
      dispatch(suppliesActions.getSupplies());
    },
    onDeleteSupplies: () => {
      dispatch(suppliesActions.deleteSupplies([]));
    },
    onGetCenterCost: () => {
      dispatch(centerCostActions.getCenterCost());
    },
    onDeleteCenterCost: () => {
      dispatch(centerCostActions.deleteCenterCost([]));
    },
    onGetOrdenCompras: () => {
      dispatch(ordenComprasActions.getOrdenCompras());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Inventory));
