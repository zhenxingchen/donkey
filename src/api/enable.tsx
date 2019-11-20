import * as React from "react";
import { enableSubject } from "@shared/subject";
import IIds from "@types-common/ids";

function enable(id: IIds) {
  enableSubject.next(id);
}

export default enable;
