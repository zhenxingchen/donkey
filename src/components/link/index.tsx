import * as React from "react";
import { Layout } from "@util";
import IProps from "@types-common/props";
import ILink from "@types-component/link";
import Item from "@components/item";
import "./style.less";

function Link(props: IProps<ILink>) {

  const [config] = React.useState(() => {
    const config = props.config;
    return config;
  });

  const handleClick = (e) => {
    if (config.onClick && typeof config.onClick === "function") {
      e.preventDefault();
      return config.onClick(e) ? true : false;
    }
  };

  const render = () => {
    if (!config) {
      return null;
    }
    return (
      <a
        id={ config.attr.id }
        href={ config.attr.href }
        target={ config.attr.target }
        className={ Layout.componentClassName(config) }
        style={ Layout.componentStyle(config) }
        onClick={ handleClick.bind(this) }
      >
        {
          config.items
            ? <Item configs={ config.items }/>
            : config.text
        }
      </a>
    );
  };

  return render();

}

export default Link;
