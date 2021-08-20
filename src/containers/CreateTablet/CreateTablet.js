import React, { Component } from "react";

import classes from "./CreateTablet.scss";
import HeaderTitleProduct from "../../components/HeaderTitle/HeaderTitleProduct/HeaderTitleProduct";
import ProductManagerShape from "../../components/ProductManagerShape/ProductManagerShape";
import ButtonEdit from "../../components/Buttons/ButtonEdit/ButtonEdit";
import ButtonSave from "../../components/Buttons/ButtonSave/ButtonSave";

class CreateTablet extends Component {
  state = {
    especial: "",
    numeroMesa: "",
    ubicacion: "",
    edit: false,
    targetRadio: null,
    table: [
      { nombre: "Mesa 1", tipo: "Especial" },
      { nombre: "Mesa 2" },
      { nombre: "Mesa 3" },
      { nombre: "Mesa 4" },
      { nombre: "Mesa 5" },
      { nombre: "Mesa 6" },
      { nombre: "Mesa 7" },
      { nombre: "Mesa 8" },
      { nombre: "Mesa 9" },
      { nombre: "Mesa 10" },
      { nombre: "Mesa 11" },
      { nombre: "Mesa 12" }
    ]
  };
  componentDidMount() {
    this.props.cardSize("18.2%");
  }

  onClickHandler = e => {
    console.log(e);
  };

  typeHandler = t => {
    switch (t.target.name) {
      case "especial":
        this.setState({
          especial: t.target.value
        });
        break;
      case "numeroMesa":
        this.setState({
          numeroMesa: t.target.value
        });
        break;
      case "ubicacion":
        this.setState({
          ubicacion: t.target.value
        });
        break;

      default:
        break;
    }
  };

  editTableHandler = () => {
    this.setState({
      especial: "",
      numeroMesa: "",
      ubicacion: "",
      targetRadio: true,
      edit: true
    });
  };

  onClickHandler = e => {
    if (!this.state.edit) {
      e.target.checked = false;
      alert("Para Editar presione editar");
      this.setState({
        especial: "",
        numeroMesa: "",
        ubicacion: "",
        targetRadio: false,
        edit: false
      });
    } else {
    }
  };

  saveTableHandler = () => {
    let enabler1 = this.state.especial === "";
    let enabler2 = this.state.numeroMesa === "";
    let enabler3 = this.state.ubicacion === "";
    if (enabler1) {
      alert("Debe indicar el tipo de mesa");
    } else if (enabler2) {
      alert("Debe indicar el numero de mesa");
    } else if (enabler3) {
      alert("Debe indicar la ubicación");
    }
  };

  onClickSuppliesHandler = () => {
    console.log("test");
  };

  render() {
    return (
      <div className={classes.Container}>
        <div className={classes.ZoneFrom}>
          <div className={classes.ZoneText}>
            <span className={classes.Type}>Tipo</span>
            <span className={classes.TableNumber}>Numero de Mesa</span>
            <span className={classes.Location}>Ubicación</span>
          </div>
          <div className={classes.ZoneBox}>
            <input
              className={classes.Box1}
              type="text"
              name="especial"
              id=""
              onChange={this.typeHandler}
            />
            <input
              className={classes.Box2}
              type="text"
              name="numeroMesa"
              id=""
              onChange={this.typeHandler}
            />
            <input
              className={classes.Box3}
              type="text"
              name="ubicacion"
              id=""
              onChange={this.typeHandler}
            />
          </div>
        </div>
        <div className={classes.ZoneList}>
          <div className={classes.ZoneTitle}>
            <HeaderTitleProduct
              confFontSize={"1.2rem"}
              confGridColumns={"0% 1fr 0%"}
              spanText={"Numero de Mesas"}
              confGridRow={"40% 1fr"}
            />
          </div>
          <div className={classes.ZoneBody}>
            <ProductManagerShape
              confMarginLeft={"45px"}
              onClickSuppliesHandler={this.onClickSuppliesHandler}
              data={this.state.table}
              confHeight={"58%"}
              confGridColumns={"0% 1fr 0%"}
              confMarfinLeftBox={"3.5rem"}
              confWidth={"98.6%"}
              onClickHandler={this.onClickHandler}
            />
          </div>
        </div>
        <div className={classes.ZoneButtons}>
          <div className={classes.BtnSave}>
            <ButtonSave
              confMarginLeftIcon={"0.5rem"}
              confPaddingTop={"0.6rem"}
              confMarginLeftText={"1.5rem"}
              confMarginTopText={"-0.2rem"}
              clicked={this.saveTableHandler}
            />
          </div>
          <div className={classes.BtnEdit}>
            <ButtonEdit
              confMarginTopIcon={"0.2rem"}
              confMarginTopText={"-0.2rem"}
              clicked={this.editTableHandler}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default CreateTablet;
