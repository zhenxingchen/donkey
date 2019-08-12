import * as React from "react";
import IProps from "../../types/props";
import IItems from "../../types/items";

import Block from "../block";
import Bread from "../bread";
import Form from "../form";
import Group from "../group";
import Pager from "../pager";
import Panel from "../panel";
import Tab from "../tab";
import Table from "../table";
import Tree from "../tree";

import Button from "../button";
import Checkbox from "../checkbox";
import Input from "../input";
import Link from "../link";
import Radio from "../radio";
import Select from "../select";
import Span from "../span";
import TextArea from "../textarea";

function Items(props: IProps<IItems>) {

  const [configs, setConfigs] = React.useState(props.configs);

  const render = () => {
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
          configs.map((config, index) => {
            if (!config || !config.tag) {
              return null;
            }
            switch (config.tag) {
              case "block": return (<Block config={config} key={getKey(config, index)}/>);
              case "bread": return (<Bread config={config} key={getKey(config, index)}/>);
              case "form": return (<Form config={config} key={getKey(config, index)}/>);
              case "group": return (<Group config={config} key={getKey(config, index)}/>);
              case "pager": return (<Pager config={config} key={getKey(config, index)}/>);
              case "panel": return (<Panel config={config} key={getKey(config, index)}/>);
              case "tab": return (<Tab config={config} key={getKey(config, index)}/>);
              case "table": return (<Table config={config} key={getKey(config, index)}/>);
              case "tree": return (<Tree config={config} key={getKey(config, index)}/>);
              case "button": return (<Button config={config} key={getKey(config, index)}/>);
              case "checkbox": return (<Checkbox config={config} key={getKey(config, index)}/>);
              case "input": return (<Input config={config} key={getKey(config, index)}/>);
              case "link": return (<Link config={config} key={getKey(config, index)}/>);
              case "radio": return (<Radio config={config} key={getKey(config, index)}/>);
              case "select": return (<Select config={config} key={getKey(config, index)}/>);
              case "span": return (<Span config={config} key={getKey(config, index)}/>);
              case "textarea": return (<TextArea config={config} key={getKey(config, index)}/>);
              default : return null;
            }
          })
        }
      </>
    );
  };

  return render();
}

export default Items;
