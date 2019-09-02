import * as React from "react";

import IImg from "../../types/components/img";
import IProps from "../../types/common/props";
import util from "../../shared/util";

import "./style.less";

function Img(props: IProps<IImg>) {

  const [config] = React.useState(() => {
    const config = props.config;
    !config.attr ? config.attr = {} : "";
    return config;
  });

  const renderImg = () => {
    return (
      <img src={ config.attr.src } alt={ config.attr.alt }/>
    );
  };

  const render = () => {
    if (!config) {
      return null;
    }
    return (
      <div className={`dk-img ${util.getClassName(config.cols)}`}>
        <div className="dk-img-container">
          { util.getLabel(config) }
          { renderImg() }
        </div>
      </div>
    );
  };

  return render();
}

export default Img;
