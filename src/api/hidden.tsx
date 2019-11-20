import * as React from "react";
import { visibleSubject } from "@shared/subject";

function hidden(id: string | string[]) {
  const visible = false;
  visibleSubject.next({ id, visible });
}

export default hidden;
