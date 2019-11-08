import * as React from "react";
import { FormContext } from "@shared/context";
import { updateSubject } from "@shared/subject";
import IProps from "@types-common/props";
import IForm from "@types-component/form";
import Item from "@components/item";
import log from "@shared/log";
import bus from "@shared/bus";

import "./style.less";

function Form(props: IProps<IForm>) {

  const [config] = React.useState(() => {
    const config = props.config;
    return config;
  });
  const [formData, setFormData] = React.useState({});

  React.useEffect(() => {
    eventListener();
    updateSubject.subscribe({
      next: (params) => console.log("form receive subscribe", params)
    });
    return () => updateSubject.unsubscribe();
  }, []);

  const eventListener = () => {
    bus.on("dk-form-data-report", (result) => {
      if (!result
        || !result.formName
        || result.formName !== props.config.name
        || !result.data) {
        return ;
      }
      log.debug("form-data-report", result);
      const data = result.data;
      for (const key in data) {
        data.hasOwnProperty(key)
          ? formData[key] = data[key]
          : null;
      }
      setFormData({ ...formData });
      log.debug("form data", formData);
    });
  };

  const handleFormSubmit = (e) => {
    console.log("form submit");
    return true;
  };

  const renderItems = () => {
    if (!config.items
      || !(config.items instanceof Array)
      || config.items.length < 1) {
      return null;
    }
    return (<Item configs={ config.items }/>);
  };

  const render = () => {
    if (!config) {
      return null;
    }
    return (
      <FormContext.Provider
        value={[{
          name: config.name,
          data: formData,
          disabled: config.disabled
        }]}>
        <form
          name={ config.name }
          action={ config.action }
          method={ config.method }
          onSubmit={ handleFormSubmit.bind(this) }
        >
          { renderItems() }
        </form>
      </FormContext.Provider>
    );
  };

  return render();
}

export default Form;
