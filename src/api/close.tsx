import * as React from "react";
import { closeSubject } from "@shared/subject";

/**
 * close for these components:
 * - toast
 * - loading
 * - modal
 * - side
 * - tooltip
 * - notice
 * @param {string | string[]} id, component's attr.id value
 * @param {boolean} invoke, default false, set true will invoke closeHandler
 */
function close(
  id: string | string[],
  closeHandler: boolean = false
) {
  closeSubject.next({id, closeHandler});
}

export default close;
