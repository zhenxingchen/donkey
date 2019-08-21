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

  const [configs, setConfigs] = React.useState(props.configs);
  const [config, setConfig] = React.useState(props.config);

  React.useEffect(() => {
    if (props.configs && props.configs.length > 0) {
      setConfigs([...props.configs]);
    } else {
      setConfigs([]);
    }
  }, [props.configs]);

  React.useEffect(() => {
    setConfig(props.config);
  }, [props.config]);

  const configToComponent = (config, key) => {
    if (!config || !config.tag) {
      log.warning("the config is empty or tag name is empty", config);
      return config;
    }
    switch (config.tag) {
      case "block":
        return (<Block config={config} key={key}/>);
      case "bread":
        return (<Bread config={config} key={key}/>);
      case "form":
        return (<Form config={config} key={key}/>);
      case "html":
        return (<Html config={config} key={key}/>);
      case "group":
        return (<Group config={config} key={key}/>);
      case "iframe":
        return (<IFrame config={config} key={key}/>);
      case "pager":
        return (<Pager config={config} key={key}/>);
      case "panel":
        return (<Panel config={config} key={key}/>);
      case "tab":
        return (<Tab config={config} key={key}/>);
      case "table":
        return (<Table config={config} key={key}/>);
      case "tree":
        return (<Tree config={config} key={key}/>);
      case "button":
        return (<Button config={config} key={key}/>);
      case "checkbox":
        return (<Checkbox config={config} key={key}/>);
      case "date":
        return (<Date config={config} key={key}/>);
      case "img":
        return (<Img config={config} key={key}/>);
      case "input":
        return (<Input config={config} key={key}/>);
      case "link":
        return (<Link config={config} key={key}/>);
      case "radio":
        return (<Radio config={config} key={key}/>);
      case "select":
        return (<Select config={config} key={key}/>);
      case "span":
        return (<Span config={config} key={key}/>);
      case "textarea":
        return (<TextArea config={config} key={key}/>);
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
    const getKey = (config, index) => {
      if (config && config.attr && config.attr.id) {
        return config.attr.id;
      }
      return index;
    };
    return (
      <>
        {
          configs.map((config, index) => (configToComponent(config, getKey(config, index))))
        }
      </>
    );
  };

  const renderItem = () => {
    return configToComponent(config, null);
  };

  return (
    <>
      {renderItems()}
      {renderItem()}
    </>
  );
}
export default Item;
