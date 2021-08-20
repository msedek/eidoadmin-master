import React, { Component } from "react";
import { withRouter } from "react-router-dom"; //hack para quitar con redux
import { connect } from "react-redux";

import classes from "./ProductManager.scss";
import ButtonNew from "../../components/Buttons/ButtonNew/ButtonNew";
import ButtonEdit from "../../components/Buttons/ButtonEdit/ButtonEdit";
import ButtonSearch from "../../components/Buttons/ButtonSearch/ButtonSearch";
import ProductManagerShape from "../../components/ProductManagerShape/ProductManagerShape";
import HeaderTitleProduct from "../../components/HeaderTitle/HeaderTitleProduct/HeaderTitleProduct";
import * as catalogActions from "../../store/actions/index";
import * as subRecetaActions from "../../store/actions/index";

class ProductManager extends Component {
  state = {
    catalog: []
  };

  componentDidMount() {
    this.props.cardSize("18.2%");
    this.props.sideBarHandler("visible");
    this.props.topBarVisible("visible");
    this.props.onGetCatalog();
    this.props.onGetSubReceta();
  }

  onClickSuppliesHandler = (e, data) => {
    console.log("data", data);
  };

  render() {
    let catalog = [];
    let sorted = [];
    if (this.props.subRecetasList.length > 0) {
      this.props.subRecetasList.forEach(element => {
        catalog.push(element.nombre);
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
           <div className={classes.test}>
           <HeaderTitleProduct
            confFontSize={"1.2rem"}
            confWidth={"90%"} 
            confGridColumns={"5% 1fr 3.6%"}/>
            </div>
          </div>
          <div className={classes.List}>
            <div className={classes.ManagerContainer}>
              <ProductManagerShape
                data={sorted}
                origen={"product"}
                confHeight={"305px"}
                confWidth={"100%"}
                confMarfinLeftBox={"7rem"}
                onChangeHandler={this.onChangeHandler}
                onClickSuppliesHandler={this.onClickSuppliesHandler}
              />
            </div>
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
              <ButtonNew
                spanText={"Nuevo"}
                confMarginTopIcon={"-0.2rem"}
                confMarginBottom={"-1rem"}
                confMarginTopText={"0.2rem"}
                confMarginLeft={"-0.1rem"}
                clicked={() => this.props.newProduct("new")}
              />
            </div>
            <div className={classes.BtnEdict}>
              <ButtonEdit
                confMarginTopText={"0.35rem"}
                confMarginLeft={"0rem"}
                // clicked={() => this.props.editProduct("edit")}
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
    subRecetasList: state.subRecetas.subRecetas
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetCatalog: () => {
      dispatch(catalogActions.getCatalog());
    },
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
)(withRouter(ProductManager));
