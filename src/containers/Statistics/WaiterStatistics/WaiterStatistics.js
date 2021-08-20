import React, { Component } from "react";
import moment from "moment";

import classes from "./WaiterStatistics.scss";
import ButtonStatistics from "../../../components/Buttons/ButtonStatistics/ButtonStatistics";
import ButtonSlider from "../../../components/Buttons/ButtonSlider/ButtonSlider";
import HeaderStatistics from "../../../components/HeaderTitle/HeaderStatistics/HeaderStatistics";
import WaiterList from "../../../components/WaiterList/WaiterList";
import ListRow from "../../../components/ListRow/ListRow";

class WaiterStatistics extends Component {
  componentDidMount() {
    this.props.cardSize("18.2%");
  }
  state = {
    buttonDayState: true,
    buttonWeekState: false,
    buttonMonthState: false,
    buttonYearState: false,
    employees: [
      {
        nombre_empleado: "Yesandra Escobar",
        hora_entrada: "07:00:00",
        hora_salida: "13:00:00",
        mesas_servidas: [
          {
            mesa: "01",
            precio_plato: [40, 70]
          },
          {
            mesa: "02",
            precio_plato: [10, 25, 5]
          },
          {
            mesa: "03",
            precio_plato: [4]
          },
          {
            mesa: "01",
            precio_plato: [40, 70, 25, 1]
          },
          {
            mesa: "03",
            precio_plato: [4, 7, 28]
          },
          {
            mesa: "07",
            precio_plato: [2, 80, 57, 30, 58]
          },
          {
            mesa: "02",
            precio_plato: [40, 75, 80]
          },
          {
            mesa: "01",
            precio_plato: [5, 20, 80, 90]
          }
        ]
      },
      {
        nombre_empleado: "Genesis Salazar",
        hora_entrada: "08:00:00",
        hora_salida: "16:00:00",
        mesas_servidas: [
          {
            mesa: "01",
            precio_plato: [40, 70]
          },
          {
            mesa: "02",
            precio_plato: [10, 25, 5]
          },
          {
            mesa: "03",
            precio_plato: [40]
          },
          {
            mesa: "01",
            precio_plato: [40, 70, 25, 1]
          },
          {
            mesa: "03",
            precio_plato: [40, 70, 28]
          },
          {
            mesa: "07",
            precio_plato: [26, 80, 90]
          },
          {
            mesa: "02",
            precio_plato: [25, 75, 40]
          },
          {
            mesa: "01",
            precio_plato: [58]
          }
        ]
      },
      {
        nombre_empleado: "Samuel Perez",
        hora_entrada: "08:00:00",
        hora_salida: "16:00:00",
        mesas_servidas: [
          {
            mesa: "01",
            precio_plato: [40, 70]
          },
          {
            mesa: "02",
            precio_plato: [18, 25, 3]
          },
          {
            mesa: "03",
            precio_plato: [20]
          },
          {
            mesa: "01",
            precio_plato: [30, 70, 25, 1]
          },
          {
            mesa: "03",
            precio_plato: [4, 7, 5]
          }
        ]
      },
      {
        nombre_empleado: "Pedro Ruiz",
        hora_entrada: "08:00:00",
        hora_salida: "16:00:00",
        mesas_servidas: [
          {
            mesa: "02",
            precio_plato: [10, 25, 5]
          },
          {
            mesa: "03",
            precio_plato: [40, 25, 7]
          },
          {
            mesa: "01",
            precio_plato: [40, 70, 25, 1]
          },
          {
            mesa: "03",
            precio_plato: [4]
          },
          {
            mesa: "07",
            precio_plato: [25, 10]
          },
          {
            mesa: "02",
            precio_plato: [80]
          },
          {
            mesa: "01",
            precio_plato: [58]
          }
        ]
      },
      {
        nombre_empleado: "Felipe Paz",
        hora_entrada: "16:00:00",
        hora_salida: "00:00:00",
        mesas_servidas: [
          {
            mesa: "01",
            precio_plato: [40]
          },
          {
            mesa: "02",
            precio_plato: [10, 25, 5]
          },
          {
            mesa: "03",
            precio_plato: [40, 20, 58]
          },
          {
            mesa: "01",
            precio_plato: [40, 70, 25, 11]
          },
          {
            mesa: "03",
            precio_plato: [47, 17, 28]
          },
          {
            mesa: "07",
            precio_plato: [25]
          },
          {
            mesa: "02",
            precio_plato: [43, 75, 81]
          },
          {
            mesa: "01",
            precio_plato: [58]
          }
        ]
      },
      {
        nombre_empleado: "Maria Perez",
        hora_entrada: "16:00:00",
        hora_salida: "00:00:00",
        mesas_servidas: [
          {
            mesa: "01",
            precio_plato: [70]
          },
          {
            mesa: "02",
            precio_plato: [10, 25]
          },
          {
            mesa: "03",
            precio_plato: [45]
          },
          {
            mesa: "01",
            precio_plato: [40, 70]
          },
          {
            mesa: "03",
            precio_plato: [4, 7, 28]
          },
          {
            mesa: "07",
            precio_plato: [25]
          }
        ]
      },
      {
        nombre_empleado: "Jose Miler",
        hora_entrada: "16:00:00",
        hora_salida: "00:00:00",
        mesas_servidas: [
          {
            mesa: "01",
            precio_plato: [45, 71]
          },
          {
            mesa: "02",
            precio_plato: [10, 21, 58]
          },
          {
            mesa: "03",
            precio_plato: [40, 51]
          },
          {
            mesa: "01",
            precio_plato: [40, 70, 25, 1]
          },
          {
            mesa: "03",
            precio_plato: [84, 7, 28]
          },
          {
            mesa: "07",
            precio_plato: [22]
          },
          {
            mesa: "02",
            precio_plato: [40, 75, 80]
          },
          {
            mesa: "01",
            precio_plato: [20, 50, 47]
          },
          {
            mesa: "07",
            precio_plato: [57, 25, 50]
          },
          {
            mesa: "05",
            precio_plato: [5, 50, 2]
          }
        ]
      },
      {
        nombre_empleado: "Juan Paredes",
        hora_entrada: "16:00:00",
        hora_salida: "20:00:00",
        mesas_servidas: [
          {
            mesa: "01",
            precio_plato: [40, 70]
          },
          {
            mesa: "02",
            precio_plato: [15, 25, 5]
          },
          {
            mesa: "03",
            precio_plato: [40, 60]
          },
          {
            mesa: "01",
            precio_plato: [40, 78, 25, 1]
          },
          {
            mesa: "03",
            precio_plato: [48, 7, 8]
          },
          {
            mesa: "07",
            precio_plato: [28]
          },
          {
            mesa: "02",
            precio_plato: [40, 75, 80]
          }
        ]
      }
    ]
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
    let entrada = null;
    let salida = null;
    let hTrabajadas = null;
    let mAtendidas = null;
    let ventas = null;
    let totalVentas = null;
    let totalVentasHoras = null;
    let employees = this.state.employees;
    let waiterList = [];
    let confBackground = null;
    let parity = null;
    employees.forEach((employee, index) => {
      entrada = moment.utc(employee.hora_entrada, "HH:mm");
      salida = moment.utc(employee.hora_salida, "HH:mm");
      if (salida.isBefore(entrada)) salida.add(1, "day");
      let d = moment.duration(salida.diff(entrada));
      hTrabajadas = moment.utc(+d).format("H:mm");
      let horasT = hTrabajadas.charAt(0);
      mAtendidas = employee.mesas_servidas.length;
      ventas = employee.mesas_servidas;
      totalVentas = 0;
      ventas.forEach(mesa => {
        mesa.precio_plato.forEach(plato => {
          totalVentas = totalVentas + plato;
          employee.totalVentas = totalVentas;
        });
      });

      parity = index % 2;
      confBackground = "#DADEE9";
      if (parity === 1) {
        confBackground = "#F3F3F5";
      }

      totalVentasHoras = (employee.totalVentas / parseFloat(horasT)).toFixed(2);

      let td = null;
      let cKey1 = index;

      let nombre = this.state.employees[index].nombre_empleado;
      let newStr = nombre.split(" ");
      let inicial = newStr.shift();
      let actualInicial = inicial.charAt(0) + "." + newStr.pop();

      let td1 = (
        <td
          key={cKey1}
          style={{
            width: "24.9%",
            lineHeight: "2.3rem"
          }}
        >
          <WaiterList
            confBackground={confBackground}
            textSpan={actualInicial}
          />
        </td>
      );

      let tr = [];
      for (let ind = 0; ind < 4; ind++) {
        let confBackground = undefined;
        let confColor = undefined;
        let confWidth = undefined;
        let confFontSize = undefined;
        let confMarginLeft = undefined;
        let confFontWeight = undefined;
        let text = undefined;
        let ckey = null;

        switch (ind) {
          case 1:
            ckey = index + "" + ind;
            confBackground = undefined;
            confColor = "#5D5D5D";
            confWidth = "18.7%";
            confFontSize = "0.88rem";
            confMarginLeft = undefined;
            confFontWeight = "bold";
            text = mAtendidas;
            break;
          case 2:
            ckey = index + "" + ind;
            confBackground = undefined;
            confColor = "#5D5D5D";
            confWidth = "19.6%";
            confFontSize = "0.88rem";
            confFontWeight = "bold";
            confMarginLeft = undefined;
            text = totalVentas;
            break;
          case 3:
            ckey = index + "" + ind;
            confBackground = undefined;
            confColor = "#5D5D5D";
            confWidth = "17.3%";
            confFontSize = "0.88rem";
            confFontWeight = "bold";
            confMarginLeft = undefined;
            text = totalVentasHoras;
            break;

          default:
            ckey = index + "" + ind;
            confBackground = undefined;
            confColor = "#5D5D5D";
            confWidth = "19.5%";
            confFontSize = "0.88rem";
            confFontWeight = "bold";
            confMarginLeft = undefined;
            text = horasT;
            break;
        }
        td = (
          <td
            key={ckey}
            style={{
              borderCollapse: "collapse",
              width: confWidth
            }}
          >
            <ListRow
              key={ckey}
              confBackground={confBackground}
              confColor={confColor}
              confWidth={confWidth}
              confFontSize={confFontSize}
              confMarginLeft={confMarginLeft}
              text={text}
              confFontWeight={confFontWeight}
            />
          </td>
        );
        tr.push(td);
      }

      tr.unshift(td1);

      waiterList.push(
        <tr key={index} style={{ background: confBackground }}>
          {tr}
        </tr>
      );
    });

    return (
      <div className={classes.ContainerWaiterStatistics}>
        <div className={classes.ZoneButtons}>
          <div className={classes.BtnDay}>
            <ButtonStatistics
              confbackground={this.state.buttonDayState}
              confScreen={"mesonero"}
              textSpan={"1D"}
              clicked={this.swithHandler}
            />
          </div>
          <div className={classes.BtnWeek}>
            <ButtonStatistics
              confbackground={this.state.buttonWeekState}
              confScreen={"mesonero"}
              textSpan={"1S"}
              clicked={this.swithHandler}
            />
          </div>
          <div className={classes.BtnMonth}>
            <ButtonStatistics
              confbackground={this.state.buttonMonthState}
              confScreen={"mesonero"}
              textSpan={"1M"}
              clicked={this.swithHandler}
            />
          </div>
          <div className={classes.BtnYear}>
            <ButtonStatistics
              confbackground={this.state.buttonYearState}
              confScreen={"mesonero"}
              textSpan={"1A"}
              clicked={this.swithHandler}
            />
          </div>
        </div>
        <div className={classes.ZoneSelect}>
          <ButtonSlider
            spanText={"Desempeño de los meseros el Lunes 04-10-2017"}
          />
        </div>
        <div className={classes.ZoneStatistics}>
          <div className={classes.ZoneHeader}>
            <HeaderStatistics />
          </div>
          <div className={classes.ZoneTablet}>
            <div className={classes.ListContainer}>
              <table
                style={{
                  borderSpacing: "0"
                }}
              >
                <tbody>{waiterList}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default WaiterStatistics;
