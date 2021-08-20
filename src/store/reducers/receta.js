import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  recetas: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_RECETAS:
      return updateObject(state, { recetas: action.recetas });
    case actionTypes.DELETE_RECETA:
      return updateObject(state, { recetas: action.recetas });
    default:
      return state;
  }
};

export default reducer;