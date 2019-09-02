import * as React from "react";
import IProps from "../../types/common/props";
import IItem from "../../types/components/item";

import Block from "../block";
import Bread from "../bread";
import Form from "../form";
import Group from "../group";
import Html from "../html";
import IFrame from "../iframe";
import Pager from "../pager";
import Panel from "../panel";
import Tab from "../tab";
import Table from "../table";
import Tree from "../tree";

import Button from "../button";
import Checkbox from "../checkbox";
import Date from "../date";
import Img from "../img";
import Input from "../input";
import Link from "../link";
import Radio from "../radio";
import Select from "../select";
import Span from "../span";
import TextArea from "../textarea";

import log from "../../shared/log";

function Item(props: IProps<IItem>) {

  const [configs] = React.useState(props.configs);
  const [config] = React.useState(props.config);

  const getKey = (config, index) =>
    (
      config
      && config.attr
      && config.attr.id
        ? config.attr.id
        : index
    );
  const configToComponent = (config, key) => {
    if (!config || !config.tag) {
      log.warning("the config is empty or tag name is empty", config);
      return config;
    }
    switch (config.tag) {
      case "block":
        return (<Block config={config} key={getKey(config, key)}/>);
      case "bread":
        return (<Bread config={config} key={getKey(config, key)}/>);
      case "form":
        return (<Form config={config} key={getKey(config, key)}/>);
      case "html":
        return (<Html config={config} key={getKey(config, key)}/>);
      case "group":
        return (<Group config={config} key={getKey(config, key)}/>);
      case "iframe":
        return (<IFrame config={config} key={getKey(config, key)}/>);
      case "pager":
        return (<Pager config={config} key={getKey(config, key)}/>);
      case "panel":
        return (<Panel config={config} key={getKey(config, key)}/>);
      case "tab":
        return (<Tab config={config} key={getKey(config, key)}/>);
      case "table":
        return (<Table config={config} key={getKey(config, key)}/>);
      case "tree":
        return (<Tree config={config} key={getKey(config, key)}/>);
      case "button":
        return (<Button config={config} key={getKey(config, key)}/>);
      case "checkbox":
        return (<Checkbox config={config} key={getKey(config, key)}/>);
      case "date":
        return (<Date config={config} key={getKey(config, key)}/>);
      case "img":
        return (<Img config={config} key={getKey(config, key)}/>);
      case "input":
        return (<Input config={config} key={getKey(config, key)}/>);
      case "link":
        return (<Link config={config} key={getKey(config, key)}/>);
      case "radio":
        return (<Radio config={config} key={getKey(config, key)}/>);
      case "select":
        return (<Select config={config} key={getKey(config, key)}/>);
      case "span":
        return (<Span config={config} key={getKey(config, key)}/>);
      case "textarea":
        return (<TextArea config={config} key={getKey(config, key)}/>);
      default : {
        log.error("config.tag has no compared", config);
        return null;
      }
    }
  }

  const renderItems = () => {
    if (!configs) {
      return null;
    }
    return (
      <>
        {
          configs.map((config, index) => (
            configToComponent(config, getKey(config, index))
          ))
        }
      </>
    );
  };

  const renderItem = () => {
    if (!config) {
      return null;
    }
    return configToComponent(config, null);
  };

  const render = () => {
    if (config) {
      return renderItem();
    } else if (configs) {
      return renderItems();
    }
    return null;
  }

  return render();
}

export default Item;
