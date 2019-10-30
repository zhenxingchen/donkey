import * as React from "react";
import { Label, Layout } from "@util";
import IProps from "@types-common/props";
import ISlide from "@types-component/slide";

import "./style.less";

function Slide(props: IProps<ISlide>) {

  const [config] = React.useState(() => {
    const config = props.config;
    return config;
  });

  const render = () => {
    if (!config) {
      return null;
    }
    return (<>Slide</>);
  };

  return render();

}

export default Slide;
