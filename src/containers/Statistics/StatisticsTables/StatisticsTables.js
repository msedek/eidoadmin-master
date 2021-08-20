import React, { Component } from "react";

import classes from "./StatisticsTables.scss";
import ButtonStatistics from "../../../components/Buttons/ButtonStatistics/ButtonStatistics";
import Statistics from "../../../components/Statistics/Statistics";
import StatisticResult from "../../../components/StatisticResult/StatisticResult";

class StatisticsTables extends Component {
  state = {
    buttonDayState: true,
    buttonWeekState: false,
    buttonMonthState: false,
    buttonYearState: false
  };

  swithHandler = option => {
    switch (option) {
      case "1S":
        this.setState({
          buttonDayState: false,
          buttonWeekState: true,
          buttonMonthState: false,
          buttonYearState: false
        });
        break;
      case "1M":
        this.setState({
          buttonDayState: false,
          buttonWeekState: false,
          buttonMonthState: true,
          buttonYearState: false
        });
        break;
      case "1A":
        this.setState({
          buttonDayState: false,
          buttonWeekState: false,
          buttonMonthState: false,
          buttonYearState: true
        });
        break;

      default:
        this.setState({
          buttonDayState: true,
          buttonWeekState: false,
          buttonMonthState: false,
          buttonYearState: false
        });
        break;
    }
  };
  render() {
    return (
      <div className={classes.ContainerTables}>
        <div className={classes.ZoneButtons}>
          <div className={classes.BtnDay}>
            <ButtonStatistics
              confbackground={this.state.buttonDayState}
              confScreen={"tables"}
              textSpan={"1D"}
              clicked={this.swithHandler}
            />
          </div>
          <div className={classes.BtnWeek}>
            <ButtonStatistics
              confbackground={this.state.buttonWeekState}
              confScreen={"tables"}
              textSpan={"1S"}
              clicked={this.swithHandler}
            />
          </div>
          <div className={classes.BtnMonth}>
            <ButtonStatistics
              confbackground={this.state.buttonMonthState}
              confScreen={"tables"}
              textSpan={"1M"}
              clicked={this.swithHandler}
            />
          </div>
          <div className={classes.BtnYear}>
            <ButtonStatistics
              confbackground={this.state.buttonYearState}
              confScreen={"tables"}
              textSpan={"1A"}
              clicked={this.swithHandler}
            />
          </div>
        </div>
        <div className={classes.ZoneStatistics}>
          <Statistics spanText={"Ocupacion de mesas del Lunes 01-10-2017"} confColor={"#DC9600"} />
        </div>
        <div className={classes.ZoneResult}>
          <StatisticResult
            ConfBackground={"#DC9600"}
            spanText={"Total de mesas ocupadas: 75"}
          />
        </div>
      </div>
    );
  }
}
export default StatisticsTables;
