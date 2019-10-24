import * as React from "react";
import { FormContext } from "@shared/context";
import { Layout } from "@util";
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
    !config.attr ? config.attr = {} : "";
    return config;
  });
  const [formData, setFormData] = React.useState({});

  React.useEffect(() => {
    eventListener();
  }, []);

  const eventListener = () => {

    updateSubject.subscribe({
      next: (params) => console.log("form receive subscribe", params)
    });

    bus.on("dk-form-data-report", (result) => {
      if (!result
        || !result.formName
        || result.formName !== props.config.attr.name
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
      <div
        className={Layout.rootClassName(config)}
        style={Layout.rootStyle(config)}
      >
        <FormContext.Provider
          value={[{
            name: config.attr.name,
            data: formData,
            disabled: config.attr.disabled
          }]}>
          <div
            className={Layout.containerClassName(config)}
            style={Layout.containerStyle(config)}
          >
            <form
              name={ config.attr.name }
              action={ config.attr.action }
              method={ config.attr.method }
              onSubmit={ handleFormSubmit.bind(this) }
            >
              { renderItems() }
            </form>
          </div>
        </FormContext.Provider>
      </div>
    );
  };

  return render();
}

export default Form;
