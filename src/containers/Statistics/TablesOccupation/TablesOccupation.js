import React, { Component } from "react";
import { withRouter } from "react-router-dom"; //hack para quitar con redux

import classes from "./TablesOccupation.scss";
import Table from "../../../components/Table/Table";

class TablesOccupation extends Component {
  componentDidMount() {
    this.props.cardSize("18.2%");
    this.props.sideBarHandler("visible");
    this.props.topBarVisible("visible");
  }

  state = {
    tables: [
      { "1": "Libre" },
      { "2": "Ocupada" },
      { "3": "Libre" },
      { "4": "Ocupada" },
      { "5": "Libre" },
      { "6": "Libre" },
      { "7": "Ocupada" },
      { "8": "Libre" },
      { "9": "Libre" },
      { "10": "Libre" },
      { "11": "Libre" },
      { "12": "Ocupada" },
      { "13": "Libre" },
      { "14": "Libre" },
      { "15": "Libre" },
      { "16": "Libre" },
      { "17": "Libre" },
      { "18": "Reservada" },
      { "19": "Libre" },
      { "20": "libre" },
      { "21": "Libre" },
      { "22": "libre" },
      { "23": "Libre" },
      { "24": "Reservada" },
      { "25": "libre" },
      { "26": "Libre" },
      { "27": "Libre" },
      { "28": "Ocupada" },
      { "29": "Libre" },
      { "30": "Libre" },
      { "31": "Libre" },
      { "32": "Libre" },
      { "33": "Libre" },
      { "34": "Libre" },
      { "35": "Pagar" },
      { "36": "Libre" },
      { "37": "Libre" },
      { "38": "Libre" },
      { "39": "Libre" },
      { "40": "Cobrar" },
      { "41": "Libre" },
      { "42": "Libre" },
      { "43": "Libre" },
      { "44": "Libre" },
      { "45": "Libre" },
      { "46": "Libre" },
      { "47": "Libre" },
      { "48": "Libre" },
      { "49": "Libre" },
      { "50": "Libre" },
      { "51": "Libre" },
      { "52": "Libre" },
      { "53": "Libre" },
      { "54": "Libre" },
      { "55": "Libre" },
      { "56": "Libre" },
      { "57": "Libre" },
      { "58": "Libre" },
      { "59": "Libre" },
      { "60": "Libre" },
      { "61": "Libre" },
      { "62": "Libre" },
      { "63": "Libre" }
    ],
    colorFree: "#B0BAC4",
    colorPagar: "#00A0F6",
    colorCobrar: "#617F1F",
    colorReservada: "#E70050",
    colorOcupada: "#FAE100"
  };

  render() {
    let backCircle = null;
    let backSmallCircle = null;
    let backBorder = null;
    let table = null;
    let tStatus = null;
    let myTabs = [];

    this.state.tables.forEach((tab, index) => {
      table = Object.getOwnPropertyNames(tab);
      tStatus = Object.values(tab).shift();

      switch (tStatus) {
        case "Ocupada":
          backCircle =
            " linear-gradient(135deg, rgba(255,175,75,1) 0%, rgba(255,183,1,1) 100%)";
          backSmallCircle = this.state.colorOcupada;
          backBorder = "#FCDB00";

          myTabs.push(
            <Table
              // clickedTable={this.props.onGoStatusMesa}
              clickedTable={this.props.clicked}
              secondAction={() => this.props.onTurnShadowOff(null)}
              key={index}
              index={index}
              backCircle={backCircle}
              backSmallCircle={backSmallCircle}
              backBorder={backBorder}
              tableNumber={table}
            />
          );

          break;

        case "Reservada":
          backCircle =
            "linear-gradient(45deg, rgba(239,197,202,1) 0%, rgba(210,75,90,1) 1%, rgba(186,39,55,1) 51%, rgba(153,19,44,1) 100%)";
          backSmallCircle = this.state.colorReservada;
          backBorder = "#971E3A";

          myTabs.push(
            <Table
              // clickedTable={this.props.onGoStatusMesa}
              clickedTable={this.props.clicked}
              secondAction={() => this.props.onTurnShadowOff(null)}
              key={index}
              index={index}
              backCircle={backCircle}
              backSmallCircle={backSmallCircle}
              backBorder={backBorder}
              tableNumber={table}
            />
          );

          break;

        case "Cobrar":
          backCircle =
            "linear-gradient(to right, rgba(98,125,77,1) 0%, rgba(73,95,23,1) 100%)";
          backSmallCircle = this.state.colorCobrar;
          backBorder = "#7FA327";

          myTabs.push(
            <Table
              // clickedTable={this.props.onGoStatusMesa}
              clickedTable={this.props.clicked}
              secondAction={() => this.props.onTurnShadowOff(null)}
              key={index}
              index={index}
              backCircle={backCircle}
              backSmallCircle={backSmallCircle}
              backBorder={backBorder}
              tableNumber={table}
            />
          );

          break;

        case "Pagar":
          backCircle =
            "linear-gradient(to right, rgba(73,155,234,1) 0%, rgba(38,94,168,1) 100%)";
          backSmallCircle = this.state.colorPagar;
          backBorder = "#0091C4";

          myTabs.push(
            <Table
              // clickedTable={this.props.onGoStatusMesa}
              clickedTable={this.props.clicked}
              secondAction={() => this.props.onTurnShadowOff(null)}
              key={index}
              index={index}
              backCircle={backCircle}
              backSmallCircle={backSmallCircle}
              backBorder={backBorder}
              tableNumber={table}
            />
          );

          break;

        default:
          backCircle =
            "linear-gradient(45deg, rgba(195,218,233,1) 0%, rgba(134,133,138,1) 100%)";
          backSmallCircle = this.state.colorFree;
          backBorder = "#D8D8DC";

          myTabs.push(
            <Table
              // clickedTable={this.props.onGoStatusMesa}
              clickedTable={this.props.clicked}
              secondAction={() => this.props.onTurnShadowOff(null)}
              key={index}
              index={index}
              backCircle={backCircle}
              backSmallCircle={backSmallCircle}
              backBorder={backBorder}
              tableNumber={table}
            />
          );

          break;
      }
    });

    let tables = [];
    let finalTables = [];
    let row = [];
    let spacer = [<tr key={"sp1"} />];
    for (let index = 0; index < myTabs.length; index++) {
      const el = myTabs[index];
      tables.push(el);
    }
    let slicer = 0;
    for (let index = 0; index < tables.length; index++) {
      const table = tables[index];
      slicer++;
      finalTables.push(
        <td
          key={index}
          style={{
            boxSizing: "contentBox"
          }}
        >
          {table}
        </td>
      );
      let enabler1 = slicer === 9;
      let enabler2 = slicer < 9;
      let enabler3 = index === tables.length - 1;
      let comboEnabler = enabler2 && enabler3;
      if (enabler1 || comboEnabler) {
        let wrapper = <tr key={index}>{finalTables}</tr>;
        row.push(wrapper);
        if (!comboEnabler) {
          row.push(spacer);
        }
        slicer = 0;
        finalTables = [];
      }
    }
    return (
      <div className={classes.ConatinerTablesOccupation}>
        <div className={classes.ZoneTable}>
          <div className={classes.Tables}>
            <table>
              <tbody>{row}</tbody>
            </table>
          </div>
        </div>
        <div className={classes.ZoneButtons}>
          <div className={classes.BtnFree}>
            <div className={classes.ZoneButton}>
              <div className={classes.InnerCircle} />
            </div>
            <div className={classes.ZoneText}>Libre</div>
          </div>
          <div className={classes.BtnOccupied}>
            <div className={classes.ZoneButton}>
              <div className={classes.InnerCircle} />
            </div>
            <div className={classes.ZoneText}>Ocupada</div>
          </div>
          <div className={classes.BtnReserved}>
            <div className={classes.ZoneButton}>
              <div className={classes.InnerCircle} />
            </div>
            <div className={classes.ZoneText}>Reservada</div>
          </div>
          <div className={classes.BtnCharge}>
            <div className={classes.ZoneButton}>
              <div className={classes.InnerCircle} />
            </div>
            <div className={classes.ZoneText}>Por Cobrar</div>
          </div>
          <div className={classes.BtnPay}>
            <div className={classes.ZoneButton}>
              <div className={classes.InnerCircle} />
            </div>
            <div className={classes.ZoneText}>Por Cobrar</div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(TablesOccupation);
