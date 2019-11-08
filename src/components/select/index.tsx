import * as React from "react";
import { Layout } from "@util";
import { FormContext } from "@shared/context";
import { PREFIX, CLS } from "@shared/constant";
import IProps from "@types-common/props";
import ISelect from "@types-component/select";
import Options from "./options";

import "./style.less";

function Select(props: IProps<ISelect>) {

  const selectRef = React.useRef(null);

  const [config, setConfig] = React.useState(() => {
    const config = props.config;
    config.textField = config.textField || "text" ;
    config.valueField = config.valueField || "value";
    return config;
  });
  const [formContext] = React.useContext(FormContext);
  const [optionsVisible, setOptionsVisible] = React.useState(false);

  React.useEffect(() => {
    const outsideClick = () => setOptionsVisible(false);
    document.addEventListener("click", outsideClick);
    return () => document.removeEventListener("click", outsideClick);
  }, []);

  const render = () => {
    if (!config) {
      return null;
    }
    const componentCls = [];
    componentCls.push(`${PREFIX}-form-control`);
    componentCls.push(`${PREFIX}-transition-border`);
    componentCls.push(Layout.componentClassName(config));
    const arrowCls = [];
    arrowCls.push(CLS.icon.arrowY.main);
    optionsVisible
      ? arrowCls.push(CLS.icon.arrowY.up)
      : arrowCls.push(CLS.icon.arrowY.down);
    return (
      <>
        <div
          ref={ selectRef }
          className={ componentCls.join(" ") }
          style={ Layout.componentStyle(config) }
          onClick={
            (e) => {
              setOptionsVisible(true);
              e.nativeEvent.stopImmediatePropagation();
            }
          }
        >
          <div className={`${PREFIX}-select-input`}/>
          <i className={ arrowCls.join(" ") }/>
        </div>
        {
          optionsVisible
            ? <Options config={ config } parent={ selectRef }/>
            : null
        }
      </>
    );
  };

  return render();
}

export default Select;
