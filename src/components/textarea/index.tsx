import * as React from "react";
import { FormContext } from "../../shared/context";
import IProps from "../../types/common/props";
import ITextArea from "../../types/components/textarea";
import util from "../../shared/util";
import "./style.less";

function TextArea(props: IProps<ITextArea>) {

  const [config] = React.useState(() => {
    const config = props.config;
    !config.attr ? config.attr = {} : "";
    return config;
  });
  const [formContext] = React.useContext(FormContext);

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
      <div className={`dk-textarea ${util.getClassName(config.cols)}`}>
        { util.getLabel(config) }
        { renderTextArea() }
      </div>
    );
  };

  return render();
}

export default TextArea;
