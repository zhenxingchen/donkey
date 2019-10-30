import * as React from "react";
import { FormContext } from "@shared/context";
import { Id, Layout } from "@util";
import ICheckbox from "@types-component/checkbox";
import IProps from "@types-common/props";
import Constant from "@shared/constant";
import bus from "@shared/bus";
import "./style.less";

function Checkbox(props: IProps<ICheckbox>) {

  const [config] = React.useState(() => {
    const config = props.config;
    return config;
  });
  const [formContext] = React.useContext(FormContext);

  const changeHandler = () => {
    if (
      formContext
      && formContext.data
      && formContext.data[config.attr.name]
      && formContext.data[config.attr.name].indexOf(config.attr.value) > -1
    ) {
      return ;
    }
    bus.emit("dk-form-data-report", {
      formName: formContext.name,
      data: { [config.attr.name]: config.attr.value }
    });
  };

  const render = () => {
    if (!config) {
      return null;
    }
    const checked = formContext
      && formContext.data[config.attr.name]
      && formContext.data[config.attr.name].indexOf(config.attr.value) > -1;
    const disabled = !!config.attr.disabled
      || (formContext && formContext.disabled);
    const checkboxCls = [];
    checkboxCls.push(Constant.icon.checkbox.main);
    checked ? checkboxCls.push(Constant.icon.checkbox.fill) : null;
    checked ? checkboxCls.push(Constant.icon.checkbox.disabled) : null;
    return (
      <>
        <input
          id={ config.attr.id }
          name={ config.attr.name }
          value={ config.attr.value }
          type="checkbox"
          checked={ checked }
          disabled={ disabled}
          onChange={ changeHandler }
        />
        <label htmlFor={ config.attr.id }>
          <i className={ checkboxCls.join(" ") }/>
          { config.attr.text }
        </label>
      </>
    );
  };

  return render();

}

export default Checkbox;
