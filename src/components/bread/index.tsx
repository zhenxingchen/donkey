import * as React from "react";
import { Key } from "@util";
import IProps from "@types-common/props";
import IBread from "@types-component/bread";
import Item from "@components/item";
import "./style.less";

function Bread(props: IProps<IBread>) {

  const [config] = React.useState(() => {
    const config = props.config;
    return config;
  });

  const renderSplit = (index: number) => {
    if (index === config.items.length - 1) {
      return null;
    }
    return (
      <span className={"dk-bread-split"}>
        { config.split }
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
            <div
              className={"dk-bread-item"}
              key={Key(item, index)}
            >
              <Item config={ item }/>
              { item.tag !== 'icon' ? renderSplit(index) : null }
            </div>
          ))
        }
      </>
    );
  };

  const render = () => {
    if (!config) {
      return null;
    }
    return renderItems();
  };

  return render();
}

export default Bread;
