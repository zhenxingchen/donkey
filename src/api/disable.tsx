import * as React from "react";
import { disabledSubject } from "@shared/subject";
import IIds from "@types-common/ids";

function disable(id: IIds) {
  disabledSubject.next(id);
}

export default disable;
