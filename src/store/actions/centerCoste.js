import * as actionTypes from "./actionTypes";
import axios from "axios";

// const myUrl = 'http://68.183.27.146:4000/api/platos';
const myUrl = "http://68.183.27.146:4000/api/centrodecostos";

export const getCenterCoste = centerCost => {
  return {
    type: actionTypes.GET_CENTER_COST,
    centerCost: centerCost
  };
};

export const deleteCenterCost = centerCost => {
  return {
    type: actionTypes.DELETE_CENTER_COST,
    centerCost: centerCost
  };
};

export const getCenterCost = () => {
  // let spanishData = [];
  return dispatch => {
    axios
      .get(myUrl, {
        headers: { "Access-Control-Allow-Origin": "*" },
        responseType: "json"
      })
      .then(response => {
        // spanishData = [...response.data];
        // let filData = spanishData.filter(el => el.idioma !== "english");
        dispatch(getCenterCoste(response.data));
      })
      .catch(error => {
        console.log(error); //dispatch error
      });
  };
};