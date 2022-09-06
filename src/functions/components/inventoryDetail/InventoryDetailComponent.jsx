// ---- .*.*.*.*.*. ----
// ---- Autor dev: Steven Cruz Oviedo ----
// ---- Description: Logic DetailInventoryComponent ----
// ---- CREATE Date: 15-08-2022 ----
// ---- .*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.* ----
import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import ModalComponent from "../../../components/generals/modal/ModalComponent";
// ---- .*.*.*.*.*.*.*.* ----
// ---- INIT CONST FUNCTION INVENTORY/DETAIL/COMPONENT----
// ---- .*.*.*.*.*.*.*.*.----

const InventoryDetailComponent = ({
  rowsComponent,
  showComponent,
  onHideComponent,
  onFunction,
}) =>
  showComponent ? (
    <div show={showComponent} onHide={onHideComponent} className="col-md-12">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Author</th>
            <th>Book</th>
            <th>Editorial</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr></tr>
          <tr>
            <td>{rowsComponent.Author}</td>
            <td>{rowsComponent.Book}</td>
            <td>{rowsComponent.Editorial}</td>
            <td>
              <svg
                onClick={onFunction}
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                fill="currentColor"
                class="bi bi-back"
                viewBox="0 0 16 16"
              >
                <path d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2z" />
              </svg>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  ) : null;
export default InventoryDetailComponent;
