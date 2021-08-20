import * as actionTypes from "./actionTypes";

export const goGetOutEnterprise = getOutEnterpriseHandler => {
  return {
    type: actionTypes.GO_GET_OUT_ENTERPRISE,
    getOutEnterpriseHandler: getOutEnterpriseHandler
  };
};
export const goGetOutCatalog = getOutCatalogHandler => {
  return {
    type: actionTypes.GO_GET_OUT_CATALOG,
    getOutCatalogHandler: getOutCatalogHandler
  };
};
export const goGetOutPurshase = getOutPurshaseHandler => {
  return {
    type: actionTypes.GO_GET_OUT_PURSHASE,
    getOutPurshaseHandler: getOutPurshaseHandler
  };
};
