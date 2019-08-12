import * as React from "react";
import IProps from "../../types/props";
import ILink from "../../types/link";
import util from "../../shared/util";
import "./style.less";

function Link(props: IProps<ILink>) {

  const [config, setConfig] = React.useState(() => {
    const config = props.config;
    if (!config.attr) {
      config.attr = {};
    }
    return config;
  });

  React.useEffect(() => {
    const config = props.config;
    if (!config.attr) {
      config.attr = {};
    }
    setConfig(config);
  }, [ props.config ]);

  const handleClick = (e) => {
    if (config.onClick && typeof config.onClick === "function") {
      e.preventDefault();
      return config.onClick(e) ? true : false;
    }
  };

  const renderLabel = () => {
    if (!config.label) {
      return null;
    }
    return (
      <label className="label-for required" htmlFor={ config.attr.id }>{ config.label }</label>
    );
  };

  const renderLink = () => {
    return (
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
    );
  }

  const render = () => {
    if (!config) {
      return null;
    }
    return (
      <div className={`dk-link ${util.getCols(config.cols)}`}>
        { renderLabel() }
        { renderLink() }
      </div>
    );
  };

  return render();

}

export default Link;
