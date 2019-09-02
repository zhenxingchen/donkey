import * as React from "react";
import ISpan from "../../types/components/span";
import IProps from "../../types/common/props";
import util from "../../shared/util";
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
      <div className={`dk-span ${util.getClassName(config.cols)}`}>
        { config.text }
      </div>
    );
  };

  return render();
}

export default Span;
