import React, { Component } from "react";
import moment from "moment";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import classes from "./CreateSubrecipe.scss";

import CreateSubRecipeHeader from "../../components/HeaderTitle/CreateSubRecipeHeader/CreateSubRecipeHeader";
import ButtonSearch from "../../components/Buttons/ButtonSearch/ButtonSearch";
import ButtonPrepare from "../../components/Buttons/ButtonPrepare/ButtonPrepare";
import ButtonExit from "../../components/Buttons/ButtonExit/ButtonExit";
import * as subRecetaActions from "../../store/actions/index";

class CreateSubrecipe extends Component {
  state = {
    SubRecipe: [],
    row: [],
    data: [],
    checked: null,
    insumosSubReceta: [],
    unidad: ""
  };

  componentDidUpdate() {
    if (this.props.subRecetasList.length > 0) {
      let subRecetasState = [];
      let subRecetaSorted = [];
      let date = moment().format("DD/MM/YYYY");
      let row = [];
      let trow = [];
      let name = "";
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
      let subRecipe = [];
      subRecetaSorted.forEach((element, index) => {
        element.state = false;
        subRecipe.push(element);
        let fullData = element;
        name = fullData.nombre;
        trow.push(
          <tr key={index} style={{ height: "1.4rem", background: "#F3F3F5" }}>
            <td style={{ width: "10.5rem" }}>
              <span
                style={{
                  display: "grid",
                  fontSize: "0.9rem",
                  color: "#5D5D5D",
                  marginLeft: "1rem"
                }}
              >
                {name}
              </span>
            </td>
            <td style={{ width: "7rem" }}>
              <input
                className={classes.BoxText}
                style={{ width: "6rem" }}
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
            <td style={{ width: "7rem" }}>
              <input
                className={classes.BoxText}
                style={{ width: "5rem" }}
                name="unidad"
                id=""
                placeholder="Und"
                ref={input => {
                  this[`textInput${index}`] = input;
                }}
                readOnly={false}
              />
            </td>
            <td style={{ width: "7rem" }}>
              <input
                className={classes.BoxText}
                ref={input => {
                  this[`dateInput${index}`] = input;
                }}
                name="date"
                value={date}
                readOnly={true}
              />
            </td>
            <td style={{ width: "8rem" }}>
              <input
                style={{ marginLeft: "3rem" }}
                className={classes.RealCheckbox}
                onClick={ev => this.onChangeHandler(ev, fullData, index)}
                type="checkbox"
                name="checkbox"
                id="cbox1"
                value="value"
              />
            </td>
          </tr>
        );
      });
      this.props.onDeleteSubReceta();
      row.push(trow);
      this.setState({
        row: row,
        SubRecipe: subRecipe
      });
    }
  }

  componentDidMount() {
    this.props.cardSize("18.2%");
    this.props.topBarVisible("visible");
    this.props.onGetSubReceta();
  }

  PrepareHandler = () => {
    let Data = this.state.SubRecipe.slice(0);
    Data.forEach(element => {
      if (element.state === true) {
        let toSend = {};
        toSend.nombre = element.nombre;
        toSend.data = element.data;
        toSend.cantidad = element.cantidad;
        toSend.unidad = element.unidad;
        toSend.date = element.date;
      }
    });
  };

  onChangeHandler = (ev, fullData, index) => {
    const refCant = this[`numberInput${index}`];
    const refUnd = this[`textInput${index}`];
    const refDate = this[`dateInput${index}`];
    let cantidad = refCant.value;
    let unidad = refUnd.value;
    let SubRecipe = this.state.SubRecipe.slice(0);

    if (!ev.target.checked) {
      SubRecipe[index].state = ev.target.checked;

      this.setState({
        SubRecipe: SubRecipe
      });
    } else {
      if (cantidad === "") {
        alert("Debe indicar la cantidad");
        ev.target.checked = false;
      } else if (unidad === "") {
        alert("Debe indicar una unida valida ");
        ev.target.checked = false;
      } else {
        SubRecipe[index].state = ev.target.checked;
        SubRecipe[index].cantidad = refCant.value;
        SubRecipe[index].unidad = refUnd.value;
        SubRecipe[index].date = refDate.value;
        SubRecipe[index].SubRecipe = fullData;
        SubRecipe[index].Estado = ev.target.checked;

        this.setState({
          SubRecipe: SubRecipe
        });
      }
    }
  };
  render() {
    return (
      <div className={classes.Container}>
        <div className={classes.ZoneList}>
          <div className={classes.ZoneTitle}>
            <CreateSubRecipeHeader />
          </div>
          <div className={classes.list}>
            <table>
              <tbody>{this.state.row}</tbody>
            </table>
          </div>
        </div>
        <div className={classes.ZoneButtons}>
          <div className={classes.ZoneSearch}>
            <div className={classes.RealBtnSearch}>
              <ButtonSearch />
            </div>
          </div>
          <div className={classes.ZonePrepare}>
            <div className={classes.BtnPrepare}>
              <ButtonPrepare clicked={this.PrepareHandler} />
            </div>
            <div className={classes.BtnExit}>
              <ButtonExit clicked={() => this.props.getOutProduct("manager")} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    getOutProduct: state.getOutProduct.getOutProductHandler,
    subRecetasList: state.subRecetas.subRecetas
  };
};
const mapDispatchToProps = dispatch => {
  return {
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
)(withRouter(CreateSubrecipe));
