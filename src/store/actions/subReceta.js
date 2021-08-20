import * as actionTypes from "./actionTypes";
import axios from "axios";

// const myUrl = 'http://68.183.27.146:4000/api/platos';
const myUrl = "http://68.183.27.146:4000/api/subrecetas";

export const getSubReceta = subRecetas => {
  return {
    type: actionTypes.GET_SUB_RECETAS,
    subRecetas: subRecetas
  };
};

export const deleteSubReceta = subRecetas => {
  return {
    type: actionTypes.DELETE_SUB_RECETA,
    subRecetas: subRecetas
  };
};

export const getSubRecetas = () => {
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
        dispatch(getSubReceta(response.data));
      })
      .catch(error => {
        console.log(error); //dispatch error
      });
  };
};
