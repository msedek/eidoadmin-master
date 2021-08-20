import React, { Component } from "react";
import moment from "moment";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import classes from "./ProducShape.scss";
import ComboBox from "../ComboBox/ComboBox";
import Additional from "../Additional/Additional";
import * as locationActions from "../../store/actions/index";
import * as recetaActions from "../../store/actions/index";
import * as subRecetaActions from "../../store/actions/index";

class ProducShape extends Component {
  inputOpenFileRef = React.createRef;

  state = {
    recetas: [],
    receta: null,
    subRecetasAdic: [],
    subRecetasAcom: [],
    recetaAcom: [],
    recipeList: [],
    categoria_plato: "",
    sub_categoria_plato: "",
    fecha: "",
    precio_plato: "",
    Descripcion: "",
    contorno: [],
    adicionales: [],
    idioma: "",
    image: null,
    foto_movil: "",
    visible: "none"
  };

  showOpenFileDlg = ev => {
    let image = ev.target.value.replace("C:\\fakepath\\", "");
    let itemImage = null;
    try {
      itemImage = require("C:\\Users\\Abraham\\ownCloud\\" + image);
    } catch (error) {
      console.log(error);
    }
    this.setState({
      image: itemImage,
      foto_movil: image
    });
  };

  componentDidMount() {
    this.props.onGetSubReceta();
    this.props.onGetReceta();
  }
  onChangeAdicionalHandler = (ev, el) => {
    let adicionales = this.state.adicionales.slice(0);
    let acompanantesShema = {};
    acompanantesShema.nombre = el.nombre;
    acompanantesShema = el.data;

    adicionales.push(acompanantesShema);
    this.setState({
      adicionales: adicionales
    });
  };

  onChangeAcompananteHandler = (ev, el) => {
    let contorno = this.state.contorno.slice(0);
    let acompanantesShema = {};
    acompanantesShema.nombre = el.nombre;
    acompanantesShema = el.data;

    contorno.push(acompanantesShema);
    this.setState({
      contorno: contorno
    });
  };

  componentDidUpdate() {
    let sorted = [];
    let receta = [];

    if (this.props.recetas.length > 0) {
      this.props.recetas.forEach(element => {
        let fullData = {};
        fullData.nombre = element.nombre;
        fullData.data = element;
        receta.push(fullData);
      });
      sorted = receta.slice(0);
      sorted.sort(function(a, b) {
        let x = a.nombre.toLowerCase();
        let y = b.nombre.toLowerCase();
        return x < y ? -1 : x > y ? 1 : 0;
      });
      this.setState(
        {
          recetas: sorted
        },
        () => this.props.onDeleteReceta()
      );
    }

    if (this.props.subRecetasList.length > 0) {
      this.props.subRecetasList.forEach(element => {
        if (element.esAdic === true) {
          let fullData = {};
          fullData.nombre = element.nombre;
          fullData.data = element;
          receta.push(fullData);
        }
      });
      sorted = receta.slice(0);
      sorted.sort(function(a, b) {
        let x = a.nombre.toLowerCase();
        let y = b.nombre.toLowerCase();
        return x < y ? -1 : x > y ? 1 : 0;
      });
      this.setState(
        {
          subRecetasAdic: sorted
        },
        () => this.props.onDeleteSubReceta()
      );
    }

    let sortedAcomp;
    let recetaAcom = [];
    if (this.props.subRecetasList.length > 0) {
      this.props.subRecetasList.forEach(element => {
        let fullData = {};
        fullData.nombre = element.nombre;
        fullData.data = element;
        recetaAcom.push(fullData);
      });
      sortedAcomp = recetaAcom.slice(0);
      sortedAcomp.sort(function(a, b) {
        let x = a.nombre.toLowerCase();
        let y = b.nombre.toLowerCase();
        return x < y ? -1 : x > y ? 1 : 0;
      });
      this.setState(
        {
          recetaAcom: sortedAcomp
        },
        () => this.props.onDeleteSubReceta()
      );
    }
  }

  onChangeHandler = (ev, options) => {
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
        receta: {
          nombre: data.nombre,
          insumos: data.data.insumos,
          _id: data.data._id,
          subRecetas: data.data.subRecetas
        }
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
      let sortedAcomp;
      let recipeList = [];
      if (data.data.insumosData.length > 0) {
        data.data.insumosData.forEach(element => {
          let fullData = {};
          fullData.nombre = element.insumos.nombre;
          fullData.data = element;
          recipeList.push(fullData);
        });
        sortedAcomp = recipeList.slice(0);
        sortedAcomp.sort(function(a, b) {
          let x = a.nombre.toLowerCase();
          let y = b.nombre.toLowerCase();
          return x < y ? -1 : x > y ? 1 : 0;
        });
        let visible = true;
        this.setState({
          recipeList: recipeList,
          visible: visible
        });
      }
      this.setState({
        receta: {
          nombre: data.nombre,
          insumos: data.data.insumosData,
          _id: data.data._id,
          subRecetas: data.data.subRecetasData
        }
      });
    }
  };

  saveDishesHandler = () => {
    let categoria_plato = this.state.categoria_plato;
    let sub_categoria_plato = this.state.sub_categoria_plato;
    let precio_plato = this.state.precio_plato;
    let descripcion = this.state.descripcion;
    let idioma = this.state.idioma;
    if (this.state.receta === null) {
      alert("seleccione una receta");
    } else if (categoria_plato === "") {
      alert("Debe indicar Categoria");
    } else if (sub_categoria_plato === "") {
      alert("Debe indicar Sub-Categoria");
    } else if (precio_plato === "") {
      alert("Debe indicar Precio");
    } else if (descripcion === "") {
      alert("Debe indicar Descriopcion");
    } else if (idioma === "") {
      alert("Debe seleccionar un idioma");
    } else {
      let toSend = {};
      toSend.receta = this.state.receta;
      toSend.categoria_plato = this.state.categoria_plato;
      toSend.sub_categoria_plato = this.state.sub_categoria_plato;
      toSend.precio_plato = this.state.precio_plato;
      toSend.descripcion = this.state.descripcion;
      toSend.contorno = this.state.contorno;
      toSend.adicionales = this.state.adicionales;
      toSend.idioma = this.state.idioma;
      toSend.foto_movil = this.state.foto_movil;

      // axios
      //   .post("http://68.183.27.146:4000/api/platos", toSend, {
      //     headers: {
      //       "Access-Control-Allow-Origin": "*",
      //       "Content-Type": "application/json"
      //     },
      //     responseType: "json"
      //   })
      //   .then(response => {
      //     if (response.status === 200) {
      //       alert("Plato creado con exito");
      //       this.setState({
      //         categoria_plato: "",
      //         sub_categoria_plato: "",
      //         precio_plato: "",
      //         Descripcion: "",
      //         idioma: "",
      //         foto_movil: ""
      //       });
      //     }
      //   })
      //   .catch(error => {
      //     console.log(error); //dispatch error
      //   });
    }
  };

  typeHandler = e => {
    switch (e.target.name) {
      case "categoria_plato":
        this.setState({
          categoria_plato: e.target.value
        });
        break;

      case "sub_categoria_plato":
        this.setState({
          sub_categoria_plato: e.target.value
        });

        break;
      case "precio_plato":
        this.setState({
          precio_plato: e.target.value
        });

        break;
      case "descripcion":
        this.setState({
          descripcion: e.target.value
        });

        break;

      default:
        break;
    }
  };

  onclickIdiomaHandler = e => {
    let idioma = e.target.id;
    this.setState({
      idioma: idioma
    });
  };
  render() {
    let date = moment().format("DD/MM/YYYY");
    return (
      <div className={classes.Zone1}>
        <div className={classes.ZoneInfo}>
          <div className={classes.ZoneText1}>
            <div className={classes.TextBox1}>
              <ComboBox
                text={this.state.recetas}
                onClickHandler={this.onClickedHandler}
              />
            </div>
            <input
              className={classes.TextBox2}
              type="text"
              placeholder="Categoria"
              name="categoria_plato"
              onChange={this.typeHandler}
            />
            <input
              className={classes.TextBox3}
              type="text"
              placeholder="Sub-Categoria"
              name="sub_categoria_plato"
              onChange={this.typeHandler}
            />
          </div>
          <div className={classes.ZoneText2}>
            <div className={classes.TextBox1}>{date}</div>

            <input
              className={classes.TextBox2}
              type="text"
              placeholder="Precio S/."
              name="precio_plato"
              onChange={this.typeHandler}
            />
          </div>
          <div className={classes.ZoneText3}>
            <textarea
              className={classes.TextBox3}
              type="text"
              placeholder="Descripcion"
              name="descripcion"
              onChange={this.typeHandler}
            />
          </div>
        </div>
        <div className={classes.ZoneCheck}>
          <div className={classes.ListCheck1}>
            <Additional
              spanText={"Acompañantes"}
              data={this.state.recetaAcom}
              onChangeHandler={this.onChangeAcompananteHandler}
            />
          </div>
          <div className={classes.ListCheck2}>
            <Additional
              spanText={"Adicionales"}
              onChangeHandler={this.onChangeAdicionalHandler}
              data={this.state.subRecetasAdic}
            />
          </div>
          <div
            style={{ display: this.state.visible }}
            className={classes.ListCheck3}
          >
            <Additional
              spanText={"Insumos"}
              onChangeHandler={this.onChangeAdicionalHandler}
              data={this.state.recipeList}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    getOutProduct: state.getOutProduct.getOutProductHandler,
    goSelectRecipe: state.goSelectRecipe.goSelectRecipeHandler,
    recetas: state.recetas.recetas,
    subRecetasList: state.subRecetas.subRecetas
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGoToLocation: location =>
      dispatch(locationActions.goToLocation(location)),

    onGetReceta: () => {
      dispatch(recetaActions.getRecetas());
    },
    onDeleteReceta: () => {
      dispatch(recetaActions.deleteReceta([]));
    },
    onGetSubReceta: () => {
      dispatch(subRecetaActions.getSubRecetas());
    },
    onDeleteSubReceta: () => {
      dispatch(subRecetaActions.deleteSubReceta([]));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ProducShape));
