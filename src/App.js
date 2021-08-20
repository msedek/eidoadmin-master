import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Layout from "./Layout/Layout";
import LoginScreen from "./containers/LoginScreen/LoginScreen";
/////////////////////////////////////////////////////////////////////////////////////////
import Enterprise from "./containers/Enterprise/Enterprise";
import CreateEnterprise from "./containers/CreateEnterprise/CreateEnterprise";
import CostCenter from "./containers/CostCenter/CostCenter";
import CreateCostCenter from "./containers/CreateCostCenter/CreateCostCenter";
import CreateEmployee from "./containers/CreateEmployee/CreateEmployee";
import CreateTablet from "./containers/CreateTablet/CreateTablet";
/////////////////////////////////////////////////////////////////////////////////////////
import ProductManager from "./containers/ProductManager/ProductManager";
import NewProduct from "./containers/NewProduct/NewProduct";
import EditProduct from "./containers/EditProduct/EditProduct";
import CreateSubrecipe from "./containers/CreateSubrecipe/CreateSubrecipe";

/////////////////////////////////////////////////////////////////////////////////////////
import CatalogManager from "./containers/CatalogManager/CatalogManager";
import EditCatalog from "./containers/EditCatalog/EditCatalog";
import CreateRecipe from "./containers/CreateRecipe/CreateRecipe";
/////////////////////////////////////////////////////////////////////////////////////////
import CreatePurshase from "./containers/CreatePurshase/CreatePurshase";
import CreateProvider from "./containers/CreateProvider/CreateProvider";
import CreateSupplies from "./containers/CreateSupplies/CreateSupplies";
/////////////////////////////////////////////////////////////////////////////////////////
import TablesOccupation from "./containers/Statistics/TablesOccupation/TablesOccupation";
import SaleStatistics from "./containers/Statistics/SaleStatistics/SaleStatistics";
import StatisticsTables from "./containers/Statistics/StatisticsTables/StatisticsTables";
import StatisticsDishes from "./containers/Statistics/StatisticsDishes/StatisticsDishes";
import WaiterStatistics from "./containers/Statistics/WaiterStatistics/WaiterStatistics";
/////////////////////////////////////////////////////////////////////////////////////////
import Inventory from "./containers/Inventory/Inventory";
import InventoryTwo from "./containers/InventoryTwo/InventoryTwo";
/////////////////////////////////////////////////////////////////////////////////////////

import SideBarEnterprise from "./components/SideBarEnterprise/SideBarEnterprise";
import SideBarProduct from "./components/SideBarProduct/SideBarProduct";
import SideBarCatalog from "./components/SideBarCatalog/SideBarCatalog";
import SideBarPurshase from "./components/SideBarPurshase/SideBarPurshase";
import SideBarStatistics from "./components/SideBarStatistics/SideBarStatistics";


class App extends Component {
  state = {
    cardSize: "3.9%",
    view: "enterprise",
    sideState: "hidden",
    sideHeight: "100%",
    sideWidth: "100%",
    sideColor: "#D1D2D4",
    topBarActiveEnt: "3px solid #5D5D5D",
    topBarActivePro: "none",
    topBarActiveCat: "none",
    topBarActivePur: "none",
    topBarActiveSta: "none",
    topBarActiveInv: "none",
    topBarVisible: "hidden",
    interSide: <SideBarEnterprise />
  };

  sideBarHandler = visible => {
    this.setState({
      sideState: visible
    });
  };

  cardSizeHandler = size => {
    this.setState({
      cardSize: size
    });
  };

  topBarVisibleHandler = visible => {
    this.setState({
      topBarVisible: visible
    });
  };

  topBarClickHandler = option => {
    switch (option) {
      case "product":
        this.setState({
          topBarActiveEnt: "None",
          topBarActivePro: "3px solid #5D5D5D",
          topBarActiveCat: "none",
          topBarActivePur: "none",
          topBarActiveSta: "none",
          topBarVisible: "visible",
          topBarActiveInv: "none",
          view: option,
          interSide: <SideBarProduct clicked={this.sideBarClickHandler} />
        });
        break;
      case "catalog":
        this.setState({
          topBarActiveEnt: "None",
          topBarActivePro: "none",
          topBarActiveCat: "3px solid #5D5D5D",
          topBarActivePur: "none",
          topBarActiveSta: "none",
          topBarVisible: "visible",
          topBarActiveInv: "none",
          view: option,
          interSide: <SideBarCatalog clicked={this.sideBarClickHandler} />
        });
        break;
      case "purshase":
        this.setState({
          topBarActiveEnt: "None",
          topBarActivePro: "none",
          topBarActiveCat: "none",
          topBarActivePur: "3px solid #5D5D5D",
          topBarActiveSta: "none",
          topBarVisible: "visible",
          topBarActiveInv: "none",
          view: option,
          interSide: <SideBarPurshase clicked={this.sideBarClickHandler} />
        });
        break;
      case "statistics":
        this.setState({
          topBarActiveEnt: "None",
          topBarActivePro: "none",
          topBarActiveCat: "none",
          topBarActivePur: "none",
          topBarActiveSta: "3px solid #5D5D5D",
          topBarVisible: "visible",
          topBarActiveInv: "none",
          view: option,
          interSide: <SideBarStatistics clicked={this.sideBarClickHandler} />
        });
        break;
      case "inventory":
        this.setState({
          topBarActiveEnt: "None",
          topBarActivePro: "none",
          topBarActiveCat: "none",
          topBarActivePur: "none",
          topBarActiveSta: "none",
          topBarActiveInv: "3px solid #5D5D5D",
          topBarVisible: "visible",
          view: option,
          sideState: "Hidden"
        });
        break;

      default:
        this.setState({
          topBarActiveEnt: "3px solid #5D5D5D",
          topBarActivePro: "none",
          topBarActiveCat: "none",
          topBarActivePur: "none",
          topBarActiveSta: "none",
          topBarActiveInv: "none",
          view: option,
          topBarVisible: "visible",
          sideState: "visible",
          interSide: <SideBarEnterprise clicked={this.sideBarClickHandler} />
        });
        break;
    }
  };

  render() {
    return (
      <div>
        <Layout
          clickTopBar={this.topBarClickHandler}
          topBarActiveEnt={this.state.topBarActiveEnt}
          topBarActivePro={this.state.topBarActivePro}
          topBarActiveCat={this.state.topBarActiveCat}
          topBarActivePur={this.state.topBarActivePur}
          topBarActiveSta={this.state.topBarActiveSta}
          topBarActiveInv={this.state.topBarActiveInv}
          topBarVisible={this.state.topBarVisible}
          cardSize={this.state.cardSize}
          sideBarVisible={this.state.sideState}
          interSide={this.state.interSide}
          origen={this.state.view}
        >
          <Switch>
            <Route
              path="/inventorytwo"
              render={() => (
                <InventoryTwo
                  cardSize={this.cardSizeHandler}
                  topBarVisible={this.topBarVisibleHandler}
                  sideBarHandler={this.sideBarHandler}
                />
              )}
            />
            <Route
              path="/waiterstatistics"
              render={() => (
                <WaiterStatistics cardSize={this.cardSizeHandler} />
              )}
            />
            <Route path="/statisticsdishes" component={StatisticsDishes} />
            <Route path="/statisticstables" component={StatisticsTables} />
            <Route
              path="/salestatistics"
              render={() => <SaleStatistics cardSize={this.cardSizeHandler} />}
            />
            <Route
              path="/createspplies"
              render={() => (
                <CreateSupplies
                  cardSize={this.cardSizeHandler}
                  topBarVisible={this.topBarVisibleHandler}
                  sideBarHandler={this.sideBarHandler}
                />
              )}
            />
            <Route
              path="/createprovider"
              render={() => (
                <CreateProvider
                  cardSize={this.cardSizeHandler}
                  topBarVisible={this.topBarVisibleHandler}
                  sideBarHandler={this.sideBarHandler}
                />
              )}
            />
            <Route
              path="/createrecipe"
              render={() => (
                <CreateRecipe
                  cardSize={this.cardSizeHandler}
                  topBarVisible={this.topBarVisibleHandler}
                  sideBarHandler={this.sideBarHandler}
                />
              )}
            />
            <Route
              path="/editcatalog"
              render={() => (
                <EditCatalog
                  cardSize={this.cardSizeHandler}
                  topBarVisible={this.topBarVisibleHandler}
                  sideBarHandler={this.sideBarHandler}
                />
              )}
            />
            <Route
              path="/CreateSubrecipe"
              render={() => (
                <CreateSubrecipe
                  cardSize={this.cardSizeHandler}
                  topBarVisible={this.topBarVisibleHandler}
                  sideBarHandler={this.sideBarHandler}
                />
              )}
            />

            <Route
              path="/editproduct"
              render={() => (
                <EditProduct
                  cardSize={this.cardSizeHandler}
                  topBarVisible={this.topBarVisibleHandler}
                  sideBarHandler={this.sideBarHandler}
                />
              )}
            />
            <Route
              path="/newproduct"
              render={() => (
                <NewProduct
                  cardSize={this.cardSizeHandler}
                  topBarVisible={this.topBarVisibleHandler}
                  sideBarHandler={this.sideBarHandler}
                />
              )}
            />
            <Route
              path="/createtablet"
              render={() => (
                <CreateTablet
                  cardSize={this.cardSizeHandler}
                  topBarVisible={this.topBarVisibleHandler}
                  sideBarHandler={this.sideBarHandler}
                />
              )}
            />

            <Route
              path="/createemployee"
              render={() => (
                <CreateEmployee
                  cardSize={this.cardSizeHandler}
                  topBarVisible={this.topBarVisibleHandler}
                  sideBarHandler={this.sideBarHandler}
                />
              )}
            />

            <Route
              path="/createcostcenter"
              render={() => (
                <CreateCostCenter
                  cardSize={this.cardSizeHandler}
                  topBarVisible={this.topBarVisibleHandler}
                  sideBarHandler={this.sideBarHandler}
                />
              )}
            />
            <Route
              path="/costcenter"
              render={() => (
                <CostCenter
                  cardSize={this.cardSizeHandler}
                  topBarVisible={this.topBarVisibleHandler}
                  sideBarHandler={this.sideBarHandler}
                />
              )}
            />
            <Route
              path="/createenterprise"
              render={() => (
                <CreateEnterprise
                  cardSize={this.cardSizeHandler}
                  topBarVisible={this.topBarVisibleHandler}
                  sideBarHandler={this.sideBarHandler}
                />
              )}
            />

            <Route
              path="/inventory"
              render={() => (
                <Inventory
                  cardSize={this.cardSizeHandler}
                  sideBarHandler={this.sideBarHandler}
                  topBarVisible={this.topBarVisibleHandler}
                />
              )}
            />
            <Route
              path="/statistics"
              render={() => (
                <TablesOccupation
                  cardSize={this.cardSizeHandler}
                  sideBarHandler={this.sideBarHandler}
                  topBarVisible={this.topBarVisibleHandler}
                />
              )}
            />
            <Route
              path="/purshase"
              render={() => (
                <CreatePurshase
                  cardSize={this.cardSizeHandler}
                  topBarVisible={this.topBarVisibleHandler}
                  sideBarHandler={this.sideBarHandler}
                />
              )}
            />
            <Route
              path="/catalog"
              render={() => (
                <CatalogManager
                  cardSize={this.cardSizeHandler}
                  sideBarHandler={this.sideBarHandler}
                  topBarVisible={this.topBarVisibleHandler}
                />
              )}
            />
            <Route
              path="/product"
              render={() => (
                <ProductManager
                  cardSize={this.cardSizeHandler}
                  sideBarHandler={this.sideBarHandler}
                  topBarVisible={this.topBarVisibleHandler}
                />
              )}
            />
            <Route
              path="/enterprise"
              render={() => (
                <Enterprise
                  cardSize={this.cardSizeHandler}
                  topBarVisible={this.topBarVisibleHandler}
                  sideBarHandler={this.sideBarHandler}
                />
              )}
            />

            <Route
              path="/"
              exact
              render={() => (
                <LoginScreen
                  cardSize={this.cardSizeHandler}
                  topBarVisible={this.topBarVisibleHandler}
                  sideBarHandler={this.sideBarHandler}
                />
              )}
            />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
