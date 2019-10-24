import * as React from "react";
import { Layout } from "@util";
import IProps from "@types-common/props";
import IMenu from "@types-component/menu";

import "./style.less";

function Menu(props: IProps<IMenu>) {

  const [config, setConfig] = React.useState(() => {
    const config = props.config;
    !config.attr ? config.attr = {} : null;
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

  const renderChildrenFlag = (node) => {
    if (hasChildren(node)) {
      const cls = [];
      cls.push("dk-arrow-split-y");
      cls.push(
        node["childrenOpen"]
          ? "dk-arrow-split-y-up"
          : "dk-arrow-split-y-down"
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
                style={ {paddingLeft: level * config.attr.offset} }
                href={ node[hrefField] }
                onClick={ nodeClickHandler.bind(this, node) }
              >
                { node[textField] }
                { renderChildrenFlag(node) }
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
      <div
        className={Layout.rootClassName(config)}
        style={Layout.rootStyle(config)}
      >
        <div
          className={Layout.containerClassName(config)}
          style={Layout.containerStyle(config)}
        >
          <div className="dk-check"></div>
          <div className="dk-check-box dk-check-box-checked-fill"></div>
          <div className="dk-check-radio dk-check-radio-checked"></div>
          {
            config.data.map((node, index) =>
              <div className="dk-menu-root" key={ index }>
                <a
                  className={'dk-menu-node'}
                  href={ node[hrefField] }
                  onClick={ nodeClickHandler.bind(this, node) }
                >
                  { node[textField] }
                  { renderChildrenFlag(node) }
                </a>
                { renderChildren(node, 1) }
              </div>
            )
          }
        </div>
      </div>
    );
  };

  return render();
}

export default Menu;