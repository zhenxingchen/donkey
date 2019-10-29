import * as React from "react";
import { removeSubject } from "@shared/subject";

function itemDelete(params) {
  removeSubject.next(params);
}

export default itemDelete;
