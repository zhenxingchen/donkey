import * as React from "react";
import { FormContext } from "../../shared/context";
import IConfig from "../../types/config";
import ISelect from "../../types/select";

import "./style.less";

function Select(props: IConfig<ISelect>) {

  const [config, setConfig] = React.useState(null);
  const [formContext] = React.useContext(FormContext);

  const [optionShow, setOptionShow] = React.useState(false);

  React.useEffect(() => {
    const config = props.config;
    if (!config.attr) {
      config.attr = {};
    }
    setConfig(config);
  }, [ props.config ]);

  const renderOptions = () => {
    if (!optionShow) {
      return null;
    }
    return (
      <div className="dk-select-options">
        <ul>
          {
            config.options.map((option, index) => (
              <li key={index} className={""}>
                { option.text }
                <i className="dk-select-checked"></i>
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
      <div className="dk-select">
        <input
          className={`${config.attr.className} dk-form-control dk-transition-border`}
          type="text"
          onFocus={() => setOptionShow(true)}
          onBlur={() => setOptionShow(false)}
        />
        { renderOptions() }
      </div>
    );
  };

  return render();
}

export default Select;
