import * as React from "react";
import IComponent from "@types-component/component";
import { COMPONENTS } from "@shared/component";

function component(component: IComponent) {
  COMPONENTS.push(component);
}

export default component;
