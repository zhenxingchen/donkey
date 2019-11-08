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
    !config.selected
      ? config.selected = config.items[0].id
      : "";
    return config;
  });
  const [formContext] = React.useContext(FormContext);

  const getNavClassName = (tab) => {
    const cls = [];
    tab.id === config.selected ? cls.push("curr") : "";
    tab.disabled ? cls.push("disabled") : "";
    return cls.join(" ");
  };

  const navClickHandler = (tab) => {
    if (
      config.selected === tab.id
      || tab.disabled
    ) {
      return false;
    }
    config.selected = tab.id;
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
                { tab.text }
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
      <>
        { renderTabNav() }
        { renderTabContent() }
      </>
    );
  }

  return render();
}

export default Tabs;
