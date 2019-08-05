import * as React from "react";

import log from "../../shared/log";
import bus from "../../shared/bus";
import { FormContext } from "../../shared/context";

import IConfig from "../../types/config";
import IForm from "../../types/form";

import Item from "../item";

import "./style.less";

function Form(props: IConfig<IForm>) {

  const [config, setConfig] = React.useState<IForm>(null);
  const [formData, setFormData] = React.useState({});

  React.useEffect(() => {
    setConfig(props.config);
    if (props.config.data) {
      const formData = {};
      for (const i in props.config.data) {
        formData[i] = props.config.data[i];
      }
      setFormData({...formData});
    }
  }, [ props.config ]);

  React.useEffect(() => {
    eventListener();
  }, []);

  const eventListener = () => {
    bus.on("dk-form-data-report", (result) => {
      if (!result || !result.formName || result.formName !== props.config.attr.name || !result.data) {
        return ;
      }
      log.debug("form-data-report", result);
      const data = result.data;
      for (const key in data) {
        data.hasOwnProperty(key) ? formData[key] = data[key]: null;
      }
      setFormData({ ...formData });
      log.debug("form data", formData);
    });
  };

  const handleFormSubmit = (e) => {

  };

  const renderItems = () => {
    if (config.items
      && config.items instanceof Array
      && config.items.length > 0) {
      return (
        <div className="dk-form-items dk-rows">
          { config.items.map((item, index) => (<Item key={ index } config={ item }/>)) }
        </div>
      );
    }
  };

  const render = () => {
    if (!config) {
      return null;
    }
    return (
      <div className="dk-form">
        <form
          name={ config.attr.name }
          action={ config.attr.action }
          onSubmit={ handleFormSubmit.bind(this) }
        >
          <FormContext.Provider
            value={[{
              name: config.attr.name,
              data: formData,
              disabled: config.attr.disabled
            }]}>
            { renderItems() }
          </FormContext.Provider>
        </form>
      </div>
    );
  };

  return render();
}

export default Form;
