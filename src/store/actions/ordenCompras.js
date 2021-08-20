import * as actionTypes from "./actionTypes";
import axios from "axios";

// const myUrl = 'http://68.183.27.146:4000/api/platos';
const myUrl = "http://68.183.27.146:4000/api/ordencompras";

export const getOrdenCompra = ordenCompras => {

  return {
    type: actionTypes.GET_ORDENCOMPRAS,
    ordenCompras: ordenCompras
  };
};

export const deleteOrdenCompras = ordenCompras => {
  return {
    type: actionTypes.DELETE_ORDENCOMPRAS,
    ordenCompras: ordenCompras
  };
};

export const getOrdenCompras = () => {
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
        dispatch(getOrdenCompra(response.data));
      })
      .catch(error => {
        console.log(error); //dispatch error
      });
  };
};
