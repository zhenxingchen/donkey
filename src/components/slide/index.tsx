import * as React from "react";
import { Label, Layout } from "@util";
import IProps from "@types-common/props";
import ISlide from "@types-component/slide";

import "./style.less";

function Slide(props: IProps<ISlide>) {

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
          Slide
        </div>
      </div>
    );
  };

  return render();

}

export default Slide;