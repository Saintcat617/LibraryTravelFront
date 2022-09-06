import { encode, decode } from "../../../utils/Encrypt";

const RESPONSE = require("../../response/inventory/inventoryResponse.json");

export const inventoryInfoService = (endpoint, obj, requestOptions) => {
  try {
    const objEncode = {
      p_0: encode(String(obj.p_0)),
    };
    fetch(endpoint + objEncode.p_0, requestOptions)
      .then(async (response) => {
        const data =  await response.json();

        if (data) {
          RESPONSE.response.inventory.IdAuthor = data.idAuthor;
          RESPONSE.response.inventory.ISBNBook = data.isbnBook;
          RESPONSE.response.inventory.Author = decode(data.author);
          RESPONSE.response.inventory.Book = decode(data.book);
          RESPONSE.response.inventory.Editorial = decode(data.editorial);
        }

        return RESPONSE;
      })
      .catch((error) => {
        console.log("=== FAILED GET *INVENTROY-INFO-SERVICE* === ", error);
      });
  } catch (error) {
    console.log("=== FAILED INIT *INVENTORY-INFO-SERVICE* ===", error);
  }
};

export const inventoryDetailService = (endpoint, obj, requestOptions) => {
    try {
      const objEncode = {
        p_0: encode(String(obj.p_0)),
      };
      fetch(endpoint + objEncode.p_0, requestOptions)
        .then(async (response) => {
          const data = await response.json();
  
          if (data) {
            RESPONSE.reponse.inventoy.IdAuthor = data.IdAuthor;
            RESPONSE.reponse.inventoy.ISBNBook = data.ISBNBook;
            RESPONSE.reponse.inventoy.Author = decode(data.Author);
            RESPONSE.reponse.inventoy.Book = decode(data.Book);
            RESPONSE.reponse.inventoy.Synopsis = decode(data.Synopsis);
            RESPONSE.reponse.inventoy.NumberPages = data.NumberPages;
            RESPONSE.reponse.inventoy.Editorial = decode(data.Editorial);
            RESPONSE.reponse.inventoy.Campus = decode(data.Campus);
          }
  
          return RESPONSE;
        })
        .catch((error) => {
          console.log("=== FAILED GET *INVENTROY-DETAIL-SERVICE* === ", error);
        });
    } catch (error) {
      console.log("=== FAILED INIT *INVENTORY-DETAIL-SERVICE* ===", error);
    }
  };