import * as React from "react";
import IDrawer from "@types-component/drawer";
import IProps from "@types-common/props";

import "./style.less";

function Drawer(props: IProps<IDrawer>) {

  const [config] = React.useState(() => {
    const config = props.config;
    return config;
  });

  const renderMask = () => {
    return (<div className="dk-drawer-mask"></div>);
  };

  const render = () => {
    if (!config) {
      return null;
    }
    return (
      <>
        { renderMask() }
        <div className="dk-drawer-wrap ____right">
          <div className="dk-drawer-wrap-content">
            <div className="dk-drawer-header">
              <div className="____title">我是一个标题</div>
              <div className="____close">
                <i className="dk-icon-close"></i>
              </div>
            </div>
            <div className="dk-drawer-body">
              <div className="dk-drawer-content">
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
              <div className="dk-drawer-footer">
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

export default Drawer;
