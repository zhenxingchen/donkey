import * as React from "react";
import { Label, Layout } from "@util";
import IProps from "@types-common/props";
import ICarousel from "@types-component/carousel";

import "./style.less";

function Carousel(props: IProps<ICarousel>) {

  const [config] = React.useState(() => {
    const config = props.config;
    return config;
  });

  const render = () => {
    if (!config) {
      return null;
    }
    return (<>Carousel</>);
  };

  return render();

}

export default Carousel;