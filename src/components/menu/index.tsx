import * as React from "react";
import { Layout } from "@util";
import Constant from "@shared/constant";
import IProps from "@types-common/props";
import IMenu from "@types-component/menu";

import "./style.less";

function Menu(props: IProps<IMenu>) {

  const [config, setConfig] = React.useState(() => {
    const config = props.config;
    !config.attr.offset ? config.attr.offset = 10 : null;
    return config;
  });
  const textField =
    config.attr && config.attr.textField
    ? config.attr.textField
    : "text";
  const hrefField =
    config.attr && config.attr.hrefField
      ? config.attr.hrefField
      : "href";
  const iconField =
    config.attr && config.attr.iconField
      ? config.attr.iconField
      : "icon";
  const childrenField =
    config.attr && config.attr.childrenField
      ? config.attr.childrenField
      : "children";

  const hasChildren = (node) => {
    if (node && node[childrenField] && node[childrenField].length > 0) {
      return true;
    }
    return false;
  };

  const nodeClickHandler = (node) => {
    if (hasChildren(node)) {
      node.childrenOpen = !node.childrenOpen;
    }
    setConfig({ ...config });
  };

  const renderIcon = (node) => {
    if (!node || !node[iconField]) {
      return null;
    }
    return (<i className={`fa ${node[iconField]}`}></i>)
  };

  const renderArrow = (node) => {
    if (hasChildren(node)) {
      const cls = [];
      cls.push(Constant.icon.arrowY.main);
      cls.push(
        node["childrenOpen"]
          ? Constant.icon.arrowY.up
          : Constant.icon.arrowY.down
      );
      return <i className={cls.join(" ")}/>;
    }
    return null;
  };

  const renderChildren = (node, level) => {
    if (!hasChildren(node)) {
      return null;
    }
    const childrenClassName = (node) => {
      const cls = [];
      cls.push("dk-menu-children");
      cls.push("animated");
      cls.push(
        node.childrenOpen
        ? "dk-visible fadeIn"
        : "dk-hidden fadeOut"
      );
      return cls.join(" ");
    };
    return (
      <div
        className={ childrenClassName(node) }
      >
        {
          node[childrenField].map((node, index) =>
            <div className="dk-menu-child" key={ index }>
              <a
                className={'dk-menu-node'}
                style={ {paddingLeft: level * config.attr.offset + 10} }
                href={ node[hrefField] }
                onClick={ nodeClickHandler.bind(this, node) }
              >
                { renderIcon(node) }
                { node[textField] }
                { renderArrow(node) }
              </a>
              { renderChildren(node, level + 1) }
            </div>
          )
        }
      </div>
    );
  };

  const render = () => {
    return (
      <>
        {
          config.data.map((node, index) =>
            <div className="dk-menu-root" key={ index }>
              <a
                className={'dk-menu-node'}
                href={ node[hrefField] }
                onClick={ nodeClickHandler.bind(this, node) }
              >
                { renderIcon(node) }
                { node[textField] }
                { renderArrow(node) }
              </a>
              { renderChildren(node, 1) }
            </div>
          )
        }
      </>
    );
  };

  return render();
}

export default Menu;
