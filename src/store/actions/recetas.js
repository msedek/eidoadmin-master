import * as actionTypes from "./actionTypes";
import axios from "axios";

// const myUrl = 'http://68.183.27.146:4000/api/platos';
const myUrl = "http://68.183.27.146:4000/api/recetas";

export const getReceta = recetas => {
  return {
    type: actionTypes.GET_RECETAS,
    recetas: recetas
  };
};

export const deleteReceta = recetas => {
  return {
    type: actionTypes.DELETE_RECETA,
    recetas: recetas
  };
};

export const getRecetas = () => {
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
        dispatch(getReceta(response.data));
      })
      .catch(error => {
        console.log(error); //dispatch error
      });
  };
};