import * as React from "react";
import * as ReactDOM from "react-dom";

const append = (component) => {
  const target = document.createElement("div");
  document.body.appendChild(target);
  ReactDOM.render(component, target);
  return target;
};

const remove = (target) => {
  ReactDOM.unmountComponentAtNode(target);
  document.body.removeChild(target);
};

export default {
  append,
  remove
}