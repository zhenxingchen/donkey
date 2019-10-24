import * as React from "react";
import IComponent from "@types-component/component";
import { COMPONENTS } from "@shared/component";
/**
 * 自定义组件
 * @param component
 */
export function use(component: IComponent) {
  COMPONENTS.push(component);
}