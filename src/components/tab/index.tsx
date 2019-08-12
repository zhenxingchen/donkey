import * as React from "react";
import { FormContext} from "../../shared/context";
import IProps from "../../types/props";
import ITab from "../../types/tab";
import util from "../../shared/util";
import "./style.less";

function Tab(props: IProps<ITab>) {

  const [config, setConfig] = React.useState(() => {
    const config = props.config;
    if (!config.attr) {
      config.attr = {};
    }
    return config;
  });
  const [formContext] = React.useContext(FormContext);

  React.useEffect(() => {

  }, []);

  const render = () => {
    if (!config) {
      return null;
    }
    return (
      <div className={`dk-tab ${util.getCols(config.cols)}`}>
        <div className="tab-nav">
          <ul>
            <li>页签一</li>
            <li>页签二</li>
            <li className="curr">页签三</li>
            <li>页签四</li>
            <li>页签五</li>
          </ul>
        </div>
        <div className="tab-container">
          <ul>
            <li>我是页签一的内容</li>
            <li>我是页签二的内容</li>
            <li className="curr">我是页签三的内容</li>
            <li>我是页签四的内容</li>
            <li>我是页签五的内容</li>
          </ul>
        </div>
      </div>
    );
  }

  return render();
}

export default Tab;