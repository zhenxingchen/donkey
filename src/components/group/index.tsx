import * as React from "react";
import { GroupContext } from "../../shared/context";
import IProps from "../../types/common/props";
import IGroup from "../../types/components/group";
import Item from "../item";
import util from "../../shared/util";

import "./style.less";

function Group(props: IProps<IGroup>) {

  const [config] = React.useState(() => {
    const config = props.config;
    !config.attr ? config.attr = {} : "";
    return config;
  });
  const [permissionCodes, setPermissionCodes] = React.useState(null);

  const loadAjax = () => {
    if (!config) {
      return ;
    }
    if (config.permissionAjax) {

    }
  };

  const renderItems = () => {
    if (!config.items
      || !(config.items instanceof Array)
      || config.items.length < 1) {
      return null;
    }
    return (
      <div className="dk-group-items">
        <Item configs={ config.items }/>
      </div>
    );
  };

  const render = () => {
    if (!config) {
      return null;
    }
    return (
      <div className={ `dk-group ${util.getClassName(config.cols)}` }>
        <div
          className={ `dk-group-container ${util.getClassName(config.attr.className)}` }
          style={ {...config.attr.style} }>
          <GroupContext.Provider value={[ permissionCodes ]}>
            { util.getLabel(config) }
            { renderItems() }
          </GroupContext.Provider>
        </div>
      </div>
    );
  };

  return render();
}

export default Group;
