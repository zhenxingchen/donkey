import * as React from "react";
import { itemPopSubject } from "@shared/subject";

function itemPop(id: string) {
  itemPopSubject.next({ id });
}

export default itemPop;
