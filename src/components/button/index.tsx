import * as React from "react";
import { FormContext, GlobalContext, GroupContext } from "@shared/context";
import { Label, Layout } from "@util";
import IProps from "@types-common/props";
import IButton from "@types-component/button";
import Item from "@components/item";
import "./style.less";

function Button(props: IProps<IButton>) {

  const [config] = React.useState(() => {
    const config = props.config;
    !config.attr ? config.attr = {} : "";
    !config.attr.color ? config.attr.color = "blue" : "";
    !config.attr.type ? config.attr.type = "button" : "";
    return config;
  });
  const [formContext] = React.useContext(FormContext);
  const [globalContext] = React.useContext(GlobalContext);
  const [groupContext] = React.useContext(GroupContext);

  const handleClick = (e) => {
    if (config.onClick && typeof config.onClick === "function") {
      return config.onClick(e.target) ? true : false;
    }
    return true;
  };

  const renderButton = () => {
    return (
      <button
        type={ config.attr.type }
        disabled={ !!config.attr.disabled }
        className={ `____${config.attr.color} ${Layout.componentClassName(config)}` }
        style={ Layout.componentStyle(config) }
        onClick={ handleClick.bind(this) }
      >
        { config.items ? <Item configs={ config.items }/> : config.text }
      </button>
    );
  };

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
          { renderButton() }
        </div>
      </div>
    );
  };

  return render();
}

export default Button;
