import * as React from "react";
import { GroupContext } from "@shared/context";
import { PREFIX } from "@shared/constant";
import IProps from "@types-common/props";
import IGroup from "@types-component/group";
import Item from "@components/item";

import "./style.less";

function Group(props: IProps<IGroup>) {

  const [config] = React.useState(() => {
    const config = props.config;
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
      <Item
        configs={ config.items }
        className={`${PREFIX}-group-item`}
      />
    );
  };

  const render = () => {
    if (!config) {
      return null;
    }
    return (
      <GroupContext.Provider value={[ permissionCodes ]}>
        { renderItems() }
      </GroupContext.Provider>
    );
  };

  return render();
}

export default Group;
