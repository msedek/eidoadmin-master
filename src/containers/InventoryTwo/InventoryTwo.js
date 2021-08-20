import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import classes from "./InventoryTwo.scss";
import InventoryTwoHeader from "../../components/HeaderTitle/InventoryTwoHeader/InventoryTwoHeader";
import ButtonSave from "../../components/Buttons/ButtonSave/ButtonSave";
import ButtonExit from "../../components/Buttons/ButtonExit/ButtonExit";
import ItemsList from "../../components/ItemsList/ItemsList";
import * as suppliesActions from "../../store/actions/index";

class InventoryTwo extends Component {
  state = {
    insumos: []
  };

  logOutHandler = () => {
    this.props.topBarVisible("visible");
    this.props.cardSize("18.2%");
    this.props.history.push("/inventory");
    this.props.sideBarHandler("visible");
  };
  componentDidMount() {
    this.props.onGetSupplies();
  }

  componentDidUpdate() {
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
          insumos: sorted
        },
        () => this.props.onDeleteSupplies()
      );
    }
  }

  onChangeHandler = e => {
    console.log(e);
  };

  render() {
    let row = [];
    let trow = [];
    let description = [];
    let unity = [];
    let inventory = [];
    let parity = null;
    let confBackground = null;
    if (this.state.insumos !== "") {
      this.state.insumos.forEach((element, index) => {
        description = element.nombre;
        unity = element.data.unidad;
        inventory = 10;

        parity = index % 2;
        confBackground = "#DADEE9";
        if (parity === 1) {
          confBackground = "#F3F3F5";
        }
        trow.push(
          <tr
            key={index}
            style={{
              height: "0.9rem",
              fontSize: "0.8rem",
              color: "#5D5D5D",
              width: "745.22px"
            }}
          >
            <td
              style={{
                width: "24.15%",
                height: "1rem",
                background: confBackground
              }}
            >
              <span style={{ marginLeft: "0.5rem" }}>{description}</span>
            </td>
            <td
              style={{
                width: "4.29%",
                height: "1rem",
                background: confBackground,
                textAlign: "center"
              }}
            >
              <span>{unity}</span>
            </td>
            <td
              style={{
                width: "13.68%",
                height: "1rem",
                textAlign: "center",
                background: confBackground
              }}
            >
              <span>{inventory}</span>
            </td>
            <td
              style={{
                width: "17.31%",
                height: "1rem"
              }}
            >
              <div
                style={{
                  display: "flex"
                }}
              >
                <ItemsList
                  confMarfinLeftBox={"1.8rem"}
                  confMarginTop={"-0.2rem"}
                  onChangeHandler={() => this.onChangeHandler(element.nombre)}
                />
                <span
                  style={{
                    marginLeft: "20px"
                  }}
                />
                <ItemsList
                  confMarfinLeftBox={"1.5rem"}
                  confMarginTop={"-0.2rem"}
                  onChangeHandler={this.onChangeHandler}
                />
              </div>
            </td>
            <td
              style={{
                width: "10%",
                height: "1rem"
              }}
            >
              <input
                style={{
                  margin: "0",
                  padding: "0"
                }}
                className={classes.InpuText1}
                type="text"
                name=""
                id=""
                placeholder="Ingresar"
              />
            </td>
            <td
              style={{
                width: "31.66%",
                height: "1rem",
                alignContent: "center"
              }}
            >
              <input
                style={{
                  width: "100%",
                  margin: "0"
                }}
                className={classes.InpuText2}
                type="text"
                name=""
                id=""
                placeholder="Ingresar"
              />
            </td>
          </tr>
        );
      });
      row.push(trow);
    }

    return (
      <div className={classes.ContainerInventoryTwo}>
        <div className={classes.ZoneInfoInveInventory}>
          <div className={classes.ZoneHeader}>
            <InventoryTwoHeader confWidth={"95.5%"} />
          </div>
          <div className={classes.ZoneList}>
            <table style={{ borderCollapse: "collapse" }}>
              <tbody>{row}</tbody>
            </table>
          </div>
        </div>
        <div className={classes.ZoneButtons}>
          <div className={classes.BtnSave}>
            <ButtonSave
              confMarginLeftText={"0.1rem"}
              confMarginTopText={"-0.1rem"}
              clicked={this.logOutHandler}
            />
          </div>
          <div className={classes.BtnExit}>
            <ButtonExit
              clicked={this.logOutHandler}
              confMarginLeftText={"0.1rem"}
            />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    supplies: state.supplies.supplies
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetSupplies: () => {
      dispatch(suppliesActions.getSupplies());
    },
    onDeleteSupplies: () => {
      dispatch(suppliesActions.deleteSupplies([]));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(InventoryTwo));
