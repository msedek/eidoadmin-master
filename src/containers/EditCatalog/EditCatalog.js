import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import _ from "underscore";

import classes from "./EditCatalog.scss";
import HeaderTitleProduct from "../../components/HeaderTitle/HeaderTitleProduct/HeaderTitleProduct";
import EditCatalogShape from "../../components/EditCatalogShape/EditCatalogShape";
import ButtonSearch from "../../components/Buttons/ButtonSearch/ButtonSearch";
import ButtonSave from "../../components/Buttons/ButtonSave/ButtonSave";
import ButtonExit from "../../components/Buttons/ButtonExit/ButtonExit";
import ButtonSelectAll from "../../components/Buttons/ButtonSelectAll/ButtonSelectAll";
import * as catalogActions from "../../store/actions/index";

class EditCatalog extends Component {
  state = {
    catalog: []
  };

  logOutHandler = () => {
    this.props.topBarVisible("hidden");
    this.props.cardSize("3.9%");
    this.props.history.push("/");
    this.props.sideBarHandler("hidden");
  };

  componentWillMount() {
    let sorted = [];
    this.props.onGetCatalog();
    sorted = _.sortBy(this.props.CatalogList, item => {
      return item.nombre;
    });
    this.setState({
      catalog: sorted
    });
  }

  componentDidMount() {
    this.props.cardSize("18.2%");
  }

  onChangeHandler = e => {
    console.log(e);
  };

  render() {
    return (
      <div className={classes.ContainerEditCatalog}>
        <div className={classes.DataCatalago}>
          <div className={classes.ZoneTitle}>
            <HeaderTitleProduct confFontSize={"1.1rem"} />
          </div>
          <div className={classes.List}>
            <EditCatalogShape
              data={this.state.catalog}
              confHeightCheck={"34.43%"}
              onChangeHandler={this.onChangeHandler}
              origen={"Catalog"}
            />
          </div>
        </div>
        <div className={classes.Buttons}>
          <div className={classes.BtnSearch}>
            <div className={classes.RealBtnSearch}>
              <ButtonSearch />
            </div>
          </div>
          <div className={classes.ButtonsSSE}>
            <div className={classes.BtnSave}>
              <ButtonSave
                confGridRows={"50% 14% 1fr"}
                confPaddingTop={"0rem"}
                confMarginLeftIcon={"0.3rem"}
                clicked={() => this.props.getOutCatalog("manager")}
              />
            </div>
            <div className={classes.BtnSelet}>
              <ButtonSelectAll />
            </div>
            <div className={classes.BtnExit}>
              <ButtonExit
                clicked={() => this.props.getOutCatalog("manager")}
                confGridRow={"50% 13% 1fr"}
                confMarginTop={"0.1rem"}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    CatalogList: state.CatalogList.Catalog,
    getOutCatalog: state.getOutCatalog.getOutCatalogHandler
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetCatalog: () => {
      dispatch(catalogActions.getCatalog());
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(EditCatalog));
