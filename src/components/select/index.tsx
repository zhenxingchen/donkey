import * as React from "react";
import { FormContext } from "../../shared/context";
import IProps from "../../types/common/props";
import ISelect from "../../types/components/select";
import { Label, Layout } from "../../utils";
import "./style.less";

function Select(props: IProps<ISelect>) {

  const [config] = React.useState(() => {
    const config = props.config;
    !config.attr ? config.attr = {} : "";
    !config.attr.textField ? config.attr.textField = "text" : "";
    !config.attr.valueField ? config.attr.valueField = "value" : "";
    return config;
  });
  const [formContext] = React.useContext(FormContext);
  const [optionsVisible, setOptionsVisible] = React.useState(false);

  const renderOptions = () => {
    if (!optionsVisible) {
      return null;
    }
    if (!config.options || config.options.length < 1) {
      return (
        <div className="dk-options">
          <div className={"dk-options-empty"}>暂无数据</div>
        </div>
      );
    }
    return (
      <div className="dk-select-options">
        <ul>
          {
            config.options.map(option => (
              <li key={option[config.attr.valueField]}>
                { option[config.attr.textField] }
                <i className="checked"></i>
              </li>
            ))
          }
        </ul>
        <div className="dk-page">
          <a className="pre" href="#">&lt;</a>
          <span>1 / 23</span>
          <a className="next" href="#">&gt;</a>
        </div>
      </div>
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
            <div
              className={`dk-form-control dk-transition-border ${Layout.componentClassName(config)}`}
              style={ Layout.componentStyle(config) }
              onClick={() => setOptionsVisible(true)}
            >
              <div className="dk-select-input"></div>
              <i className={`dk-down ${optionsVisible ? "up" : ""}`}></i>
            </div>
          { renderOptions() }
        </div>
      </div>
    );
  };

  return render();
}

export default Select;
