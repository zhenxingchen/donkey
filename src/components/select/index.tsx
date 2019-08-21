import * as React from "react";
import { FormContext } from "../../shared/context";
import IProps from "../../types/common/props";
import ISelect from "../../types/components/select";
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

  const renderOptions = () => {
    if (!doroDown) {
      return null;
    }
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
        <div className="page">
          <a className="pre" href="#">&lt;</a>
          <span>1 / 23</span>
          <a className="next" href="#">&gt;</a>
        </div>
      </div>
    );
  }

  const render = () => {
    if (!config) {
      return null;
    }
    return (
      <div className={`dk-select ${util.getClassName(config.cols)}`}>
        { util.getLabel(config) }
        <div className="dk-select-container">
          <input
            className={`dk-form-control dk-transition-border ${config.attr.className}`}
            type="text"
            onFocus={() => setDropDown(true)}
            onBlur={() => setDropDown(false)}
          />
          { renderOptions() }
        </div>
      </div>
    );
  };

  return render();
}

export default Select;
