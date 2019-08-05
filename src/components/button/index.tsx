import * as React from "react";
import { FormContext } from "../../shared/context";
import IConfig from "../../types/config";
import IButton from "../../types/button";

import "./style.less";

function Button(props: IConfig<IButton>) {

  const [config, setConfig] = React.useState(null);
  const [formContext] = React.useContext(FormContext);

  React.useEffect(() => {
    const config = props.config;
    if (!config.attr) {
      config.attr = {};
    }
    setConfig(config);
  }, [ props.config ]);

  const handleClick = (e) => {
    e.preventDefault();
    config.form = { ...formContext };
    if (config.onClick && typeof config.onClick === "function") {
      return config.onClick(e.target) ? true : false;
    }
    return false;
  };

  const render = () => {
    if (!config) {
      return null;
    }
    return (
      <div className="dk-button">
        <button
          type={ config.attr.type }
          style={ {...config.attr.style} }
          className={ `${config.attr.className} dk-transition-shadow` }
          onClick={ handleClick.bind(this) }
        >
          { config.text }
        </button>
      </div>
    );
  };

  return render();
}

export default Button;
