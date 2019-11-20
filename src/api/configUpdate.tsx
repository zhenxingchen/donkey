import * as React from "react";
import { configUpdateSubject } from "@shared/subject";
import IItem from "@types-component/item";

export type IConfigUpdateParam = {
  id?: string | string[];
  config?: IItem
};

function configUpdate(id: string | string[], config: {}) {
  configUpdateSubject.next({ id, config });
}

export default configUpdate;
