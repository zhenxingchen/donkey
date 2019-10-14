import * as React from "react";

import IImg from "../../types/components/img";
import IProps from "../../types/common/props";
import { Label, Layout } from "../../utils";

import "./style.less";

function Img(props: IProps<IImg>) {

  const [config] = React.useState(() => {
    const config = props.config;
    !config.attr ? config.attr = {} : "";
    return config;
  });

  const renderImg = () => {
    return (
      <img
        width={ config.attr.width }
        height={ config.attr.height }
        src={ config.attr.src }
        alt={ config.attr.alt }
      />
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
        { Label(config) }
        <div
          className={Layout.containerClassName(config)}
          style={Layout.containerStyle(config)}
        >
          { renderImg() }
        </div>
      </div>
    );
  };

  return render();
}

export default Img;
