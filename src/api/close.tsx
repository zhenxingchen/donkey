import * as React from "react";
import { closeSubject } from "@shared/subject";

/**
 * close for these component:
 * toast、loading、modal、side、tooltip、notice、layer
 * @param {string | string[]} id component's attr.id value
 * @param {boolean} invoke default false, set true will invoke closeHandler
 */
function close(id: string | string[], invoke: boolean = false) {
  closeSubject.next({id, invoke});
}

export default close;
