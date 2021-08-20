import React, { Component } from "react";
import { withRouter } from "react-router-dom"; //hack para quitar con redux
import { connect } from "react-redux";

import classes from "./Recipe.scss";
import ButtonSave from "../../components/Buttons/ButtonSave/ButtonSave";
import ButtonExit from "../../components/Buttons/ButtonExit/ButtonExit";
import ButtonSearch from "../../components/Buttons/ButtonSearch/ButtonSearch";
import ProductManagerShape from "../../components/ProductManagerShape/ProductManagerShape";
import HeaderTitleProduct from "../../components/HeaderTitle/HeaderTitleProduct/HeaderTitleProduct";
import * as catalogActions from "../../store/actions/index";

class Recipe extends Component {
  state = {
    catalog: []
  };
  componentDidMount() {
    this.props.cardSize("18.2%");
    this.props.sideBarHandler("visible");
    this.props.topBarVisible("visible");
    this.props.onGetCatalog();
  }

  render() {
    let catalog = [];
    let sorted = [];
    if (this.props.CatalogList.length > 0) {
      this.props.CatalogList.forEach(element => {
        catalog.push(element.nombre_plato);
      });
      sorted = catalog.slice(0);
      sorted.sort(function(a, b) {
        let x = a.toLowerCase();
        let y = b.toLowerCase();
        return x < y ? -1 : x > y ? 1 : 0;
      });
    }

    return (
      <div className={classes.ContainerProduct}>
        <div className={classes.DataProduct}>
          <div className={classes.ZoneTitle}>
            <HeaderTitleProduct />
          </div>
          <div className={classes.List}>
            <ProductManagerShape data={sorted} origen={"product"} />
          </div>
        </div>
        <div className={classes.Buttons}>
          <div className={classes.BtnSearch}>
            <div className={classes.RealBtnSearch}>
              <ButtonSearch />
            </div>
          </div>
          <div className={classes.ButtonsNe}>
            <div className={classes.BtnNew}>
              <ButtonSave
                spanText={"Nuevo"}
                confMarginTopIcon={"-0.2rem"}
                confMarginBottom={"-1rem"}
                confMarginTopText={"0.2rem"}
                confMarginLeft={"-0.1rem"}
                clicked={() =>
                  this.props.goSelectRecipe(this.props.locationState)
                }
              />
            </div>
            <div className={classes.BtnEdict}>
              <ButtonExit
                confMarginTopText={"5rem"}
                confGridRow={"50% 20% 1fr"}
                clicked={() =>
                  this.props.goSelectRecipe(this.props.locationState)
                }
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
    newProduct: state.newProduct.newProductHandler,
    editProduct: state.editProduct.editProductHandler,
    goSelectRecipe: state.goSelectRecipe.goSelectRecipeHandler,
    goEditRecipe: state.goEditRecipe.goEditRecipeHandler,
    locationState: state.location.location
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
)(withRouter(Recipe));
