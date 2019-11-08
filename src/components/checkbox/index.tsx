import * as React from "react";
import { FormContext } from "@shared/context";
import { Id, Layout } from "@util";
import ICheckbox from "@types-component/checkbox";
import IProps from "@types-common/props";
import { CLS } from "@shared/constant";
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
      && formContext.data[config.name]
      && formContext.data[config.name].indexOf(config.value) > -1
    ) {
      return ;
    }
    bus.emit("dk-form-data-report", {
      formName: formContext.name,
      data: { [config.name]: config.value }
    });
  };

  const render = () => {
    if (!config) {
      return null;
    }
    const checked = formContext
      && formContext.data[config.name]
      && formContext.data[config.name].indexOf(config.value) > -1;
    const disabled = !!config.disabled
      || (formContext && formContext.disabled);
    const checkboxCls = [];
    checkboxCls.push(CLS.icon.checkbox.main);
    checked ? checkboxCls.push(CLS.icon.checkbox.fill) : null;
    disabled ? checkboxCls.push(CLS.icon.checkbox.disabled) : null;
    return (
      <>
        <input
          id={ config.id }
          name={ config.name }
          value={ config.value }
          type="checkbox"
          checked={ checked }
          disabled={ disabled}
          onChange={ changeHandler }
        />
        <label htmlFor={ config.id }>
          <i className={ checkboxCls.join(" ") }/>
          { config.text }
        </label>
      </>
    );
  };

  return render();

}

export default Checkbox;
