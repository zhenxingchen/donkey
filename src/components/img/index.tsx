import * as React from "react";
import IImg from "@types-component/img";
import IProps from "@types-common/props";

import "./style.less";

function Img(props: IProps<IImg>) {

  const [config] = React.useState(() => {
    const config = props.config;
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
    return renderImg();
  };

  return render();
}

export default Img;
