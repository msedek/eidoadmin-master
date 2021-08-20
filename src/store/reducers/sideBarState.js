import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  confBackgroundMan: "#9EC446",
  confColorMan: "#F3F3F4",
  confBackgroundNew: null,
  confColorNew: null,
  confBackgroundEdit: null,
  confColorEdit: null,
  confBackgroundDis:null,
  confColorDis:null,
  conBackgroundWai: null,
  confColorWai: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CONF_BACKGROUND_MAN:
      return updateObject(state, {
        confBackgroundMan: action.confBackgroundMan
      });
    case actionTypes.SET_CONF_COLOR_MAN:
      return updateObject(state, {
        confColorMan: action.confColorMan
      });
    case actionTypes.SET_CONF_BACKGROUND_NEW:
      return updateObject(state, {
        confBackgroundNew: action.confBackgroundNew
      });
    case actionTypes.SET_CONF_COLOR_NEW:
      return updateObject(state, {
        confColorNew: action.confColorNew
      });
    case actionTypes.SET_CONF_BACKGROUND_EDIT:
      return updateObject(state, {
        confBackgroundEdit: action.confBackgroundEdit
      });
    case actionTypes.SET_CONF_COLOR_EDIT:
      return updateObject(state, {
        confColorEdit: action.confColorEdit
      });
    case actionTypes.SET_CONF_BACKGROUND_DIS:
      return updateObject(state, {
        confBackgroundDis: action.confBackgroundDis
      });
    case actionTypes.SET_CONF_COLOR_DIS:
      return updateObject(state, {
        confColorDis: action.confColorDis
      });
    case actionTypes.SET_CONF_BACKGROUND_WAI:
      return updateObject(state, {
        confBackgroundWai: action.confBackgroundWai
      });
    case actionTypes.SET_CONF_COLOR_WAI:
      return updateObject(state, {
        confColorWai: action.confColorWai
      });

    default:
      return state;
  }
};
export default reducer;
