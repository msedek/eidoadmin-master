import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  supplies: []
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case actionTypes.GET_SUPPLIES:
      return updateObject(state, { supplies: action.supplies });
    case actionTypes.DELETE_SUPPLIES:
      return updateObject(state, { supplies: action.supplies });
    default:
      return state;
  }
};

export default reducer;
