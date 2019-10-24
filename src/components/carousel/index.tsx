import * as React from "react";
import { Label, Layout } from "@util";
import IProps from "@types-common/props";
import ICarousel from "@types-component/carousel";

import "./style.less";

function Carousel(props: IProps<ICarousel>) {

  const [config] = React.useState(() => {
    const config = props.config;
    !config.attr ? config.attr = {} : "";
    return config;
  });

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
          Carousel
        </div>
      </div>
    );
  };

  return render();

}

export default Carousel;