import * as React from "react";
import { FormContext, GlobalContext, GroupContext } from "@shared/context";
import { Layout } from "@util";
import { CLS } from "@shared/constant";
import IProps from "@types-common/props";
import IButton from "@types-component/button";
import Item from "@components/item";
import "./style.less";

function Button(props: IProps<IButton>) {

  const [config] = React.useState(() => {
    const config = props.config;
    !config.color ? config.color = "blue" : "";
    !config.type ? config.type = "button" : "";
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
    componentCls.push(CLS.btn.main);
    componentCls.push(CLS.btn[config.color]);
    componentCls.push(Layout.componentClassName(config));
    return (
      <button
        type={ config.type }
        disabled={ !!config.disabled }
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
