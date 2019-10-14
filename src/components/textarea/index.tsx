import * as React from "react";
import { FormContext } from "../../shared/context";
import IProps from "../../types/common/props";
import ITextArea from "../../types/components/textarea";
import { Label, Layout } from "../../utils";
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
        className={`dk-form-control dk-transition-border ${Layout.componentClassName(config)}`}
        style={Layout.componentStyle(config)}
      />
    );
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
        { Label(config) }
        <div
          className={Layout.containerClassName(config)}
          style={Layout.containerStyle(config)}
        >
          { renderTextArea() }
        </div>
      </div>
    );
  };

  return render();
}

export default TextArea;
