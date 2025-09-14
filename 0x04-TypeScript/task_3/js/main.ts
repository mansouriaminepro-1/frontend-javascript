/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from "./interface";
import * as CRUD from "./crud.js";

const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};

const newRowID: RowID = CRUD.insertRow(row);
console.log(`Inserted row id: ${newRowID}`);

CRUD.updateRow(newRowID, { ...row, age: 23 });

CRUD.deleteRow(newRowID);
