import * as React from "react";
import { GroupContext } from "../../shared/context";
import IConfig from "../../types/config";
import IGroup from "../../types/group";

import Link from "../link";
import Button from "../button";
import Checkbox from "../checkbox";
import Input from "../input";
import Radio from "../radio";
import Select from "../select";
import Selects from "../selects";
import Span from "../span";

import "./style.less";

function Group(props: IConfig<IGroup>) {

  const [config, setConfig] = React.useState(null);
  const [permissionCodes, setPermissionCodes] = React.useState(null);

  React.useEffect(() => {
    setDefault();
    loadAjax();
  }, [ props.config ]);

  const setDefault = () => {
    const config = props.config;
    if (!config.attr) {
      config.attr = {};
    }
    setConfig(config);
  };

  const loadAjax = () => {
    if (!config) {
      return ;
    }
    if (config.permissionAjax) {

    }
  };

  const renderItem = (item, index) => {
    if (!item) {
      return null;
    }
    switch (item.tag) {
      case "link": return (<Link config={item} key={index}/>);
      case "button": return (<Button config={item} key={index}/>);
      case "checkbox": return (<Checkbox config={item} key={index}/>);
      case "input": return (<Input config={item} key={index}/>);
      case "radio": return (<Radio config={item} key={index}/>);
      case "select": return (<Select config={item} key={index}/>);
      case "selects": return (<Selects config={item} key={index}/>);
      case "span": return (<Span config={item} key={index}/>);
    }
  };

  const render = () => {
    if (!config) {
      return null;
    }
    return (
      <div className="dk-group">
        <GroupContext.Provider value={[ permissionCodes ]}>
          { config.items.map((item, index) => renderItem(item, index)) }
        </GroupContext.Provider>
      </div>
    );
  };

  return render();
}

export default Group;
