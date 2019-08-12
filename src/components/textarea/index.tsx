import * as React from "react";
import { FormContext } from "../../shared/context";
import IProps from "../../types/props";
import ITextArea from "../../types/textarea";
import util from "../../shared/util";
import "./style.less";

function TextArea(props: IProps<ITextArea>) {

  const [config, setConfig] = React.useState(() => {
    const config = props.config;
    if (!config.attr) {
      config.attr = {};
    }
    return config;
  });
  const [formContext] = React.useContext(FormContext);

  React.useEffect(() => {
    const config = props.config;
    if (!config.attr) {
      config.attr = {};
    }
    setConfig(config);
  }, [ props.config ]);

  const renderLabel = () => {
    if (!config.label) {
      return null;
    }
    return (
      <label className="label-for required" htmlFor={ config.attr.id }>{ config.label }</label>
    );
  };

  const renderTextArea = () => {
    return (
      <textarea
        id={ config.attr.id }
        name={ config.attr.name }
        cols={ config.attr.cols }
        rows={ config.attr.rows }
        className={ `${config.attr.className} dk-form-control dk-transition-border` }
      ></textarea>
    );
  };

  const render = () => {
    if (!config) {
      return null;
    }
    return (
      <div className={`dk-textarea ${util.getCols(config.cols)}`}>
        { renderLabel() }
        { renderTextArea() }
      </div>
    );
  };

  return render();
}

export default TextArea;