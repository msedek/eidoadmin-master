import * as actionTypes from "./actionTypes";

export const goToNewProduct = newProductHandler => {
  return {
    type: actionTypes.GO_TO_NEW_PRODUCT,
    newProductHandler: newProductHandler
  };
};

export const goToEditProduct = editProductHandler => {
  return {
    type: actionTypes.GO_TO_EDIT_PRODUCT,
    editProductHandler: editProductHandler
  };
};
export const goGetOutProduct = getOutProductHandler => {

  return {
    type: actionTypes.GO_GET_OUT_PRODUCT,
    getOutProductHandler: getOutProductHandler 
  };
};
export const goSelectRecipe = goSelectRecipeHandler => {

  return {
    type: actionTypes.GO_SELECT_RECIPE,
    goSelectRecipeHandler: goSelectRecipeHandler 
  };
};
export const goEditRecipe = goEditRecipeHandler => {

  return {
    type: actionTypes.GO_EDIT_RECIPE,
    goEditRecipeHandler: goEditRecipeHandler 
  };
};
export const goToLocation = location => {

  return {
    type: actionTypes.GO_TO_LOCATION,
    location: location 
  };
};
