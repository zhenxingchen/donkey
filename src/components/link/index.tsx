import * as React from "react";
import IProps from "../../types/common/props";
import ILink from "../../types/components/link";
import util from "../../shared/util";
import "./style.less";

function Link(props: IProps<ILink>) {

  const [config] = React.useState(() => {
    const config = props.config;
    !config.attr ? config.attr = {} : "";
    return config;
  });

  const handleClick = (e) => {
    if (config.onClick && typeof config.onClick === "function") {
      e.preventDefault();
      return config.onClick(e) ? true : false;
    }
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
      <div className={`dk-link ${util.getClassName(config.cols)}`}>
        { util.getLabel(config) }
        { renderLink() }
      </div>
    );
  };

  return render();

}

export default Link;
