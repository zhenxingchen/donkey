import * as React from "react";
import IProps from "@types-common/props";
import IDate from "@types-component/date";
import "./style.less";

function Date(props: IProps<IDate>) {

  const [config] = React.useState(() => {
    const config = props.config;
    return config;
  });

  const render = () => {
    if (!config) {
      return null;
    }
    return (<>Date</>);
  };

  return render();

}

export default Date;