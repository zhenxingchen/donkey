import * as React from "react";
import IConfig from "../../types/config";
import { IFormItem } from "../../types/form";

import Button from "../button";
import Checkbox from "../checkbox";
import Group from "../group";
import Input from "../input";
import Link from "../link";
import Radio from "../radio";
import Select from "../select";
import Selects from "../selects";
import TextArea from "../textarea";
import Tree from "../tree";

import "./style.less";

function Item(props: IConfig<IFormItem>) {

  const [config, setConfig] = React.useState(null);

  React.useEffect(() => {
    const config = props.config;
    if (!config.attr) {
      config.attr = {};
    }
    setConfig(config);
  }, [ props.config ]);

  const getCols = () => {
    if (!config.cols || config.cols < 1) {
      return 6;
    }
    return config.cols;
  };

  const renderLabel = () => {
    if (config.label && config.label.length > 0) {
      return (
        <label className="dk-label" htmlFor={ config.attr.id }>
          { config.label }
        </label>
      );
    }
    return null;
  };

  const renderPrefix = () => {
    if (config.prefix) {
      return (<span className="dk-prefix">{ config.prefix }</span>);
    }
    return null;
  };

  const renderSuffix = () => {
    if (config.suffix) {
      return (
        <span className="dk-suffix">{ config.suffix }</span>
      );
    }
    return null;
  };

  const renderItem = () => {
    if (!config.tag || config.tag.length < 1) {
      return null;
    }
    switch (config.tag) {
      case "button": return (<Button config={ config }/>);
      case "checkbox": return (<Checkbox config={ config }/>);
      case "group": return (<Group config={ config }/>);
      case "input": return (<Input config={ config }/>);
      case "link": return (<Link config={ config }/>);
      case "radio": return (<Radio config={ config }/>);
      case "select": return (<Select config={ config }/>);
      case "selects": return (<Selects config={ config }/>);
      case "textarea": return (<TextArea config={ config }/>);
      case "tree": return (<Tree config={ config }/>);
    }
  };

  const render = () => {
    if (!config) {
      return null;
    }
    return (
      <div className={ `dk-item dk-col-${getCols()}` }>
        { renderLabel() }
        { renderPrefix() }
        { renderItem() }
        { renderSuffix() }
      </div>
    );
  };

  return render();
}

export default Item;
