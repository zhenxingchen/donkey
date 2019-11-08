import * as React from "react";
import { Layout } from "@util";
import IProps from "@types-common/props";
import ISide from "@types-component/side";

import "./style.less";

function Side(props: IProps<ISide>) {

  const [config] = React.useState(() => {
    const config = props.config;
    return config;
  });

  const renderMask = () => {
    return (<div className="dk-side-mask"></div>);
  };

  const render = () => {
    if (!config) {
      return null;
    }
    return (
      <>
        { renderMask() }
        <div className="dk-side-wrap ____right">
          <div className="dk-side-wrap-content">
            <div className="dk-side-header">
              <div className="____title">我是一个标题</div>
              <div className="____close">
                <i className="dk-icon-close"></i>
              </div>
            </div>
            <div className="dk-side-body">
              <div className="dk-side-content">
                aaaa<br/>aaaa<br/>aaaa<br/>aaaa<br/>aaaa<br/>aaaa<br/>
                aaaa<br/>aaaa<br/>aaaa<br/>aaaa<br/>aaaa<br/>aaaa<br/>
                aaaa<br/>aaaa<br/>aaaa<br/>aaaa<br/>aaaa<br/>aaaa<br/>
                aaaa<br/>aaaa<br/>aaaa<br/>aaaa<br/>aaaa<br/>aaaa<br/>
                aaaa<br/>aaaa<br/>aaaa<br/>aaaa<br/>aaaa<br/>aaaa<br/>
                aaaa<br/>aaaa<br/>aaaa<br/>aaaa<br/>aaaa<br/>aaaa<br/>
                aaaa<br/>aaaa<br/>aaaa<br/>aaaa<br/>aaaa<br/>aaaa<br/>
                aaaa<br/>aaaa<br/>aaaa<br/>aaaa<br/>aaaa<br/>aaaa<br/>
                aaaa<br/>aaaa<br/>aaaa<br/>aaaa<br/>aaaa<br/>aaaa<br/>
                aaaa<br/>aaaa<br/>aaaa<br/>aaaa<br/>aaaa<br/>aaaa<br/>
                aaaa<br/>aaaa<br/>aaaa<br/>aaaa<br/>aaaa<br/>aaaa<br/>
                aaaa<br/>aaaa<br/>aaaa<br/>aaaa<br/>aaaa<br/>aaaa<br/>
                aaaa<br/>aaaa<br/>aaaa<br/>aaaa<br/>aaaa<br/>aaaa<br/>
                aaaa<br/>aaaa<br/>aaaa<br/>aaaa<br/>aaaa<br/>aaaa<br/>
              </div>
              <div className="dk-side-footer">
                我是底部
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return render();
}

export default Side;
