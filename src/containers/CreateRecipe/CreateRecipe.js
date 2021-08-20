import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import _ from "underscore";

import classes from "./CreateRecipe.scss";
import ButtonSearch from "../../components/Buttons/ButtonSearch/ButtonSearch";
import ButtonSave from "../../components/Buttons/ButtonSave/ButtonSave";
import ButtonExit from "../../components/Buttons/ButtonExit/ButtonExit";
import ButtonEdit from "../../components/Buttons/ButtonEdit/ButtonEdit";
import SuppliesList from "../../components/SuppliesList/SuppliesList";
import ComboBox from "../../components/ComboBox/ComboBox";
import * as suppliesActions from "../../store/actions/index";
import * as centerCostActions from "../../store/actions/index";
import * as subRecetaActions from "../../store/actions/index";

class CreateRecipe extends Component {
  state = {
    insumos: [],
    lista: [],
    expira: "",
    minimo: "",
    maximo: "",
    optimo: "",
    critico: "",
    nombre: "",
    row: [],
    rowSubReceta: [],
    unidades: [
      { nombre: "gr" },
      { nombre: "kg" },
      { nombre: "l" },
      { nombre: "ml" },
      { nombre: "cc" }
    ],
    precio: "",
    statusCheck: false,
    insumosReceta: [],
    insumosSubReceta: [],
    cantidad: [],
    unidad: [],
    unidadAcom: "",
    unidadAdic: "",
    acompañante: {},
    adicional: {},
    acompañanteCant: "",
    adicionalCant: "",
    subRecetasState: [],
    subrecetas: [],
    esAdic: null,
    visible: "none",
    centroCosto: [],
    centerCoste: []
  };

  componentWillMount() {
    this.props.cardSize("18.2%");
    this.props.onGetSupplies();
    this.props.onGetSubReceta();
    this.props.onGetCenterCost();
  }

  componentDidUpdate() {
    let insumos = [];
    let centerCoste = [];

    if (this.props.supplies.length > 0 && this.props.centerCost.length > 0) {
      this.props.supplies.forEach(element => {
        let fullData = {};
        fullData.nombre = element.nombre;
        fullData.data = element;
        insumos.push(fullData);
      });

      this.props.centerCost.forEach(element => {
        let fullData = {};
        fullData.nombre = element.nombre;
        fullData.data = element;
        centerCoste.push(fullData);
      });

      insumos = _.sortBy(insumos, insumo => {
        return insumo.nombre;
      });

      centerCoste = _.sortBy(centerCoste, center => {
        return center.nombre;
      });

      this.setState(
        {
          lista: insumos,
          centerCoste: centerCoste
        },
        () => {
          this.props.onDeleteSupplies();
        }
      );
    }
  }

  typeHandler = e => {
    switch (e.target.name) {
      case "nombre":
        this.setState({
          nombre: e.target.value
        });
        break;

      case "cantidad":
        this.setState({
          cantidad: e.target.value
        });

        break;
      case "unidad":
        this.setState({
          unidad: e.target.value
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
      case "expira":
        this.setState({
          expira: e.target.value
        });

        break;
      case "precio":
        this.setState({
          precio: e.target.value
        });

        break;

      case "acompañanteCant":
        this.setState({
          acompañanteCant: e.target.value
        });

        break;

      case "adicionalCant":
        this.setState({
          adicionalCant: e.target.value
        });

        break;

      default:
        break;
    }
  };

  // onChangeSubRecetaHandler = e => {
  //   let subRecetasState = this.state.subRecetasState.slice(0);
  //   let filtrado = subRecetasState.filter(a => a !== e);
  //   let filtro = this.state.insumosSubReceta.slice(0);
  //   filtro.push(e);
  //   this.setState(
  //     {
  //       subRecetasState: filtrado,
  //       insumosSubReceta: filtro
  //     },
  //     () => {
  //       let row = [];
  //       let trow = [];
  //       let name = "";
  //       this.state.insumosSubReceta.forEach((insumo, index) => {
  //         let fullData = insumo.data;

  //         name = fullData.nombre;

  //         trow.push(
  //           <tr
  //             key={index}
  //             ref={this.onClickTrHandler}
  //             style={{ height: "1.45rem", background: "" }}
  //           >
  //             <td
  //               style={{
  //                 width: "16.1rem"
  //               }}
  //             >
  //               <span
  //                 onClick={this.onClickInsumos}
  //                 style={{
  //                   fontSize: "0.94rem",
  //                   color: "#5D5D5D",
  //                   marginLeft: "1rem",
  //                   cursor: "pointer"
  //                 }}
  //               >
  //                 {name}
  //               </span>
  //             </td>
  //             <td style={{ width: "3.3rem" }}>
  //               <input
  //                 className={classes.TexBox}
  //                 style={{
  //                   width: "3rem",
  //                   background: "#DADEE9",
  //                   fontSize: "0.7rem"
  //                 }}
  //                 onChange={this.typeHandler}
  //                 type="number"
  //                 min="0"
  //                 name="cantidad"
  //                 id=""
  //                 placeholder="Cant"
  //                 ref={input => {
  //                   this[`numberInputSub${index}`] = input;
  //                 }}
  //               />
  //             </td>
  //             <td style={{ width: "3.3rem" }}>
  //               <input
  //                 className={classes.TexBox}
  //                 style={{
  //                   width: "3rem",
  //                   background: "#DADEE9",
  //                   fontSize: "0.7rem"
  //                 }}
  //                 onChange={this.typeHandler}
  //                 type="text"
  //                 name="unidad"
  //                 id=""
  //                 placeholder="Und"
  //                 ref={input => {
  //                   this[`textInputSub${index}`] = input;
  //                 }}
  //               />
  //             </td>
  //             <td style={{ width: "3.3rem" }}>
  //               <div
  //                 className={classes.BtnPlus}
  //                 onClick={ev =>
  //                   this.onClickSubRecetaHandle(ev, fullData, index)
  //                 }
  //               >
  //                 <span className={"fas fa-plus"} />
  //               </div>
  //             </td>
  //           </tr>
  //         );
  //       });
  //       row.push(trow);
  //       this.setState({
  //         rowSubReceta: row
  //       });
  //     }
  //   );
  // };

  onChangeHandler = e => {
    let lista = _.clone(this.state.lista);
    let filtrado = lista.filter(a => a !== e);
    let filtro = this.state.insumosReceta.slice(0);
    filtro.push(e);
    this.setState(
      {
        lista: filtrado,
        insumosReceta: filtro
      },
      () => {
        let row = [];
        let trow = [];
        let name = "";
        this.state.insumosReceta.forEach((insumo, index) => {
          let fullData = insumo.data;

          name = fullData.nombre;

          trow.push(
            <tr
              key={index}
              style={{ height: "0.8rem", width: "482.84px", background: "" }}
            >
              <td
                style={{
                  width: "54%"
                }}
              >
                <span
                  onClick={this.onClickInsumos}
                  style={{
                    fontSize: "0.94rem",
                    color: "#5D5D5D",
                    marginLeft: "1rem",
                    cursor: "pointer"
                  }}
                >
                  {name}
                </span>
              </td>
              <td
                style={{
                  width: "16.41%"
                }}
              >
                <input
                  className={classes.TexBox}
                  style={{
                    width: "90%",
                    background: "#DADEE9",
                    fontSize: "0.8rem",
                    height: "1.5rem"
                  }}
                  onChange={this.typeHandler}
                  type="number"
                  min="0"
                  name="cantidad"
                  id=""
                  placeholder="Cant"
                  ref={input => {
                    this[`numberInput${index}`] = input;
                  }}
                />
              </td>
              <td style={{ width: "14.41%" }}>
                <ComboBox
                  text={this.state.unidades}
                  onClickHandler={this.onClickedHandlerUn}
                  // onChange={this.typeHandler}
                  name="unidad"
                  ref={input => {
                    this[`textInput${index}`] = input;
                  }}
                />
              </td>
              <td
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center"
                }}
              >
                <div
                  className={classes.BtnPlus}
                  onClick={ev => this.onClickSupplyHandler(ev, fullData, index)}
                  style={{ height: "1.5rem" }}
                >
                  <span
                    style={{ fontSize: "1rem", marginTop: "0.2rem" }}
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

  saveRecipeHandler = () => {
    if (this.state.insumos.length > 0) {
      // if (this.state.statusCheck === false) {
      //   let enabler1 = this.state.nombre === "";
      //   let enabler2 = this.state.cantidad === "";
      //   let enabler3 = this.state.unidades === "";
      //   let enabler4 = this.state.minimo === "";
      //   let enabler5 = this.state.maximo === "";
      //   let enabler6 = this.state.optimo === "";
      //   let enabler7 = this.state.critico === "";
      //   let enabler8 = this.state.expira === "";
      //   let enabler9 = this.state.precio === "";
      //   let enabler10 = Object.keys(this.state.centroDeCosto).length === 0;
      //   if (enabler1) {
      //     alert("Debe ingresar Nombre de la Sub-receta");
      //   } else if (enabler2) {
      //     alert("Debe Ingresar cantida");
      //   } else if (enabler3) {
      //     alert("Debe Ingresar Unidad");
      //   } else if (enabler4) {
      //     alert("Indique el Minimo");
      //   } else if (enabler5) {
      //     alert("Indique el Maximo");
      //   } else if (enabler6) {
      //     alert("Indique el Optimo");
      //   } else if (enabler7) {
      //     alert("Indique el Critico ");
      //   } else if (enabler8) {
      //     alert("Indique Fecha de Expiracion");
      //   } else if (enabler9) {
      //     alert("Indique el precio");
      //   } else if (enabler10) {
      //     alert("Debe seleccionar un Centro de costo");
      //   }
      //   if (
      //     !enabler1 &&
      //     !enabler2 &&
      //     !enabler3 &&
      //     !enabler4 &&
      //     !enabler5 &&
      //     !enabler6 &&
      //     !enabler7 &&
      //     !enabler8 &&
      //     !enabler9
      //   ) {
      //     let toSend = {};
      //     let acompanante = {};
      //     let adicional = {};

      //     acompanante.cantidad = this.state.acompañanteCant;
      //     acompanante.unidad = this.state.unidadAcom;
      //     adicional.cantidad = this.state.adicionalCant;
      //     adicional.unidad = this.state.unidadAdic;
      //     toSend.adicional = adicional;
      //     toSend.acompanante = acompanante;
      //     toSend.nombre = this.state.nombre;
      //     toSend.insumosData = this.state.insumos;
      //     toSend.minimo = this.state.minimo;
      //     toSend.maximo = this.state.maximo;
      //     toSend.optimo = this.state.optimo;
      //     toSend.critico = this.state.critico;
      //     toSend.expira = this.state.expira;
      //     toSend.precio = this.state.precio;
      //     toSend.centroDeCosto = this.state.centroDeCosto;

      //     console.log("se creo Sub-receta", toSend);
      //     axios
      //       .post("http://68.183.27.146:4000/api/recetas", toSend, {
      //         headers: {
      //           "Access-Control-Allow-Origin": "*",
      //           "Content-Type": "application/json"
      //         },
      //         responseType: "json"
      //       })
      //       .then(response => {
      //         if (response.status === 200) {
      //           alert("Receta creado con exito");
      //           this.props.onGetSupplies();
      //           this.setState({
      //             nombre: "",
      //             maximo: "",
      //             minimo: "",
      //             optimo: "",
      //             expira: "",
      //             precio: "",
      //             critico: "",
      //             insumosReceta: [],
      //             cantidad: "",
      //             unidad: "",
      //             row: [],
      //             unidadAcom: "",
      //             unidadAdic: "",
      //             acompañanteCant: "",
      //             adicionalCant: "",
      //             rowSubReceta: []
      //           });
      //         }
      //       })
      //       .catch(error => {
      //         console.log(error); //dispatch error
      //       });
      //   }
      // }
      // else {
      let enabler1 = this.state.nombre === "";
      let enabler4 = this.state.minimo === "";
      let enabler5 = this.state.maximo === "";
      let enabler6 = this.state.optimo === "";
      let enabler7 = this.state.critico === "";
      let enabler8 = this.state.expira === "";
      let enabler9 = this.state.precio === "";
      if (enabler4) {
        alert("Indique el minimo");
      } else if (enabler5) {
        alert("Indique el maximo");
      } else if (enabler6) {
        alert("Indique el optimo");
      } else if (enabler7) {
        alert("Indique el critico");
      } else if (enabler8) {
        alert("Indique fecha de expiracion");
      } else if (enabler9) {
        alert("Indique el precio");
      } else if (enabler1) {
        alert("Debe ingresar Nombre de la Sub-Receta");
      } else if (
        !enabler4 &&
        !enabler5 &&
        !enabler6 &&
        !enabler7 &&
        !enabler8 &&
        !enabler9
      ) {
        let toSend = {};
        let acompanante = {};
        let adicional = {};
        acompanante.cantidad = this.state.acompañanteCant;
        acompanante.unidad = this.state.unidadAcom;
        adicional.cantidad = this.state.adicionalCant;
        adicional.unidad = this.state.unidadAdic;
        toSend.adicional = adicional;
        toSend.acompanante = acompanante;
        toSend.nombre = this.state.nombre;
        toSend.insumosData = this.state.insumos;
        toSend.minimo = this.state.minimo;
        toSend.maximo = this.state.maximo;
        toSend.optimo = this.state.optimo;
        toSend.critico = this.state.critico;
        toSend.expira = this.state.expira;
        toSend.precio = this.state.precio;
        if (this.state.esAdic) {
          toSend.esAdic = this.state.esAdic;
        }
        toSend.centroDeCosto = this.state.centroDeCosto;

        console.log("se creo Sub-receta", toSend);

        axios
          .post("http://68.183.27.146:4000/api/subrecetas", toSend, {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json"
            },
            responseType: "json"
          })
          .then(response => {
            if (response.status === 200) {
              this.props.onGetSubReceta();
              alert("Sub receta creado con exito");
              this.props.onGetSupplies();
              this.setState({
                // nombre: "",
                // maximo: "",
                // minimo: "",
                // optimo: "",
                // expira: "",
                // precio: "",
                // critico: "",
                // insumosReceta: [],
                // cantidad: "",
                // unidad: "",
                // row: [],
                // rowSubReceta: [],
                // unidadAcom: "",
                // unidadAdic: "",
                // acompañanteCant: "",
                // adicionalCant: "",
                // esAdic: null,
                // statusCheck: null
              });
            }
          })
          .catch(error => {
            console.log(error); //dispatch error
          });
        // }
      }
    } else {
      alert("Debe agregar insumos");
    }
  };

  onClickInsumos = ev => {
    // let row = this.state.row;
    // console.log(row);
    // let insumos = this.state.insumos.slice(0);

    // let filtradoRow = row.filter(
    //   (a) =>
    //     // a[index].props.children[0].props.children.props.children !== fullData
    //     a.props.children[0].props.children.props.children !== fullData
    // );
    // let filtradoRow = row.forEach((element, index) => {
    //   console.log(fullData);
    //   if (
    //     element[index].props.children[0].props.children.props.children ===
    //     fullData
    //   ) {
    //     console.log("lo encontre");
    //   }
    // });

    // let filtradoRow = [];
    // let exit = false;
    // console.log(row);
    // for (let index = 0; index < row.length; index++) {
    //   if (exit) {
    //     break;
    //   }
    //   const element = row[index];
    //   for (let ind = 0; ind < element.length; ind++) {
    //     const fRow = element[ind];
    //     // console.log(element.props.children[ind].props.children.props.children)
    //     console.log(fRow.props.children[0].props.children.props.children);
    //     if (fRow.props.children[0].props.children.props.children === fullData) {
    //       element.splice(ind, 1);
    //       exit = true;
    //       break;
    //     }
    //   }
    //   // console.log(element.props.children[index].props.children.props.children);
    // }

    // let filtrado = insumos.filter(a => a !== fullData);
    // let filtro = this.state.lista.slice(0);
    // filtro.push(fullData);
    // let filtroSorted = filtro.slice(0);
    // filtroSorted.sort(function(a, b) {
    //   let x = a.toLowerCase();
    //   let y = b.toLowerCase();
    //   return x < y ? -1 : x > y ? 1 : 0;
    // });
    // console.log(row);
    // console.log(filtrado);
    this.setState(
      {
        // row: row
        // lista: filtroSorted,
        // insumos: filtrado
      },
      () => {
        this.setState({
          // row: row
        });
      }
    );
  };

  onClickAdicional = (ev, options) => {
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
        unidadAdic: data.nombre
      });
    }
  };

  onClickedHandler = (ev, options) => {
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
        unidadAcom: data.nombre
      });
    }
  };

  onClickedHandlerUn = (ev, options) => {
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
        unidadAcom: data.nombre
      });
    }
  };

  onClickHandler = ev => {
    let status = ev.target.checked;
    this.setState({
      statusCheck: status
    });
  };

  onClickSupplyHandler = (ev, fullData, index) => {
    const refCant = this[`numberInput${index}`];
    // const refUnd = this[`textInput${index}`];
    let cantidad = refCant.value;
    let unidad = this.state.unidadAcom;
    console.log("unidad", unidad);

    if (cantidad === "") {
      alert("Debe indicar la cantidad");
    } else if (unidad === "") {
      alert("Debe indicar una unida valida ");
    } else {
      let insumos = this.state.insumos.slice(0);

      let insumoSchema = {};
      insumoSchema.cantidad = refCant.value;
      insumoSchema.unidad = unidad;
      insumoSchema.insumos = fullData;
      console.log(insumoSchema);
      insumos.push(insumoSchema);
      this.setState(
        {
          insumos: insumos
        },
        () => console.log(this.state.insumos)
      );
    }
  };

  onClickSubRecetaHandle = (ev, fullData, index) => {
    const refCantSub = this[`numberInputSub${index}`];
    const refUndSub = this[`textInputSub${index}`];

    let cantidad = refCantSub.value;
    let unidad = refUndSub.value;

    if (cantidad === "") {
      alert("Debe indicar la cantidad");
    } else if (unidad === "") {
      alert("Debe indicar la unidad");
    } else {
      let subrecetas = this.state.subrecetas.slice(0);
      let subRecetaShema = {};
      subRecetaShema.cantidad = refCantSub.value;
      subRecetaShema.unidad = refUndSub.value;
      subRecetaShema.subRecetas = fullData;
      subrecetas.push(subRecetaShema);
      console.log(subrecetas);
      this.setState(
        {
          subrecetas: subrecetas
        },
        () => console.log(this.state.subrecetas)
      );
    }
  };

  onClickAdicionalHandler = e => {
    let esAdic = e.target.checked;
    this.setState({
      esAdic: esAdic
    });
  };

  editRecipeHandler = e => {
    if (!this.state.visible) {
      let switc = "hidden";
      this.setState({
        visible: switc
      });
    }
  };

  onChangeHandlerSubreceta = e => {
    console.log("fix dissable for now");
    // let row = [];
    // let trow = [];
    // let name = "";
    // e.data.insumosData.forEach((elemen, index) => {
    //   let fullData = elemen;
    //   console.log("fullData", fullData.unidad);

    //   name = fullData.insumos.nombre;

    //   trow.push(
    //     <tr key={index} style={{ height: "1rem", background: "red" }}>
    //       <td
    //         style={{
    //           width: "1rem"
    //         }}
    //       >
    //         <span
    //           onClick={this.onClickInsumos}
    //           style={{
    //             fontSize: "0.94rem",
    //             color: "#5D5D5D",
    //             marginLeft: "0.5rem",
    //             cursor: "pointer",
    //             paddind: "0"
    //           }}
    //         >
    //           {name}
    //         </span>
    //       </td>
    //       <td style={{ width: "2rem" }}>
    //         <input
    //           className={classes.TexBox}
    //           style={{
    //             width: "2rem",
    //             background: "#DADEE9",
    //             fontSize: "0.8rem",
    //             height: "1rem"
    //           }}
    //           onChange={this.typeHandler}
    //           type="number"
    //           min="0"
    //           name="cantidad"
    //           id=""
    //           placeholder="Cant"
    //           value={fullData.cantidad}
    //           ref={input => {
    //             this[`numberInput${index}`] = input;
    //           }}
    //         />
    //       </td>
    //       <td style={{ width: "3.3rem" }}>
    //         {/* <input
    //           className={classes.TexBox}
    //           style={{
    //             width: "3rem",
    //             background: "#DADEE9",
    //             fontSize: "0.7rem"
    //           }}
    //           onChange={this.typeHandler}
    //           type="text"
    //           name="unidad"
    //           id=""
    //           placeholder="Und"
    //           ref={input => {
    //             this[`textInput${index}`] = input;
    //           }}
    //         />*/}
    //         <ComboBox
    //           text={this.state.unidades}
    //           onClickHandler={this.onClickedHandlerUn}
    //           onChange={this.typeHandler}
    //           name="unidad"
    //           ref={input => {
    //             this[`textInput${index}`] = input;
    //           }}
    //         />
    //       </td>
    //       <td style={{ width: "3.3rem" }}>
    //         <div
    //           className={classes.BtnPlus}
    //           onClick={ev => this.onClickSupplyHandler(ev, fullData, index)}
    //           style={{ height: "1.5rem" }}
    //         >
    //           <span
    //             style={{ fontSize: "1rem", marginTop: "0.2rem" }}
    //             className={"fas fa-plus"}
    //           />
    //         </div>
    //       </td>
    //     </tr>
    //   );
    // });
    // row.push(trow);
    // this.setState({
    //   row: row
    // });

    // this.setState({
    //   nombre: e.data.nombre,
    //   expira: e.data.expira,
    //   minimo: e.data.minimo,
    //   maximo: e.data.maximo,
    //   optimo: e.data.optimo,
    //   critico: e.data.critico,
    //   precio: e.data.precio,
    //   acompañanteCant: e.data.acompanante.cantidad,
    //   unidadAcom: e.data.acompanante.unidad,
    //   adicionalCant: e.data.adicional.cantidad
    // });
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
    let subRecetasState = [];
    let subRecetaSorted = [];
    if (this.props.subRecetasList.length > 0) {
      this.props.subRecetasList.forEach(element => {
        let fullData = {};
        fullData.nombre = element.nombre;
        fullData.data = element;
        subRecetasState.push(fullData);
      });
      subRecetaSorted = subRecetasState.slice(0);
      subRecetaSorted.sort(function(a, b) {
        let x = a.nombre.toLowerCase();
        let y = b.nombre.toLowerCase();
        return x < y ? -1 : x > y ? 1 : 0;
      });
    }

    return (
      <div className={classes.Container}>
        <div className={classes.Zone1}>
          <div className={classes.ZoneUp}>
            <div className={classes.ZoneList}>
              <div className={classes.ZoneHeader}>
                <div className={classes.Title11}> Lista de Insumos </div>
              </div>
              <div className={classes.ZoneBody}>
                <SuppliesList
                  confiHeightLis={"95px"}
                  onChangeHandler={this.onChangeHandler}
                  data={this.state.lista}
                />
              </div>
            </div>
          </div>
          <div className={classes.ZoneCenter}>
            <div className={classes.ZoneBtn}>
              <div className={classes.BtnSearch}>
                <ButtonSearch confWidth={"98%"} />
              </div>
            </div>
            <div className={classes.TextBoxContainer}>
              <input
                className={classes.TextBox}
                type="text"
                name="nombre"
                placeholder="Nombre de la Sub-receta"
                onChange={this.typeHandler}
                value={this.state.nombre}
              />
            </div>
            <div className={classes.CheckBoxAdic}>
              <input
                className={classes.RealCheckbox}
                type="checkbox"
                name=""
                id=""
                onClick={this.onClickAdicionalHandler}
              />
              <label className={classes.Label} htmlFor="checkbox">
                Adicional
              </label>
            </div>
          </div>
        </div>
        <div className={classes.Zone2}>
          <div className={classes.ZoneBox}>
            <div className={classes.InputBox}>
              <span className={classes.ZoneMin}>Minimo</span>
              <span className={classes.ZoneMax}>Maximo</span>
              <span className={classes.ZoneOpt}>Optimo</span>
              <span className={classes.ZoneCritical}>Crítico</span>
              <span className={classes.ZoneData}>Expira en:</span>
              <span className={classes.ZonePrice}>Precio</span>
              <span className={classes.ZoneCenterCoste}>C. de Costo</span>
              <input
                className={classes.BoxMin}
                type="text"
                placeholder="Cantidad"
                name="minimo"
                // onClick={this.onClickHandlerr}
                onChange={this.typeHandler}
                value={this.state.minimo}
              />
              <input
                className={classes.BoxMax}
                type="text"
                placeholder="Cantidad"
                name="maximo"
                onChange={this.typeHandler}
                value={this.state.maximo}
              />
              <input
                className={classes.BoxOpt}
                type="text"
                placeholder="Cantidad"
                name="optimo"
                onChange={this.typeHandler}
                value={this.state.optimo}
              />
              <input
                className={classes.BoxCritical}
                type="text"
                placeholder="Cantidad"
                name="critico"
                onChange={this.typeHandler}
                value={this.state.critico}
              />
              <input
                className={classes.BoxDate}
                type="text"
                placeholder="Días"
                name="expira"
                onChange={this.typeHandler}
                value={this.state.expira}
              />
              <input
                className={classes.BoxPrice}
                type="text"
                placeholder="Cantidad"
                name="precio"
                onChange={this.typeHandler}
                value={this.state.precio}
              />
              <div className={classes.TextBox3}>
                <ComboBox
                  text={this.state.centerCoste}
                  onClickHandler={this.onClickHandlerCenterCoste}
                />
              </div>
            </div>
          </div>
          {/* <div className={classes.ZoneButtons}>
           
          </div> */}
        </div>

        <div className={classes.ZoneBelow}>
          <div className={classes.ZoneListEr}>
            <div className={classes.ListCont}>
              <div className={classes.Header}>
                <span className={classes.Text1}>Nombre del Insumo</span>
                <span className={classes.Text2}>Cant.</span>
                <span className={classes.Text3}>Und.</span>
                <span className={classes.Text4}>Agr.</span>
              </div>

              <div className={classes.ListContCh}>
                <table>
                  <tbody>{this.state.row}</tbody>
                </table>
              </div>
            </div>

            <div className={classes.ZoneSubList}>
              <div className={classes.ZoneHeader2}>
                <div className={classes.Title1}> Lista de Insumos </div>
              </div>
              <div className={classes.ZoneBody2}>
                <SuppliesList
                  onChangeHandler={this.onChangeHandlerSubreceta}
                  data={subRecetaSorted}
                  confiHeightLis={"86px"}
                />
              </div>
            </div>
          </div>

          <div className={classes.ZoneButtons}>
            <div className={classes.ZoneTextBox}>
              <span className={classes.Text11}>Acompañante:</span>
              <input
                className={classes.BoxCompanion}
                placeholder="Cant"
                type="number"
                name="acompañanteCant"
                value={this.state.acompañanteCant}
                onChange={this.typeHandler}
              />
              <div className={classes.ComboBox}>
                <ComboBox
                  text={this.state.unidades}
                  onClickHandler={this.onClickedHandler}
                  value={this.state.unidadAcom}
                />
              </div>

              <span className={classes.Text22}>Adicionales:</span>
              <input
                className={classes.BoxCompanion2}
                placeholder="Cant"
                type="number"
                name="adicionalCant"
                id=""
                onChange={this.typeHandler}
                value={this.state.adicionalCant}
              />
              <div className={classes.ComboBox2}>
                <ComboBox
                  text={this.state.unidades}
                  onClickHandler={this.onClickAdicional}
                />
              </div>
            </div>
            <div className={classes.Buttons}>
              <div className={classes.BtnEdit}>
                <ButtonEdit
                  confMarginLeftIcon={"0.35rem"}
                  confMarginLeftText={"-0.5rem"}
                  confMarginTopText={"-0.05rem"}
                  clicked={this.editRecipeHandler}
                />
              </div>

              <div className={classes.BtnSave}>
                <ButtonSave
                  confMarginLeftIcon={"0.35rem"}
                  confMarginLeftText={"-0rem"}
                  confMarginTopText={"-0.05rem"}
                  clicked={this.saveRecipeHandler}
                />
              </div>
              <div className={classes.BtnExit}>
                <ButtonExit
                  confMarginLeftText={"0.8rem"}
                  confMarginTopText={"0.1rem"}
                  confMarginLeftIcon={"0.3rem"}
                  clicked={() => this.props.getOutCatalog("manager")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    supplies: state.supplies.supplies,
    getOutCatalog: state.getOutCatalog.getOutCatalogHandler,
    subRecetasList: state.subRecetas.subRecetas,
    centerCost: state.centerCost.centerCost
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
    onGetSubReceta: () => {
      dispatch(subRecetaActions.getSubRecetas());
    },
    onDeleteSubReceta: () => {
      dispatch(subRecetaActions.deleteSubReceta([]));
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
)(withRouter(CreateRecipe));
