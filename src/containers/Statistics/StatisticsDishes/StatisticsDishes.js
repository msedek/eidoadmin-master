import React, { Component } from "react";

import classes from "./StatisticsDishes.scss";
import ButtonStatistics from "../../../components/Buttons/ButtonStatistics/ButtonStatistics";
import Statistics from "../../../components/Statistics/Statistics";
import StatisticResult from "../../../components/StatisticResult/StatisticResult";

class StatisticsDishes extends Component {
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
              confScreen={"dishes"}
              textSpan={"1D"}
              clicked={this.swithHandler}
            />
          </div>
          <div className={classes.BtnWeek}>
            <ButtonStatistics
              confbackground={this.state.buttonWeekState}
              confScreen={"dishes"}
              textSpan={"1S"}
              clicked={this.swithHandler}
            />
          </div>
          <div className={classes.BtnMonth}>
            <ButtonStatistics
              confbackground={this.state.buttonMonthState}
              confScreen={"dishes"}
              textSpan={"1M"}
              clicked={this.swithHandler}
            />
          </div>
          <div className={classes.BtnYear}>
            <ButtonStatistics
              confbackground={this.state.buttonYearState}
              confScreen={"dishes"}
              textSpan={"1A"}
              clicked={this.swithHandler}
            />
          </div>
        </div>
        <div className={classes.ZoneStatistics}>
          <Statistics
            spanText={"Platos Vendidos Lunes 04-10-2017"}
            confColor={"#BA007D"}
          />
        </div>
        <div className={classes.ZoneResult}>
          <StatisticResult
            ConfBackground={"#BA007D"}
            spanText={"Total platos Vendidos: 149"}
          />
        </div>
      </div>
    );
  }
}
export default StatisticsDishes;
