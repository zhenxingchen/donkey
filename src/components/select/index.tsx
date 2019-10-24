import * as React from "react";
import { FormContext } from "@shared/context";
import IProps from "@types-common/props";
import ISelect from "@types-component/select";
import { Label, Layout } from "@util";
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
        <div className="dk-select-options">
          <div className={"dk-select-options-empty"}>暂无数据</div>
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
                <i className="dk-check"></i>
              </li>
            ))
          }
        </ul>
        <div className="dk-select-page">
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
              onClick={
                (e) => {
                  setOptionsVisible(true);
                  e.stopPropagation();
                  e.nativeEvent.stopImmediatePropagation();
                  e.preventDefault();
                  return false;
                }
              }
            >
              <div className="dk-select-input"></div>
              <div className={`dk-arrow-split-y ${optionsVisible ? "dk-arrow-split-y-up" : "dk-arrow-split-y-down"}`}></div>
              { renderOptions() }
            </div>
        </div>
      </div>
    );
  };

  return render();
}

export default Select;
