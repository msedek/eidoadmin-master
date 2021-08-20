import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  proveedores: []
};

const reducer = (state = initialState, action) => {
  // console.log('state1', state)
  switch (action.type) {
    case actionTypes.GET_PROVEEDORES:
      return updateObject(state, { proveedores: action.proveedores });
    case actionTypes.DELETE_PROVEEDORES:
      return updateObject(state, { proveedores: action.proveedores });
    default:
      return state;
  }
};

export default reducer;
