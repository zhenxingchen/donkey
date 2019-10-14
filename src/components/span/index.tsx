import * as React from "react";
import ISpan from "../../types/components/span";
import IProps from "../../types/common/props";
import { Label, Layout } from "../../utils";
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
            { config.text }
          </span>
        </div>
      </div>
    );
  };

  return render();
}

export default Span;
