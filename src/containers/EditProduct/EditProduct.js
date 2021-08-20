import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import classes from "./EditProduct.scss";
import Logo from "../../images/span.png";
import Logo1 from "../../images/ingla.png";
import ButtonSave from "../../components/Buttons/ButtonSave/ButtonSave";
import ButtonExit from "../../components/Buttons/ButtonExit/ButtonExit";
import ButtonCamera from "../../components/Buttons/ButtonCamera/ButtonCamera";
import * as locationActions from "../../store/actions/index";
import ComboBox from "../../components/ComboBox/ComboBox";
import Additional from "../../components/Additional/Additional";


class EditProduct extends Component {
  state = {
    recetas: []
  };

  componentDidMount() {
    this.props.cardSize("18.2%");
  }

  onChangeHandler = e => {
    console.log(e);
  };

  render() {
    return (
      <div className={classes.Container}>
      
        <div className={classes.Zone1}>
          <div className={classes.ZoneInfo}>
            <div className={classes.ZoneText1}>
              <div className={classes.TextBox1}>
                <ComboBox text={this.state.recetas} />
              </div>
              <input
                className={classes.TextBox2}
                type="text"
                placeholder="Fondo"
              />
              <input
                className={classes.TextBox3}
                type="text"
                placeholder="Carne de res"
              />
            </div>
            <div className={classes.ZoneText2}>
              <div className={classes.Date}>
                <input
                  className={classes.TextBox1}
                  type="text"
                  placeholder="30-12-2017"
                />
              </div>
              <div className={classes.Soles}>
                <input
                  className={classes.TextBox2}
                  type="text"
                  placeholder="S /120,00"
                />
              </div>
            </div>
            <div className={classes.ZoneText3}>
              <input
                className={classes.TextBox1}
                type="text"
                placeholder="Descripcion"
              />
            </div>
          </div>
          <div className={classes.ZoneCheck}>
            <div className={classes.ListCheck1}>
              <Additional
                spanText={"Acompañantes"}
                onChangeHandler={this.onChangeHandler}
              />
            </div>
            <div className={classes.ListCheck2}>
              <Additional
                spanText={"Adicionales"}
                onChangeHandler={this.onChangeHandler}
              />
            </div>
          </div>
        </div>
        <div className={classes.Zone2}>
          <div className={classes.ZonePhoto}>
            <div className={classes.Photo} />
          </div>
          <div className={classes.ZoneLanguage}>
            

            <div className={classes.ZoneCheckBox}>
            <div className={classes.QuantityGarnishes} >
            <input
              className={classes.TextBox2}
              type="Number"
              placeholder="Cant. Guarnición"
              name="canGuarniciones"
              onChange={this.typeHandler}
            />
            </div>
              <div
                className={classes.Spanish}
                style={{
                  backgroundImage: `url(${Logo})`
                }}
              />
              <div className={classes.CheckBoxSpanish}>
                <input
                  type="radio"
                  name="radio"
                  className={classes.ChecBox1}
                  id="Spain"
                />
              </div>
              <div
                className={classes.England}
                style={{
                  backgroundImage: `url(${Logo1})`
                }}
              />
              <div className={classes.CheckBoxEngland}>
                <input
                  type="radio"
                  name="radio"
                  className={classes.ChecBox2}
                  id="England"
                />
              </div>
            </div>
          </div>
          <div className={classes.ZoneButtons}>
            <div className={classes.BtnDelet}>
              <ButtonSave
                confMarginTop={"-0.2rem"}
                confMarginBottomText={"0.5rem"}
                confMarginTopText={"-0.15rem"}
                clicked={() => this.props.getOutProduct("manager")}
              />
            </div>
            <div className={classes.BtnExit}>
              <ButtonExit
                confMarginLeftIcon={"0.1rem"}
                clicked={() => this.props.getOutProduct("manager")}
              />
            </div>
            <div className={classes.BtnPhoto}>
              <ButtonCamera />
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
    goEditRecipe: state.goEditRecipe.goEditRecipeHandler
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGoToLocation: location => dispatch(locationActions.goToLocation(location))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(EditProduct));
