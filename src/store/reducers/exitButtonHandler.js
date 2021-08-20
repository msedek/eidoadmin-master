import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  getOutEnterpriseHandler: null,
  getOutCatalogoHandler: null,
  getOutPurshaseHandler: null,
  getOutInventoryHandler: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GO_GET_OUT_ENTERPRISE:
      return updateObject(state, {
        getOutEnterpriseHandler: action.getOutEnterpriseHandler
      });
    case actionTypes.GO_GET_OUT_CATALOG:
      return updateObject(state, {
        getOutCatalogHandler: action.getOutCatalogHandler
      });
    case actionTypes.GO_GET_OUT_PURSHASE:
      return updateObject(state, {
        getOutPurshaseHandler: action.getOutPurshaseHandler
      });

    default:
      return state;
  }
};
export default reducer;
