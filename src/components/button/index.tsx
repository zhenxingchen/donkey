import * as React from "react";
import { FormContext, GlobalContext, GroupContext } from "@shared/context";
import { Label, Layout } from "@util";
import Constant from "@shared/constant";
import IProps from "@types-common/props";
import IButton from "@types-component/button";
import Item from "@components/item";
import "./style.less";

function Button(props: IProps<IButton>) {

  const [config] = React.useState(() => {
    const config = props.config;
    !config.attr.color ? config.attr.color = "blue" : "";
    !config.attr.type ? config.attr.type = "button" : "";
    return config;
  });
  const [formContext] = React.useContext(FormContext);
  const [globalContext] = React.useContext(GlobalContext);
  const [groupContext] = React.useContext(GroupContext);

  const handleClick = (e) => {
    if (
      config.onClick
      && typeof config.onClick === "function"
    ) {
      return config.onClick(e.target) ? true : false;
    }
    return true;
  };

  const renderButton = () => {
    const componentCls = [];
    componentCls.push(Constant.btn.main);
    componentCls.push(`____${config.attr.color}`);
    componentCls.push(Layout.componentClassName(config));
    return (
      <button
        type={ config.attr.type }
        disabled={ !!config.attr.disabled }
        className={ componentCls.join(" ") }
        style={ Layout.componentStyle(config) }
        onClick={ handleClick.bind(this) }
      >
        {
          config.items
            ? <Item configs={ config.items }/>
            : config.text
        }
      </button>
    );
  };

  const render = () => {
    if (!config) {
      return null;
    }
    return renderButton();
  };

  return render();
}

export default Button;
