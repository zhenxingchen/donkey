import * as React from "react";
import IProps from "../../types/props";
import IBread from "../../types/bread";
import Link from "../link";
import Span from "../span";
import util from "../../shared/util";
import "./style.less";

function Bread(props: IProps<IBread>) {

  const [config, setConfig] = React.useState(() => {
    const config = props.config;
    if (!config.attr) {
      config.attr = {};
    }
    return config;
  });

  React.useEffect(() => {
  }, [ props.config ]);

  const renderItems = () => {
    if (!config.items || !(config.items instanceof Array) || config.items.length < 1) {
      return null;
    }
    return (
      <>
        {
          config.items.map((item, index) => {
            switch(item.tag) {
              case "link": {
                return (
                  <div key={index} className="item arrow">
                    <Link config={item}/>
                  </div>
                );
              }; break;
              case "span": {
                return (
                  <div key={index} className="item arrow">
                    <Span config={item}/>
                  </div>
                );
              }; break;
            }
          })
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
        className={ `dk-bread ${util.getCols(config.cols)} ${config.attr.className}` }
        style={ config.attr.style }>
        {
          renderItems()
        }
      </div>
    );
  };

  return render();
}

export default Bread;
