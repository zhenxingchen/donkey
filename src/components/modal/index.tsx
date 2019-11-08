import * as React from "react";
import { closeSubject } from "@shared/subject";
import { Doc } from "@util";
import { CLS, PREFIX, PREFIX_INNER } from "@shared/constant";
import Item from "@components/item";
import IProps from "@types-common/props";
import IModal from "@types-component/modal";

import "./style.less";

function Modal(props: IProps<IModal>) {

  const [config] = React.useState(() => {
    const config = props.config;
    return config;
  });

  React.useEffect(() => {
    closeSubject.subscribe((param) => {
      if (param["id"] === config.id) {
        Doc.unmoutAndRemove(props.target);
      }
    });
  }, []);

  const getModalAnimated = (position: string | {}) => {
    switch (position) {
      case "top": { return "fadeInDown"; }; break;
      case "topLeft": { return "fadeInLeft"; }; break;
      case "topRight": { return "fadeInRight"; }; break;
      case "center": { return "fadeIn"; }; break;
      case "centerLeft": { return "fadeInLeft"; }; break;
      case "centerRight": { return "fadeInRight"; }; break;
      case "bottom": { return "fadeInUp"; }; break;
      case "bottomLeft": { return "fadeInLeft"; }; break;
      case "bottomRight": { return "fadeInRight"; }; break;
      default: return "fadeIn";
    }
  }

  const renderMask = () => {
    if (!config.showMask) {
      return null;
    }
    const maskCls = [];
    maskCls.push(`${PREFIX}-modal-mask`);
    maskCls.push(CLS.animation.main);
    maskCls.push(CLS.animation.fadeIn);
    maskCls.push(CLS.animationSpeed.faster);
    return (
      <div className={ maskCls.join(" ") }/>
    );
  };

  const renderClose = () => {
    if (!config.showClose) {
      return null;
    }
    return (
      <div className="dk-modal-close">
        <i className="dk-icon-close"></i>
      </div>
    );
  };

  const renderHeader = () => {
    return (
      <div className="dk-modal-header">
        <div className="____title">
          <i className="fa fa-info-circle"></i>
          <span>{ config.title }</span>
        </div>
      </div>
    );
  };

  const renderBody = () => {
    return (
      <div className={`${PREFIX}-modal-body`}>
        { config.content }
      </div>
    );
  };

  const renderFooter = () => {
    if (config.footer instanceof Array) {
      return (<Item configs={ config.footer }/>);
    } else {
      return (<Item config={ config.footer }/>);
    }
  };

  const render = () => {
    if (!config) {
      return null;
    }
    const modalWrapCls = [];
    modalWrapCls.push(`${PREFIX}-modal-wrap`);
    modalWrapCls.push(`${PREFIX_INNER}${config.position}`);
    modalWrapCls.push("animated faster");
    modalWrapCls.push(getModalAnimated(config.position));
    return (
      <div className={`${PREFIX}-modal`}>
        { renderMask() }
        <div className={ modalWrapCls.join(" ") }>
          { renderHeader() }
          { renderBody() }
          { renderFooter() }
        </div>
      </div>
    );
  };

  return render();
}

export default Modal;
