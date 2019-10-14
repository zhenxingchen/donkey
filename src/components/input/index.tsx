import * as React from "react";
import { FormContext, TableContext } from "../../shared/context";
import bus from "../../shared/bus";
import { Label, Layout } from "../../utils";
import IProps from "../../types/common/props";
import IInput from "../../types/components/input";
import "./style.less";

function Input(props: IProps<IInput>) {

  const [config, setConfig] = React.useState(() => {
    const config = props.config;
    !config.attr ? config.attr = {} : "";
    return config;
  });
  const [formContext] = React.useContext(FormContext);
  const [tableContext] = React.useContext(TableContext);

  React.useEffect(() => {
    eventListener();
  }, []);

  const eventListener = () => {

  };

  const eventHandler = (event: "onBlur" | "onChange" | "onFocus", e) => {
    config.form = { ...formContext };
    // setConfig({...config});
    const target = e.target;
    let result = undefined;
    let value = null;
    if (config[event] && typeof config[event] === "function") {
      result = config[event](target);
    }
    if (false === result) {
      return ;
    } else if (true === result || undefined === result) {
      value = target.value;
    } else if (typeof result === "string") {
      value = result;
    }
    config.attr.value = value;
    setConfig({ ...config });
    bus.emit("dk-form-data-report", {
      formName: formContext.name,
      data: { [config.attr.name]: config.attr.value }
    });
  };

  const renderInput = () => {
    return (
      <input
        id={ config.attr.id }
        name={ config.attr.name }
        type={ config.attr.type ? config.attr.type : "text" }
        value={ config.attr.value }
        disabled={ !!config.attr.disabled }
        readOnly={ !!config.attr.readonly }
        maxLength={ config.attr.maxLength }
        autoComplete={ config.attr.autoComplete ? config.attr.autoComplete : "off" }
        className={ `dk-form-control dk-transition-border ${Layout.componentClassName(config)}` }
        style={ Layout.componentStyle(config) }
        onBlur={ eventHandler.bind(this, "onBlur") }
        onChange={ eventHandler.bind(this, "onChange") }
        onFocus={ eventHandler.bind(this, "onFocus") }
      />
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
          { renderInput() }
        </div>
      </div>
    );
  };

  return render();

}

export default Input;
