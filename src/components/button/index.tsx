import * as React from "react";
import { FormContext } from "../../shared/context";
import { GroupContext} from "../../shared/context";
import IProps from "../../types/props";
import IButton from "../../types/button";
import util from "../../shared/util";
import "./style.less";

function Button(props: IProps<IButton>) {

  const [config, setConfig] = React.useState(() => {
    const config = props.config;
    if (!config.attr) {
      config.attr = {};
    }
    return config;
  });
  const [formContext] = React.useContext(FormContext);
  const [groupContext] = React.useContext(GroupContext);

  React.useEffect(() => {
  }, [ props.config ]);

  const handleClick = (e) => {
    e.preventDefault();
    // config.form = { ...formContext };
    if (config.onClick && typeof config.onClick === "function") {
      return config.onClick(e.target) ? true : false;
    }
    return false;
  };

  const render = () => {
    if (!config) {
      return null;
    }
    return (
      <div className={`dk-button ${util.getCols(config.cols)}`}>
        <button
          type={ config.attr.type }
          disabled={ !!config.attr.disabled }
          style={ {...config.attr.style} }
          className={ `btn ${config.attr.className ? config.attr.className : 'blur'}` }
          onClick={ handleClick.bind(this) }
        >
          { config.text }
        </button>
      </div>
    );
  };

  return render();
}

export default Button;
