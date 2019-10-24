import * as React from "react";
import IProps from "@types-common/props";
import IDate from "@types-component/date";
import "./style.less";

function Date(props: IProps<IDate>) {

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
      <div className="dk-date">

      </div>
    );
  };

  return render();

}

export default Date;