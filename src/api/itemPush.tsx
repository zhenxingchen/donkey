import * as React from "react";
import { itemPushSubject } from "@shared/subject";
import IItem from "@types-component/item";

function itemPush(id: string, config: IItem) {
  itemPushSubject.next({ id, config });
}

export default itemPush;
