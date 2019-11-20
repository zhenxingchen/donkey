import * as React from "react";
import { FormContext } from "@shared/context";
import { formUpdateSubject } from "@shared/subject";
import IProps from "@types-common/props";
import IForm from "@types-component/form";
import Item from "@components/item";
import log from "@shared/log";
import "./style.less";

function Form(props: IProps<IForm>) {

  const [config] = React.useState(() => {
    const config = props.config;
    return config;
  });
  const [formData, setFormData] = React.useState({});

  React.useEffect(() => {
    eventListener();
    formUpdateSubject.subscribe({
      next: (params) => console.log("form receive subscribe", params)
    });
  }, []);

  const eventListener = () => {

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
    console.log("==============>>>>>> form render");
    return (
      <FormContext.Provider
        value={[{
          name: config.name,
          data: {},
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
