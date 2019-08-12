import * as React from "react";
import ISpan from "../../types/span";
import IProps from "../../types/props";
import util from "../../shared/util";
import "./style.less";

function Span(props: IProps<ISpan>) {

  const [config, setConfig] = React.useState(() => {
    const config = props.config;
    if (!config.attr) {
      config.attr = {};
    }
    return config;
  });

  React.useEffect(() => {
  }, [ props.config ]);

  const render = () => {
    if (!config) {
      return null;
    }
    return (
      <div className={`dk-span ${util.getCols(config.cols)}`}>
        { config.text }
      </div>
    );
  };

  return render();
}

export default Span;
