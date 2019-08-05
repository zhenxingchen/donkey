import * as React from "react";
import { FormContext } from "../../shared/context";
import IConfig from "../../types/config";
import ITextArea from "../../types/textarea";

import "./style.less";

function TextArea(props: IConfig<ITextArea>) {

  const [config, setConfig] = React.useState(null);
  const [formContext] = React.useContext(FormContext);

  React.useEffect(() => {
    const config = props.config;
    if (!config.attr) {
      config.attr = {};
    }
    setConfig(config);
  }, [ props.config ]);

  const render = () => {
    if (!config) {
      return null;
    }
    return (
      <div className="dk-textarea">
        <textarea
          id={ config.attr.id }
          name={ config.attr.name }
          cols={ config.attr.cols }
          rows={ config.attr.rows }
          className={ `${config.attr.className} dk-form-control dk-transition-border` }
        ></textarea>
      </div>
    );
  };

  return render();
}

export default TextArea;
