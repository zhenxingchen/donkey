import * as React from "react";
import { FormContext} from "@shared/context";
import { Key, Layout } from "@util";
import IProps from "@types-common/props";
import ITabs from "@types-component/tabs";
import Tab from "@components/tab";

import "./style.less";

/**
 * 页签合集
 * @param {IProps<ITabs>} props
 * @returns {null | any}
 * @constructor
 */
function Tabs(props: IProps<ITabs>) {

  const [config, setConfig] = React.useState(() => {
    const config = props.config;
    !config.attr ? config.attr = {} : "";
    !config.attr.selected
      ? config.attr.selected = config.items[0].attr.id
      : "";
    return config;
  });
  const [formContext] = React.useContext(FormContext);

  const getNavClassName = (tab) => {
    const cls = [];
    tab.attr.id === config.attr.selected ? cls.push("curr") : "";
    tab.attr.disabled ? cls.push("disabled") : "";
    return cls.join(" ");
  };

  const navClickHandler = (tab) => {
    if (
      config.attr.selected === tab.attr.id
      || tab.attr.disabled
    ) {
      return false;
    }
    config.attr.selected = tab.attr.id;
    setConfig({ ...config });
  };

  const renderTabNav = () => {
    if (!config || !config.items || config.items.length < 1) {
      return null;
    }
    return (
      <div className="dk-tabs-nav">
        <ul>
          {
            config.items.map((tab, index) =>
              <li
                key={Key(tab, index)}
                className={ getNavClassName(tab) }
                onClick={ navClickHandler.bind(this, tab) }
              >
                { tab.attr.text }
              </li>
            )
          }
        </ul>
      </div>
    );
  };

  const renderTabContent = () => {
    return (
      <div className="dk-tabs-contain">
        <ul>
          {
            config.items.map((tab, index) =>
              <li
                key={Key(tab, index)}
                className={ getNavClassName(tab) }
              >
                <Tab config={ tab }/>
              </li>
            )
          }
        </ul>
      </div>
    );
  };

  const render = () => {
    if (!config) {
      return null;
    }
    return (
      <div
        className={Layout.rootClassName(config)}
        style={Layout.rootStyle(config)}
      >
        <div
          className={Layout.containerClassName(config)}
          style={Layout.containerStyle(config)}
        >
          { renderTabNav() }
          { renderTabContent() }
        </div>
      </div>
    );
  }

  return render();
}

export default Tabs;
