import * as React from "react";
import { insertSubject } from "@shared/subject";

function itemInsert(params) {
  insertSubject.next(params);
}

export default itemInsert;
