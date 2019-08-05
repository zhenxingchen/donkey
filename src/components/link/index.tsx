import * as React from "react";
import IConfig from "../../types/config";
import ILink from "../../types/link";

import "./style.less";

function Link(props: IConfig<ILink>) {

  const [config, setConfig] = React.useState(null);

  React.useEffect(() => {
    const config = props.config;
    if (!config.attr) {
      config.attr = {};
    }
    setConfig(config);
  }, [ props.config ]);

  const handleClick = (e) => {
    e.preventDefault();
    if (config.onClick && typeof config.onClick === "function") {
      return config.onClick(e) ? true : false;
    }
    return false;
  };

  const render = () => {
    if (!config) {
      return null;
    }
    return (
      <div className="dk-a-link">
        <a
          id={ config.attr.id }
          href={ config.attr.href }
          target={ config.attr.target }
          style={ {...config.attr.style} }
          className={ config.attr.className }
          onClick={ handleClick.bind(this) }
        >
          { config.text }
        </a>
      </div>
    );
  };

  return render();

}

export default Link;
