import * as React from "react";
import { Label, Layout } from "@util";
import { FormContext } from "@shared/context";
import Constant from "@shared/constant";
import IProps from "@types-common/props";
import ISelect from "@types-component/select";

import "./style.less";

function Select(props: IProps<ISelect>) {

  const [config] = React.useState(() => {
    const config = props.config;
    !config.attr.textField ? config.attr.textField = "text" : "";
    !config.attr.valueField ? config.attr.valueField = "value" : "";
    return config;
  });
  const [formContext] = React.useContext(FormContext);
  const [optionsVisible, setOptionsVisible] = React.useState(false);

  React.useEffect(() => {
    const outsideClick = () => {
      setOptionsVisible(false);
    };
    document.addEventListener("click", outsideClick);
    return () => (document.removeEventListener("click", outsideClick));
  }, []);

  const renderOptions = () => {
    if (!optionsVisible) {
      return null;
    }
    if (!config.options || config.options.length < 1) {
      return (
        <div className={`${Constant.cls.prefix}-select-options`}>
          <div className={`${Constant.cls.prefix}-select-options-empty`}>
            <i className={"fa fa-inbox"}></i>
            <span>暂无数据</span>
          </div>
        </div>
      );
    }
    const optionsCls = `${Constant.cls.prefix}-select-options`;
    const pagePreCls = `${Constant.icon.arrow.main} ${Constant.icon.arrow.left}`;
    const pageNextCls = `${Constant.icon.arrow.main} ${Constant.icon.arrow.right}`;
    return (
      <div className={optionsCls}>
        <ul>
          {
            config.options.map(option => (
              <li key={option[config.attr.valueField]}>
                { option[config.attr.textField] }
                <i className={ Constant.icon.check.main }></i>
              </li>
            ))
          }
        </ul>
        <div className={`${Constant.cls.prefix}-select-page`}>
          <a className="pre">
            <i className={ pagePreCls }/>
          </a>
          <span>1 / 23</span>
          <a className="next">
            <i className={ pageNextCls }/>
          </a>
        </div>
      </div>
    );
  };

  const render = () => {
    if (!config) {
      return null;
    }
    const componentCls = [];
    componentCls.push(`${Constant.cls.prefix}-form-control`);
    componentCls.push(`${Constant.cls.prefix}-transition-border`);
    componentCls.push(Layout.componentClassName(config));
    const arrowCls = [];
    arrowCls.push(Constant.icon.arrowY.main);
    optionsVisible
      ? arrowCls.push(Constant.icon.arrowY.up)
      : arrowCls.push(Constant.icon.arrowY.down);
    return (
      <div
        className={ componentCls.join(" ") }
        style={ Layout.componentStyle(config) }
        onClick={
          (e) => {
            setOptionsVisible(true);
            e.nativeEvent.stopImmediatePropagation();
          }
        }
      >
        <div className={`${Constant.cls.prefix}-select-input`}/>
        <i className={ arrowCls.join(" ") }/>
        { renderOptions() }
      </div>
    );
  };

  return render();
}

export default Select;
