import * as React from "react";
import { visibleSubject } from "@shared/subject";

function show(id: string | string[]) {
  const visible = true;
  visibleSubject.next({ id, visible });
}

export default show;
