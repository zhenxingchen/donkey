import * as React from "react";
import { Label, Layout } from "@util";
import IProps from "@types-common/props";
import ISwitch from "@types-component/switch";
import "./style.less";

function Switch(props: IProps<ISwitch>) {

  const [config] = React.useState(() => {
    const config = props.config;
    return config;
  });
  const [checked, setChecked] = React.useState(false);

  const render = () => {
    if (!config) {
      return null;
    }
    const boxCls = [];
    boxCls.push(Layout.componentClassName(config));
    boxCls.push("dk-switch-box");
    checked ? boxCls.push("____checked") : null;
    return (
      <div
        className={ boxCls.join(" ") }
        style={Layout.componentStyle(config)}
        onClick={ () => setChecked(!checked) }
      >
        <i className="dk-switch-dot"></i>
        <i className="dk-switch-text"></i>
      </div>
    );
  };

  return render();

}

export default Switch;