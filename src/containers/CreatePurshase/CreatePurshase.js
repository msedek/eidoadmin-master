import React, { Component } from "react";
import { withRouter } from "react-router-dom"; //hack para quitar con redux
import { connect } from "react-redux";
import moment from "moment";
import axios from "axios";

import classes from "./CreatePurshase.scss";
import ButtonSearch from "../../components/Buttons/ButtonSearch/ButtonSearch";
import ButtonSave from "../../components/Buttons/ButtonSave/ButtonSave";
import SuppliesList from "../../components/SuppliesList/SuppliesList";
import ProductManagerShape from "../../components/ProductManagerShape/ProductManagerShape";
import * as suppliesActions from "../../store/actions/index";
import * as centerCostActions from "../../store/actions/index";
import * as proveedoresActions from "../../store/actions/index";
import ComboBox from "../../components/ComboBox/ComboBox";

class CreatePurshase extends Component {
  state = {
    insumos: [],
    ingredientes: [],
    lista: [],
    row: [],
    fActual: "",
    nroFactura: "",
    cantidad: "",
    costo: "",
    subTotal: "",
    igv: "",
    total: "",
    centerCoste: [],
    montos: [],
    test: [],
    centroCosto: [],
    proveedores: [],
    tipos: [{ nombre: "test" }],
    provedor: {}
  };

  componentWillMount() {
    this.props.cardSize("18.2%");
    this.props.topBarVisible("visible");
    this.props.sideBarHandler("visible");
    this.props.onGetSupplies();
    this.props.onGetCenterCost();
    this.props.onGetProveedores();

    this.props.onGetProveedores();
    let date = moment().format("DD/MM/YYYY");
    this.setState({
      fActual: date
    });
  }

  componentDidUpdate() {
    let proveedores = [];
    let sortedProveedores = [];

    if (this.props.proveedores.length > 0) {
      this.props.proveedores.forEach(element => {
        let fullData = {};
        fullData.nombre = element.nombre;

        fullData.data = element;
        proveedores.push(fullData);
      });
      sortedProveedores = proveedores;
      sortedProveedores.sort(function(a, b) {
        let x = a.nombre.toLowerCase();
        let y = b.nombre.toLowerCase();
        return x < y ? -1 : x > y ? 1 : 0;
      });
      this.setState(
        {
          proveedores: sortedProveedores
        },
        () => this.props.onDeleteProveedores()
      );
    }

    let sorted = [];
    let insumos = [];

    if (this.props.supplies.length > 0) {
      this.props.supplies.forEach(element => {
        let fullData = {};
        fullData.nombre = element.nombre;
        fullData.data = element;
        insumos.push(fullData);
      });
      sorted = insumos.slice(0);
      sorted.sort(function(a, b) {
        let x = a.nombre.toLowerCase();
        let y = b.nombre.toLowerCase();
        return x < y ? -1 : x > y ? 1 : 0;
      });

      this.setState(
        {
          lista: sorted
        },
        () => this.props.onDeleteSupplies()
      );
    }

    let centerCoste = [];
    let sortedCenterCoste = [];

    if (this.props.centerCost.length > 0) {
      this.props.centerCost.forEach(element => {
        let fullData = {};
        fullData.nombre = element.nombre;

        fullData.data = element;
        centerCoste.push(fullData);
      });
      sortedCenterCoste = centerCoste.slice(0);
      sortedCenterCoste.sort(function(a, b) {
        let x = a.nombre.toLowerCase();
        let y = b.nombre.toLowerCase();
        return x < y ? -1 : x > y ? 1 : 0;
      });
      this.setState(
        {
          centerCoste: sortedCenterCoste
        },
        () => this.props.onDeleteCenterCost()
      );
    }
  }

  typeHandler = i => {
    switch (i.target.name) {
      case "fActual":
        this.setState({
          factual: i.target.value
        });
        break;
      case "nroFactura":
        this.setState({
          nroFactura: i.target.value
        });
        break;
      case "proveedor":
        this.setState({
          proveedor: i.target.value
        });
        break;

      default:
        break;
    }
  };

  onChangeHandler = e => {
    let lista = this.state.lista.slice(0);
    let filtrado = lista.filter(a => a !== e);
    let filtro = this.state.insumos.slice(0);
    filtro.push(e);

    this.setState(
      {
        lista: filtrado,
        insumos: filtro
      },
      () => {
        let row = [];
        let trow = [];
        let name = [];
        let cod = [];
        let unidad = [];

        this.state.insumos.forEach((element, index) => {
          let fullData = element;
          name = fullData.nombre;
          cod = fullData.data.codigo;
          unidad = fullData.data.unidad;
          //    let total = this.state.total
          //   console.log('total', total)
          //  let estado = this.state.ingredientes.slice(0)
          //   estado.forEach(element => {
          //     console.log('element', element)

          //   });

          trow.push(
            <tr
              key={index}
              style={{
                background: "#F3F3F5",
                height: "1.1rem"
              }}
            >
              <td
                style={{
                  width: "12rem",
                  height: "1.6rem",
                  textAlign: "center"
                }}
              >
                <span
                  style={{
                    fontSize: "0.8rem",
                    color: "#5D5D5D",
                    fontWeight: "bold"
                  }}
                >
                  {cod}
                </span>
              </td>
              <td
                style={{
                  width: "11.5rem",
                  height: "1.6rem",
                  textAlign: "center"
                }}
              >
                <span
                  style={{
                    fontSize: "0.8rem",
                    color: "#5D5D5D",
                    fontWeight: "bold",
                    display: "grid"
                  }}
                >
                  {name}
                </span>
              </td>
              <td
                style={{
                  width: "6.7rem",
                  height: "1.6rem"
                }}
              >
                <input
                  className={classes.BoxText}
                  placeholder="Dias"
                  type="date"
                  name="fechaEx"
                  onChange={this.typeHandler}
                  id=""
                  ref={input => {
                    this[`fechaInput${index}`] = input;
                  }}
                  style={{
                    width: "5rem",
                    height: "0.5rem",
                    paddingTop: "0.5rem"
                  }}
                />
              </td>
              <td
                style={{
                  width: "6.5rem",
                  height: "1.6rem"
                }}
              >
                <input
                  className={classes.BoxText}
                  placeholder="Cantidad"
                  type="number"
                  onChange={this.typeHandler}
                  min="0"
                  name="canridad"
                  id=""
                  ref={input => {
                    this[`numbreInput${index}`] = input;
                  }}
                  style={{ width: "4.5rem" }}
                />
              </td>

              <td
                style={{
                  width: "4.8rem",
                  height: "1.6rem"
                }}
              >
                <input
                  className={classes.BoxText}
                  placeholder="Unidad"
                  type="text"
                  name="Unidad"
                  id=""
                  value={unidad}
                  onChange={this.typeHandler}
                  ref={input => {
                    this[`unidadInput${index}`] = input;
                  }}
                  style={{ width: "2rem" }}
                />
              </td>
              <td
                style={{
                  width: "4.5rem",
                  height: "1.6rem"
                }}
              >
                <input
                  className={classes.BoxText}
                  placeholder="Costo"
                  type="number"
                  min="0"
                  name="costo"
                  onChange={this.typeHandler}
                  id=""
                  ref={input => {
                    this[`costoInput${index}`] = input;
                  }}
                  style={{ width: "3.5rem" }}
                />
              </td>
              <td style={{ width: "7.5rem" }}>
                <div
                  className={classes.BtnPlus}
                  onClick={ev => this.onClickSupplyHandler(ev, fullData, index)}
                  style={{ height: "1rem" }}
                >
                  <span
                    style={{ fontSize: "1rem", marginTop: "0rem" }}
                    className={"fas fa-plus"}
                  />
                </div>
              </td>
            </tr>
          );
        });
        row.push(trow);
        this.setState({
          row: row
        });
      }
    );
  };

  onClickSupplyHandler = (ev, fullData, index) => {
    const refCost = this[`costoInput${index}`];
    const refUnd = this[`unidadInput${index}`];
    const refCant = this[`numbreInput${index}`];
    const refFecha = this[`fechaInput${index}`];
    let costo = refCost.value;
    let unidad = refUnd.value;
    let cantidad = refCant.value;
    let fechaCaja = refFecha.value;
    // let merma = {};
    // this.state.fActual;

    function formato(fechaCaja) {
      return fechaCaja.replace(/^(\d{4})-(\d{2})-(\d{2})$/g, "$3/$2/$1");
    }

    if (costo === "") {
      alert("Debe indicar costo");
    } else if (unidad === "") {
      alert("Debe indicar unidad");
    } else if (cantidad === "") {
      alert("Debe indicar la cantidad");
    } else if (fechaCaja === "") {
      alert("Debe indicar fecha de expiracion");
    } else if (formato(fechaCaja) < this.state.fActual) {
      alert("fecha de expiracion debe ser mayor o igual a fecha actual");
    }
    // console.log("fullData.data.expiraActual", fullData.data.expiraActual);
    // console.log("formato(fechaCaja)", fechaCaja);
    let ingredientes = this.state.ingredientes.slice(0);

    if (fullData.data.expiraAnterior !== "") {
      if (fullData.data.expiraActual === "") {
        if (fechaCaja > fullData.data.expiraAnterior) {
          fullData.data.expiraActual = fechaCaja;
          fullData.data.cantActual = cantidad;
          let ingresientesShema = {
            cantAnterior: cantidad,
            costo: refCost.value,
            expiraActual: fullData.data.expiraActual,
            expiraAnterior: fullData.data.expiraAnterior,
            fExpiracion: fechaCaja,
            cantidad: cantidad,
            expira: fechaCaja,
            insumoID: fullData.data._id,
            cantActual: fullData.data.cantActual
          };
          ingredientes.push(ingresientesShema);
          this.setState({
            ingredientes: ingredientes
          });
        } else {
          if (fechaCaja === fullData.data.expiraAnterior) {
            fullData.data.cantAnterior =
              parseInt(fullData.data.cantAnterior, 10) +
              parseInt(cantidad, 10) +
              "";
            let ingresientesShema = {
              cantAnterior: fullData.data.cantAnterior,
              costo: refCost.value,
              expiraActual: fullData.data.expiraActual,
              expiraAnterior: fullData.data.expiraAnterior,
              fExpiracion: fechaCaja,
              cantidad: cantidad,
              expira: fechaCaja,
              insumoID: fullData.data._id,
              cantActual: fullData.data.cantActual
            };
            ingredientes.push(ingresientesShema);
            this.setState({
              ingredientes: ingredientes
            });
          } else {
            fullData.data.expiraActual = fechaCaja;
            fullData.data.cantActual = cantidad;
            let ingresientesShema = {
              cantAnterior: fullData.data.cantAnterior,
              costo: refCost.value,
              expiraActual: fullData.data.expiraActual,
              expiraAnterior: fullData.data.expiraAnterior,
              fExpiracion: fechaCaja,
              cantidad: cantidad,
              expira: fechaCaja,
              insumoID: fullData.data._id,
              cantActual: fullData.data.cantActual
            };
            ingredientes.push(ingresientesShema);
            this.setState({
              ingredientes: ingredientes
            });
          }
        }
      } else {
        if (fechaCaja === fullData.data.expiraActual) {
          fullData.data.cantActual =
            +parseInt(fullData.data.cantActual, 10) +
            parseInt(cantidad, 10) +
            "";
          let ingresientesShema = {
            cantAnterior: fullData.data.cantAnterior,
            costo: refCost.value,
            expiraActual: fullData.data.expiraActual,
            expiraAnterior: fullData.data.expiraAnterior,
            fExpiracion: fechaCaja,
            cantidad: cantidad,
            expira: fechaCaja,
            insumoID: fullData.data._id,
            cantActual: fullData.data.cantActual
          };
          ingredientes.push(ingresientesShema);
          this.setState({
            ingredientes: ingredientes
          });
        } else {
          alert("No se puede registrar mas de 2 fechas por isumos ");
        }
      }
    } else {
      if (fullData.data.expiraAnterior === "") {
        fullData.data.expiraAnterior = fechaCaja;
        fullData.data.cantAnterior = cantidad;
        let ingresientesShema = {
          cantAnterior: cantidad,
          costo: refCost.value,
          expiraActual: fullData.data.expiraActual,
          expiraAnterior: fullData.data.expiraAnterior,
          fExpiracion: fechaCaja,
          cantidad: cantidad,
          expira: fechaCaja,
          insumoID: fullData.data._id,
          cantActual: fullData.data.cantActual
        };
        ingredientes.push(ingresientesShema);
        this.setState({
          ingredientes: ingredientes
        });
      } else {
        if (fullData.data.expiraActual === "") {
          fullData.data.expiraActual = fechaCaja;
          fullData.data.cantActual = cantidad;
          let ingresientesShema = {
            cantAnterior: fullData.data.cantAnterior,
            costo: refCost.value,
            expiraActual: fullData.data.expiraActual,
            expiraAnterior: fullData.data.expiraAnterior,
            fExpiracion: fechaCaja,
            cantidad: cantidad,
            expira: fechaCaja,
            insumoID: fullData.data._id,
            cantActual: fullData.data.cantActual
          };
          ingredientes.push(ingresientesShema);
          this.setState({
            ingredientes: ingredientes
          });
        } else {
          if (fechaCaja === fullData.data.expiraAnterior) {
            fullData.data.cantAnterior =
              parseInt(fullData.data.cantAnterior, 10) +
              parseInt(cantidad, 10) +
              "";
            let ingresientesShema = {
              cantAnterior: fullData.data.cantAnterior,
              costo: refCost.value,
              expiraActual: fullData.data.expiraActual,
              expiraAnterior: fullData.data.expiraAnterior,
              fExpiracion: fechaCaja,
              cantidad: cantidad,
              expira: fechaCaja,
              insumoID: fullData.data._id,
              cantActual: fullData.data.cantActual
            };
            ingredientes.push(ingresientesShema);
            this.setState({
              ingredientes: ingredientes
            });
          } else {
            if (fechaCaja === fullData.data.expiraActual) {
              fullData.data.cantActual =
                +parseInt(fullData.data.cantActual, 10) +
                parseInt(cantidad, 10) +
                "";
              let ingresientesShema = {
                cantAnterior: fullData.data.cantAnterior,
                costo: refCost.value,
                expiraActual: fullData.data.expiraActual,
                expiraAnterior: fullData.data.expiraAnterior,
                fExpiracion: fechaCaja,
                cantidad: cantidad,
                expira: fechaCaja,
                insumoID: fullData.data._id,
                cantActual: fullData.data.cantActual
              };
              ingredientes.push(ingresientesShema);
              this.setState({
                ingredientes: ingredientes
              });
            } else {
              alert("No se puede registrar mas de 2 fechas por isumos ");
            }
          }
        }
      }
    }
  };

  onClickSuppliesHandler = (ev, data) => {
    let status = ev.target.checked;

    let centroCosto = this.state.centroCosto.slice(0);
    if (status) {
      centroCosto.push({
        codigo: data.data.codigo,
        nombre: data.nombre,
        empleados: data.data.empleados,
        insumos: data.data.insumos,
        _id: data.data._id
      });
      this.setState({
        centroCosto: centroCosto
      });
    } else {
      let filtrado = [];
      filtrado = centroCosto.filter(a => a !== data);
      this.setState({
        centroCosto: filtrado
      });
    }
  };

  saveRecipeHandler = () => {
    if (this.state.ingredientes.length > 0) {
      let enabler1 = this.state.nroFactura === "";
      let enabler2 = this.state.proveedor === "";
      if (enabler1) {
        alert("Debe ingresar numero de factura");
      } else if (enabler2) {
        alert("Debe ingresar nombre del proveedor");
      }
      if (!enabler1 && !enabler2) {
        let toSend = {};
        let insumo = {};
        let listaInsumos = [];

        this.state.ingredientes.forEach(element => {
          insumo = element;
          listaInsumos.push(insumo);
        });

        let centro = this.state.centroCosto.slice(0);

        let centroCosto = centro.pop();
        toSend.listaInsumos = listaInsumos;
        toSend.fActual = this.state.fActual;
        toSend.nroFactura = this.state.nroFactura;
        toSend.proveedor = this.state.proveedor;
        toSend.centroDeCosto = centroCosto;
        toSend.proveedor = this.state.provedor;

        axios
          .post("http://68.183.27.146:4000/api/ordencompras", toSend, {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json"
            },
            responseType: "json"
          })
          .then(response => {
            if (response.status === 200) {
              alert("Orden de Compra Creado con Exito");
              this.setState(
                {
                  insumos: [],
                  ingredientes: [],
                  lista: [],
                  row: [],
                  fActual: "",
                  nroFactura: "",
                  cantidad: "",
                  costo: "",
                  subTotal: "",
                  igv: "",
                  total: "",
                  centerCoste: [],
                  montos: [],
                  test: [],
                  centroCosto: [],
                  proveedores: [],
                  tipos: [{ nombre: "test" }],
                  provedor: {}
                },
                () => {
                  this.props.onGetSupplies();
                  this.props.onGetCenterCost();
                  this.props.onGetProveedores();
                }
              );
            }
          })
          .catch(error => {
            console.log(error); //dispatch error
          });
      }
    } else {
      alert("Debe agregar insumos");
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
    let nroFactura = this.state.nroFactura;

    let data = filtrado.pop();

    if (data !== undefined) {
      this.setState({
        provedor: {
          codigo: data.data.codigo,
          direccionFiscal: data.data.direccionFiscal,
          nombre: data.nombre,
          facturas: [nroFactura],
          ruc: data.data.ruc,
          telefono: data.data.telefono,
          tipo: data.data.tipo,
          _id: data.data._id
        }
      });
    }
  };

  render() {
    let suma = 0;
    let igv = 0;
    let subTotal = 0;
    this.state.ingredientes.forEach((element, index) => {
      suma += element.cantActual * element.costo;
    });
    subTotal = suma / 1.18;
    igv = subTotal * 0.18;

    return (
      <div className={classes.Container}>
        <div className={classes.ZoneData}>
          <div className={classes.Information}>
            <div className={classes.Data}>
              <span className={classes.Text1}>Fecha</span>
              <span className={classes.Text2}>N* de Factura</span>
              <span className={classes.Text3}>Proveedor</span>
            </div>
            <div className={classes.TextBox}>
              <input
                className={classes.TextBox1}
                type="text"
                name="fActual"
                id="fActual"
                value={this.state.fActual}
                readOnly={false}
                onChange={this.typeHandler}
              />
              <input
                className={classes.TextBox2}
                type="text"
                name="nroFactura"
                id="nroFactura"
                value={this.state.nroFactura}
                onChange={this.typeHandler}
              />
              <div className={classes.TextBox3}>
                <ComboBox
                  text={this.state.proveedores}
                  onClickHandler={this.onClickHandler}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={classes.ZoneList}>
          <div className={classes.List}>
            <div className={classes.ZoneHeaderList}>
              <div className={classes.Title1}>Lista de Insumos</div>
            </div>
            <div className={classes.ZoneBodyList}>
              <SuppliesList
                onChangeHandler={this.onChangeHandler}
                data={this.state.lista}
                origen={"Purshase"}
              />
            </div>
          </div>

          <div className={classes.ZoneCenteCoste}>
            <div className={classes.ZoneTitle}>
              <div className={classes.Title2}>Centro de Costo</div>
            </div>
            <div className={classes.List2}>
              <ProductManagerShape
                data={this.state.centerCoste}
                origen={"purshase"}
                onChangeHandler={this.onChangeHandler}
                onClickSuppliesHandler={this.onClickSuppliesHandler}
                confHeight={"80px"}
                confWidth={"80%"}
                confGridColumns={"1% 1fr 4%"}
                confMarfinLeftBox={"-5rem"}
              />
            </div>
          </div>
        </div>
        
        
        <div className={classes.ZoneSearch}>
          <div className={classes.BtnSearch}>
            <ButtonSearch />
          </div>
        </div>
       
       
        <div className={classes.ZoneSelect}>
          <div className={classes.Select}>
            <div className={classes.ZoneHeader}>
              <div className={classes.Code}>Codigo</div>
              <div className={classes.Iinput}>Insumo</div>
              <div className={classes.Expiration}>F. Expiración</div>
              <div className={classes.Quantity}>Cantidad</div>
              <div className={classes.Unity}>Unidad</div>
              <div className={classes.Cost}>Costo</div>
              <div className={classes.Add}>Agregar</div>
            </div>
            <div className={classes.ZoneBody}>
              <table style={{ borderSpacing: "0" }}>
                <tbody>{this.state.row}</tbody>
              </table>
            </div>
          </div>
        </div>
       
       
       
       
       
       
        <div className={classes.Buttons}>
          <div className={classes.ZoneButtons}>
            <div className={classes.BtnSave}>
              <ButtonSave
                confGridRows={"50% 15% 1fr"}
                confPaddingTop={"0.5rem"}
                confMarginLeftIcon={"0.6rem"}
                confMarginLeftText={"-0.2rem"}
                clicked={this.saveRecipeHandler}
              />
            </div>
          </div>
          <div className={classes.ZoneTotal}>
            <div className={classes.Total}>
              <div className={classes.ZoneText}>
                <span className={classes.Text1}>Sub-Total</span>
                <span className={classes.Text2}>IGV 18%</span>
                <span className={classes.Text3}>total</span>
              </div>
              <div className={classes.ZoneNumber}>
                <span className={classes.Text1}>{subTotal.toFixed(2)}</span>
                <span className={classes.Text2}>{igv.toFixed(2)}</span>
                <span className={classes.Text3}>{suma.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  // console.log('state', state)

  return {
    supplies: state.supplies.supplies,
    centerCost: state.centerCost.centerCost,
    proveedores: state.proveedores.proveedores
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
    onGetProveedores: () => {
      dispatch(proveedoresActions.getProveedores());
    },
    onDeleteProveedores: () => {
      dispatch(proveedoresActions.deleteProveedores([]));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CreatePurshase));
