import * as React from "react";
import { FormContext } from "../../shared/context";
import IProps from "../../types/props";
import ISelect from "../../types/select";
import util from "../../shared/util";
import "./style.less";

function Select(props: IProps<ISelect>) {

  const [config, setConfig] = React.useState(() => {
    const config = props.config;
    if (!config.attr) {
      config.attr = {};
    }
    return config;
  });
  const [formContext] = React.useContext(FormContext);
  const [doroDown, setDropDown] = React.useState(false);

  React.useEffect(() => {
  }, [ props.config ]);

  const renderLabel = () => {
    if (!config.label) {
      return null;
    }
    return (
      <label className="label-for required" htmlFor={ config.attr.id }>{ config.label }</label>
    );
  };

  const renderInput = () => {
    return (
      <input
        className={`${config.attr.className} dk-form-control dk-transition-border`}
        type="text"
        onFocus={() => setDropDown(true)}
        onBlur={() => setDropDown(false)}
      />
    );
  };

  const renderOptions = () => {
    return (
      <div className="options">
        <ul>
          {
            config.data.map((option, index) => (
              <li key={index} className={""}>
                { option.text }
                <i className="checked"></i>
              </li>
            ))
          }
        </ul>
      </div>
    );
  };

  const renderPage = () => {
    return (
      <div className="page">
        <a className="pre" href="#">&lt;</a>
        <span>1 / 23</span>
        <a className="next" href="#">&gt;</a>
      </div>
    );
  };

  const renderDropDown = () => {
    if (!doroDown) {
      return null;
    }
    return (
      <div className="drop-down">
        { renderOptions() }
        { renderPage() }
      </div>
    );
  }

  const render = () => {
    if (!config) {
      return null;
    }
    return (
      <div className={`dk-select ${util.getCols(config.cols)}`}>
        { renderLabel() }
        { renderInput() }
        { renderDropDown() }
      </div>
    );
  };

  return render();
}

export default Select;
