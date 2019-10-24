import * as React from "react";

import { updateSubject, insertSubject, removeSubject } from "@shared/subject";

export function update(params) {
  console.log("update send subscribe...");
  updateSubject.next(params);
}

export function insert(params) {
  insertSubject.next(params);
}

export function remove(params) {
  removeSubject.next(params);
}
