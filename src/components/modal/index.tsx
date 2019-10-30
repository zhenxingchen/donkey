import * as React from "react";
import { Layout } from "@util";
import IProps from "@types-common/props";
import IModal from "@types-component/modal";

import "./style.less";

function Modal(props: IProps<IModal>) {

  const [config] = React.useState(() => {
    const config = props.config;
    return config;
  });

  const renderMask = () => {
    if (!config.attr.mask) {
      return null;
    }
    return (
      <div className="dk-modal-mask"></div>
    );
  };

  const renderHeader = () => {
    return (
      <div className="dk-modal-header">
        <div className="____title">
          <i className="fa fa-info-circle"></i>
          <span>提示</span>
        </div>
        <div className="____close">
          <i className="dk-icon-close"></i>
        </div>
      </div>
    );
  };

  const renderContent = () => {
    return (
      <div className="dk-modal-content">我是一个提示语</div>
    );
  };

  const renderFooter = () => {
    return (
      <div className="dk-modal-footer">
        <button className="dk-btn ____white">取消</button>
        <button className="dk-btn ____blue">确定</button>
      </div>
    );
  };

  const render = () => {
    if (!config) {
      return null;
    }
    return (
      <>
        { renderMask() }
        <div className="dk-modal-body ____bottom">
          { renderHeader() }
          { renderContent() }
          { renderFooter() }
        </div>
      </>
    );
  };

  return render();

}

export default Modal;
