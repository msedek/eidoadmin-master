import * as actionTypes from "./actionTypes";
import axios from "axios";

// const myUrl = 'http://68.183.27.146:4000/api/platos';
const myUrl = "http://68.183.27.146:4000/api/proveedores";

export const getProvedor = proveedores => {
  // console.log('supplies1', proveedores)
  
  return {
    type: actionTypes.GET_PROVEEDORES,
    proveedores: proveedores
  };
};

export const deleteProveedores = proveedores => {
  return {
    type: actionTypes.DELETE_PROVEEDORES,
    proveedores: proveedores
  };
};

export const getProveedores = () => {
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
        dispatch(getProvedor(response.data));
      })
      .catch(error => {
        console.log(error); //dispatch error
      });
  };
};
