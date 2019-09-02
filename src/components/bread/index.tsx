import * as React from "react";
import IProps from "../../types/common/props";
import IBread from "../../types/components/bread";
import Item from "../item";
import util from "../../shared/util";
import "./style.less";

function Bread(props: IProps<IBread>) {

  const [config] = React.useState(() => {
    const config = props.config;
    !config.attr ? config.attr = {} : "";
    !config.attr.split ? config.attr.split = "arrow" : "";
    return config;
  });

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
            <div className={ `dk-bread-item ${config.attr.split}` } key={index}>
              <Item config={ item }/>
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
    return (
      <div className={ `dk-bread ${util.getClassName(config.cols)}` }>
        <div
          className={ `dk-bread-container ${util.getClassName(config.attr.className)}` }
          style={ config.attr.style }>
          { renderItems() }
        </div>
      </div>
    );
  };

  return render();
}

export default Bread;
