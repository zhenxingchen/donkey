import * as React from "react";
import { Label, Layout } from "@util";
import ISpan from "@types-component/span";
import IProps from "@types-common/props";
import Item from "@components/item";
import "./style.less";

function Span(props: IProps<ISpan>) {

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
          <span
            className={`${Layout.componentClassName(config)}`}
            style={Layout.componentStyle(config)}
          >
            { config.items ? <Item configs={config.items}/> : config.text }
          </span>
        </div>
      </div>
    );
  };

  return render();
}

export default Span;
