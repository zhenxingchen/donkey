import * as React from "react";
import { GroupContext } from "../../shared/context";
import IProps from "../../types/props";
import IGroup from "../../types/group";
import Items from "../items";
import util from "../../shared/util";

import "./style.less";

function Group(props: IProps<IGroup>) {

  const [config, setConfig] = React.useState(() => {
    const config = props.config;
    if (!config.attr) {
      config.attr = {};
    }
    return config;
  });
  const [permissionCodes, setPermissionCodes] = React.useState(null);

  React.useEffect(() => {
  }, [ props.config ]);

  const loadAjax = () => {
    if (!config) {
      return ;
    }
    if (config.permissionAjax) {

    }
  };

  const renderLabel = () => {
    if (!config.label) {
      return null;
    }
    return (
      <label className="label-for required" htmlFor={ config.attr.id }>{ config.label }</label>
    );
  };

  const renderItems = () => {
    if (!config.items
      || !(config.items instanceof Array)
      || config.items.length < 1) {
      return null;
    }
    return (
      <div className="dk-group-items">
        <Items configs={ config.items }/>
      </div>
    );
  };

  const render = () => {
    if (!config) {
      return null;
    }
    return (
      <div className={ `dk-group ${util.getCols(config.cols)}` } style={ {...config.attr.style} }>
        <GroupContext.Provider value={[ permissionCodes ]}>
          { renderLabel() }
          { renderItems() }
        </GroupContext.Provider>
      </div>
    );
  };

  return render();
}

export default Group;
