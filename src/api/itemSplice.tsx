import * as React from "react";
import { itemSpliceSubject } from "@shared/subject";
import IItem from "@types-component/item";

function itemSplice(id: string, index: number, config?: IItem) {
  itemSpliceSubject.next({ id, index, config });
}

export default itemSplice;
