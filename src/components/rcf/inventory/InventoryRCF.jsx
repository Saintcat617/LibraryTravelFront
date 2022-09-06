import React, { useState } from "react";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import InventoryDetailComponent from "../../../functions/components/inventoryDetail/InventoryDetailComponent";
import ModalComponent from "../../generals/modal/ModalComponent";
import {
  inventoryInfoEndpoint,
  inventoryDetailEndpoint,
} from "../../../api/endpoints/inventory/InventoryEnpoint";

const ENDPOINT = require("../../../api/config/configBaseApi.json");
const RESPONSE = require("../../../api/response/inventory/inventoryResponse.json");

export default function InventoryRCF() {
  const [detailComponent, setDetailComponent] = useState({
    rowsComponent: {},
    showComponent: false,
    onHideComponent: false,
  });
  const { rowsComponent, showComponent, onHideComponent } = detailComponent;

  const [modalComponent, setModalComponent] = useState({
    titleModalComponent: "",
    messageModalComponent: "",
    btnPrimaryComponent: "",
    showModalComponent: false,
    onHideModalComponent: false,
    onFunction: onclick,
  });
  const {
    titleModalComponent,
    messageModalComponent,
    btnPrimaryComponent,
    showModalComponent,
    onHideModalComponent,
    onFunction,
  } = modalComponent;

  const initInventory = () => {
    try {
      const obj = {
        p_0: document.getElementById("book").value,
      };
      inventoryInfoEndpoint(
        ENDPOINT.config.endpointInvetory.inventory_info,
        obj
      );
      setTimeout(() => {
        if (RESPONSE.response.inventory.ISBNBook > 0) {
          initDetailComponent(RESPONSE.response.inventory.ISBNBook);
        }
      }, 500);
    } catch (error) {
      console.log("=== FAILED RUN *INIT-INVENTORY* === ", error);
    }
  };

  const initInventoryDetail = () => {
    try {
      inventoryDetailEndpoint(
        ENDPOINT.config.endpointInvetory.inventory_detail,
        RESPONSE.response.inventory.ISBNBook
      );
      setTimeout(() => {
        if (RESPONSE.response.inventory.NumberPages > 0) {
        }
      }, 500);
    } catch (error) {
      console.log("=== FAILED RUN *INIT-INVENTORY-DETAIL* === ", error);
    }
  };

  const initDetailComponent = (param) => {
    try {
      if (param > 0) {
        setDetailComponent({
          rowsComponent: RESPONSE.response.inventory,
          showComponent: true,
          onHideComponent: false,
        });
      }
    } catch (error) {
      console.log("== FAILED RUN *INIT-DETAIL-COMPONENT* === ", error);
    }
  };

   const initModalComponent = (param) => {
    try {
      if (param) {
        setModalComponent({
          titleModalComponent: "Inventory detail",
          messageModalComponent: "OK",
          btnPrimaryComponent: "primary",
          showModalComponent: true,
          onHideModalComponent: false,
          onFunction: onclick,
        });
      }
    } catch (error) {
      console.log("Failed run initModalCompany => ", error);
    }
  };  

  return (
    <div
      className="container"
      style={{ paddingbottom: "12px", marginTop: "15rem" }}
    >
      <div className="card" style={{ border: "1px solid #198754" }}>
        <div className="card-body">
          <h3 className="card-title">Inventory Travel</h3>
          <p className="card-text">
            Perform a quick search of available books.
          </p>

          <form className="row  g-3 align-items-center">
            <div className="col-md-6">
              <label htmlFor="interpreterCCMS" className="form-label">
                Book:
              </label>
              <input
                type="text"
                className="form-control border-b"
                id="book"
                placeholder="Enter the book to search"
              />
            </div>
            <div className="col-md-6">
              <form class="form-inline" style={{ marginTop: "31px" }}>
                <button
                  onClick={initInventory}
                  class="btn btn-outline-success"
                  type="button"
                >
                  Search
                </button>
              </form>
            </div>
            <InventoryDetailComponent
              rowsComponent={rowsComponent}
              showComponent={showComponent}
              onHideComponent={onHideComponent}
            />
            <ModalComponent
              titleModalComponent={titleModalComponent}
              messageModalComponent={messageModalComponent}
              btnPrimaryComponent={btnPrimaryComponent}
              showModalComponent={showModalComponent}
              onHideModalComponent={onHideModalComponent}
              onFunction={() => {
                onFunction ? onclick() : initModalComponent(1);
              }}
            />
          </form>
        </div>
      </div>
    </div>
  );
}
