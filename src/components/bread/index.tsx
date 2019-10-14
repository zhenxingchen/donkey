import * as React from "react";
import IProps from "../../types/common/props";
import IBread from "../../types/components/bread";
import Item from "../item";
import { Layout } from "../../utils";
import "./style.less";

function Bread(props: IProps<IBread>) {

  const [config] = React.useState(() => {
    const config = props.config;
    !config.attr ? config.attr = {} : "";
    !config.attr.split ? config.attr.split = ">" : "";
    return config;
  });

  const renderSplit = (index: number) => {
    if (index === config.items.length - 1) {
      return null;
    }
    return (
      <span className={"dk-bread-split"}>
        { config.attr.split }
      </span>
    );
  };

  const renderItems = () => {
    if (!config.items
      || !(config.items instanceof Array)
      || config.items.length < 1) {
      return null;
    }
    return (
      <>
        {
          config.items.map((item, index) => (
            <>
              <Item config={ item }/>
              { renderSplit(index) }
            </>
          ))
        }
      </>
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
          { renderItems() }
        </div>
      </div>
    );
  };

  return render();
}

export default Bread;
