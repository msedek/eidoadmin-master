import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  ordenCompras: []
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case actionTypes.GET_ORDENCOMPRAS:
      return updateObject(state, { ordenCompras: action.ordenCompras });
    case actionTypes.DELETE_ORDENCOMPRAS:
      return updateObject(state, { ordenCompras: action.ordenCompras });
    default:
      return state;
  }
};

export default reducer;
