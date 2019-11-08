import * as React from "react";
import { FormContext } from "@shared/context";
import { Layout } from "@util";
import { CLS } from "@shared/constant";
import IProps from "@types-common/props";
import ITextArea from "@types-component/textarea";

import "./style.less";

function TextArea(props: IProps<ITextArea>) {

  const [config] = React.useState(() => {
    const config = props.config;
    return config;
  });
  const [formContext] = React.useContext(FormContext);

  const renderTextArea = () => {
    const componentCls = [];
    componentCls.push(CLS.form.item);
    componentCls.push(CLS.transition.border);
    componentCls.push(Layout.componentClassName(config));
    return (
      <textarea
        id={ config.id }
        name={ config.name }
        className={ componentCls.join(" ") }
        style={ Layout.componentStyle(config) }
      />
    );
  };

  const render = () => {
    if (!config) {
      return null;
    }
    return renderTextArea();
  };

  return render();
}

export default TextArea;
