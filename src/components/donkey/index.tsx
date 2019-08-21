import * as React from "react";
import IProps from "../../types/common/props";

import Block from "../block";
import Form from "../form";
import Tab from "../tab";

function Donkey(props: IProps<any>) {

  const [config, setConfig] = React.useState(() => {
    const config = props.config;
    if (!config.attr) {
      config.attr = {};
    }
    return config;
  });

  React.useEffect(() => {

  }, [ props.config ]);

  React.useEffect(() => {
    console.log("page load finish...");
  }, []);

  const renderComponent = () => {
    switch (config.tag) {
      case "block": return (<Block config={config}/>);
      case "form": return (<Form config={config}/>);
      case "tab": return (<Tab config={config}/>);
      default: return null;
    }
  };

  const render = () => {
    if (!config || !config.tag) {
      return null;
    }
    return (<>{ renderComponent() }</>);
  };

  return render();

}

export default Donkey;
