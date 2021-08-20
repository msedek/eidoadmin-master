import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import classes from "./SaleStatistics.scss";
import ButtonStatistics from "../../../components/Buttons/ButtonStatistics/ButtonStatistics";
import Statistics from "../../../components/Statistics/Statistics";
import StatisticResult from "../../../components/StatisticResult/StatisticResult";

class SaleStatistics extends Component {
  componentDidMount() {
    this.props.cardSize("18.2%")
  }
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
      <div className={classes.ContainerSale}>
        <div className={classes.ZoneButtons}>
          <div className={classes.BtnDay}>
            <ButtonStatistics
              confbackground={this.state.buttonDayState}
              confScreen={"sales"}
              textSpan={"1D"}
              clicked={this.swithHandler}
            />
          </div>
          <div className={classes.BtnWeek}>
            <ButtonStatistics
              confbackground={this.state.buttonWeekState}
              confScreen={"sales"}
              textSpan={"1S"}
              clicked={this.swithHandler}
            />
          </div>
          <div className={classes.BtnMonth}>
            <ButtonStatistics
              confbackground={this.state.buttonMonthState}
              confScreen={"sales"}
              textSpan={"1M"}
              clicked={this.swithHandler}
            />
          </div>
          <div className={classes.BtnYear}>
            <ButtonStatistics
              confbackground={this.state.buttonYearState}
              confScreen={"sales"}
              textSpan={"1A"}
              clicked={this.swithHandler}
            />
          </div>
        </div>
        <div className={classes.ZoneStatistics}>
          <Statistics spanText={"Ventas del Lunes 04-10-2017"} confColor={'#00A0F6'} />
        </div>
        <div className={classes.ZoneResult}>
          <StatisticResult
            ConfBackground={"#00A0F6"}
            spanText={"Total ventas: S/. 10.576,00"}
          />
        </div>
      </div>
    );
  }
}
export default withRouter(SaleStatistics);
