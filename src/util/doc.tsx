import * as React from "react";
import * as ReactDOM from "react-dom";

const create = (tagName: string) =>
  document.createElement(tagName);

const append = (target: HTMLElement) => {
  document.body.appendChild(target);
  return target;
};

const createAndAppend = (tagName: string) => {
  return append(create(tagName));
};

const remove = (target: HTMLElement) =>
  document.body.removeChild(target);

const unmount = (target: HTMLElement) => {
  ReactDOM.unmountComponentAtNode(target);
  return target;
};

const partols = (component, target: HTMLElement) =>
  ReactDOM.createPortal(component, target);

const render = (component, target: HTMLElement) =>
  ReactDOM.render(component, target);

const unmoutAndRemove = (target: HTMLElement) => {
  unmount(target);
  remove(target);
};

export default {
  create,
  append,
  remove,
  unmount,
  partols,
  render,
  unmoutAndRemove,
  createAndAppend
}
