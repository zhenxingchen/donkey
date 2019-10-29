import * as React from "react";
import { updateSubject } from "@shared/subject";

function configUpdate(params) {
  console.log("update send subscribe...");
  updateSubject.next(params);
}

export default configUpdate;
