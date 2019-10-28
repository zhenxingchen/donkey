import * as React from "react";
import IToast from "@types-component/toast";
import "./style.less";

function Toast(config: IToast) {

  const renderIcon = () => {
    if (!config.icon && !config.type) {
      return null;
    }
    const iconClassName = ["fa"];
    if (config.icon) {
      iconClassName.push(config.icon);
    } else if (config.type) {
      switch (config.type) {
        case "warn": iconClassName.push("fa-info-circle"); break;
        case "info": iconClassName.push("fa-info-circle"); break;
        case "success": iconClassName.push("fa-check-circle"); break;
        case "error": iconClassName.push("fa-times-circle"); break;
      }
    }
    config.type ? iconClassName.push(config.type) : null;
    return (
      <i className={ iconClassName.join(" ") }></i>
    );
  };

  const render = () => {
    if (!config) {
      return null;
    }
    return (
      <div className="dk-toast">
        <div className="dk-toast-container">
          { renderIcon() }
          { config.message }
        </div>
      </div>
    );
  };

  return render();
}

export default Toast;
