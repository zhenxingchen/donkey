import * as React from "react";
import { ajaxTriggerSubject } from "@shared/subject";

function ajaxTrigger(id: string | string[], data?: {}) {
  ajaxTriggerSubject.next({ id, data });
}

export default ajaxTrigger;
