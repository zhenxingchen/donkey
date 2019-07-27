
import * as React from "react";

import log from "../../shared/log";
import IConfig from "../../types/config";
import IForm from "../../types/form";
import Input from "../input";

function Form(props: IConfig) {

  const [config] = React.useState<IForm>(props.config);
  const [formData, setFormData] = React.useState({});

  React.useEffect(() => {
    log.debug("form", config, "formName", config.attr.name);
  });

  const renderItems = () => {
    if (config.items
      && config.items instanceof Array
      && config.items.length > 0) {
      return (
        <div className="dk-form-items">
          { config.items.map((item, index) => {
            if (item.tag === "input") {
              return (<Input key={index} config={ item } async={ (params) => console.log(params)}/>);
            }
          }) }
        </div>
      );
    }
  };

  return (
    <form
      name={ config.attr.name }
      action={ config.attr.action }
    >
      { renderItems() }
    </form>
  );
}

export default Form;
