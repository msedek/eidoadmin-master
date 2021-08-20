import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  centerCost: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_CENTER_COST:
      return updateObject(state, { centerCost: action.centerCost });
      case actionTypes.DELETE_CENTER_COST:
      return updateObject(state, { centerCost: action.centerCost });
    default:
      return state;
  }
};

export default reducer;