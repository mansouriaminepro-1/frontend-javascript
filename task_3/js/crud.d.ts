export type RowID = number;

export interface RowElement {
     firstname : string ;
    lastname : string ;
    age?: number;
}

import { RowId , RowElement} from "./interface"

export function insertRow(row: RowElement): RowID;
export function deleteRow(row : RowID): void;
export function updateRow(rowId: RowID, row: RowElement): RowID;