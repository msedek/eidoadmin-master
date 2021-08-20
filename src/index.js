import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { BrowserRouter } from "react-router-dom";

// import './index.css';
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import switchSideBar from "./store/reducers/sideBarState";
import catalogState from "./store/reducers/catalog";
import functionNewProduct from "./store/reducers/newProductHandler";
import functionEditProduct from "./store/reducers/newProductHandler";
import functionGetOutProduct from "./store/reducers/newProductHandler";
import functionGetOutEnterprise from "./store/reducers/exitButtonHandler";
import functionGetOutCatalog from "./store/reducers/exitButtonHandler";
import functionGetOutPurshease from "./store/reducers/exitButtonHandler";
import functionGoSelectRecipe from "./store/reducers/newProductHandler";
import functionGoEditRecipe from "./store/reducers/newProductHandler";
import locationState from "./store/reducers/newProductHandler";
import suppliesState from "./store/reducers/supplies";
import centerCosteState from "./store/reducers/centerCoste";
import subRecetaState from "./store/reducers/subReceta";
import recetaState from "./store/reducers/receta";
import ordenComprasState from "./store/reducers/ordenCompras";
import proveedoresState from "./store/reducers/proveedores";

const rootReducer = combineReducers({
  sideBarState: switchSideBar,
  CatalogList: catalogState,
  newProduct: functionNewProduct,
  editProduct: functionEditProduct,
  getOutProduct: functionGetOutProduct,
  getOutEnterprise: functionGetOutEnterprise,
  getOutCatalog: functionGetOutCatalog,
  getOutPurshase: functionGetOutPurshease,
  goSelectRecipe: functionGoSelectRecipe,
  goEditRecipe: functionGoEditRecipe,
  location: locationState,
  supplies: suppliesState,
  centerCost: centerCosteState,
  subRecetas: subRecetaState,
  recetas: recetaState,
  ordenCompras: ordenComprasState,
  proveedores: proveedoresState
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
