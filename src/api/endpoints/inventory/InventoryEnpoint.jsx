import { inventoryInfoService, inventoryDetailService } from "../../services/inventory/InventoryService";

const CONFIG = require("../../config/configBaseApi.json");

export const inventoryInfoEndpoint = (endpoint, obj) => {
  try {
    var requestOptions = {
      method: CONFIG.config.method[0],
      headers: { "Content-Type": CONFIG.config.headers[1] },
    };
    return inventoryInfoService(endpoint, obj, requestOptions); 
  } catch (error) {
    console.log(" === FAILED INIT *INVENTORY-INFO-ENDPOINT* === ", error);
  }
};

export const inventoryDetailEndpoint = (endpoint, obj) => {
    try {
      var requestOptions = {
        method: CONFIG.config.method[1],
        headers: { "Content-Type": CONFIG.config.headers[1] },
      };
      return inventoryDetailService(endpoint, obj, requestOptions); 
    } catch (error) {
      console.log(" === FAILED INIT *INVENTORY-DETAIL-ENDPOINT* === ", error);
    }
  };