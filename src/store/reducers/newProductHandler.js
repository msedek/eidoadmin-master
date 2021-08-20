import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  newProductHandler: null,
  editProductHandler: null,
  getOutProductHandler: null,
  goSelectRecipeHandler: null,
  goEditRecipeHandler: null,
  location: null
};

const reducer = (state = initialState, action) => {
  // console.log("estoy parado en el reducer",action)

  switch (action.type) {
    case actionTypes.GO_TO_NEW_PRODUCT:
      return updateObject(state, {
        newProductHandler: action.newProductHandler
      });
    case actionTypes.GO_TO_EDIT_PRODUCT:
      return updateObject(state, {
        editProductHandler: action.editProductHandler
      });
    case actionTypes.GO_GET_OUT_PRODUCT:
      return updateObject(state, {
        getOutProductHandler: action.getOutProductHandler
      });
    case actionTypes.GO_SELECT_RECIPE:
      return updateObject(state, {
        goSelectRecipeHandler: action.goSelectRecipeHandler
      });
    case actionTypes.GO_EDIT_RECIPE:
      return updateObject(state, {
        goEditRecipeHandler: action.goEditRecipeHandler
      });
    case actionTypes.GO_TO_LOCATION:
      return updateObject(state, {
        location: action.location
      });

    default:
      return state;
  }
};
export default reducer;
