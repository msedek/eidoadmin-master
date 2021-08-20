import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../utility'

const initialState = {
  Catalog: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_CATALOG: return updateObject(state, { Catalog: action.Catalog })
    default: return state
  }
};

export default reducer