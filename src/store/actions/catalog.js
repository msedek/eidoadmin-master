import * as actionTypes from "./actionTypes";
import axios from "axios";

// const myUrl = 'http://68.183.27.146:4000/api/platos';
const myUrl = "http://68.183.27.146:4000/api/recetas";

export const getCatalogs = catalog => {
  return {
    type: actionTypes.GET_CATALOG,
    Catalog: catalog
  };
};

export const getCatalog = () => {
  let spanishData = [];
  return dispatch => {
    axios
      .get(myUrl, {
        headers: { "Access-Control-Allow-Origin": "*" },
        responseType: "json"
      })
      .then(response => {
        spanishData = [...response.data];
        let filData = spanishData.filter(el => el.idioma !== "english");
        dispatch(getCatalogs(filData));
      })
      .catch(error => {
        console.log(error); //dispatch error
      });
  };
};
