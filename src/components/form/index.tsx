import * as React from "react";
import log from "../../shared/log";
import bus from "../../shared/bus";
import { FormContext } from "../../shared/context";
import IProps from "../../types/props";
import IForm from "../../types/form";
import Block from "../block";
import Items from "../items";
import util from "../../shared/util";
import "./style.less";

function Form(props: IProps<IForm>) {

  const [config, setConfig] = React.useState(() => {
    const config = props.config;
    if (!config.attr) {
      config.attr = {};
    }
    return config;
  });
  const [formData, setFormData] = React.useState({});

  React.useEffect(() => {

  }, [ props.config ]);

  React.useEffect(() => {
    eventListener();
  }, []);

  const eventListener = () => {
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

  };

  const renderBlock = () => {
    if (!config.block) {
      return null;
    }
    return (<Block config={ config.block }/>);
  };

  const renderItems = () => {
    if (!config.items
      || !(config.items instanceof Array)
      || config.items.length < 1) {
      return null;
    }
    return (
      <div className="dk-form-items">
        <Items configs={ config.items }/>
      </div>
    );
  };

  const render = () => {
    if (!config) {
      return null;
    }
    return (
      <div className={`dk-form ${util.getCols(config.cols)}`} style={ {...config.attr.style} }>
        <form
          name={ config.attr.name }
          action={ config.attr.action }
          method={ config.attr.method }
          onSubmit={ handleFormSubmit.bind(this) }
        >
          <FormContext.Provider
            value={[{
              name: config.attr.name,
              data: formData,
              disabled: config.attr.disabled
            }]}>
            { renderItems() }
            { renderBlock() }
          </FormContext.Provider>
        </form>
      </div>
    );
  };

  return render();
}

export default Form;
