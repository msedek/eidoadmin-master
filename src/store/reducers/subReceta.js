import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  subRecetas: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_SUB_RECETAS:
      return updateObject(state, { subRecetas: action.subRecetas });
    case actionTypes.DELETE_SUB_RECETA:
      return updateObject(state, { subRecetas: action.subRecetas });
    default:
      return state;
  }
};

export default reducer;
