import * as React from "react";
import { Id, Label, Layout } from "@util";
import IProps from "@types-common/props";
import IItem from "@types-component/item";
import log from "@shared/log";

import Banner from "@components/banner";
import Bread from "@components/bread";
import Button from "@components/button";
import Carousel from "@components/carousel";
import Checkbox from "@components/checkbox";
import Date from "@components/date";
import Div from "@components/div";
import Drawer from "@components/drawer";
import Form from "@components/form";
import Frame from "@components/frame";
import Group from "@components/group";
import Html from "@components/html";
import Icon from "@components/icon";
import IFrame from "@components/iframe";
import Img from "@components/img";
import Input from "@components/input";
import Layer from "@components/layer";
import Link from "@components/link";
import Loading from "@components/loading";
import Menu from "@components/menu";
import Modal from "@components/modal";
import Pager from "@components/pager";
import Panel from "@components/panel";
import Progress from "@components/progress";
import Radio from "@components/radio";
import Select from "@components/select";
import Slide from "@components/slide";
import Span from "@components/span";
import Switch from "@components/switch";
import Table from "@components/table";
import Tabs from "@components/tabs";
import TextArea from "@components/textarea";
import TimeLine from "@components/timeline";
import Toast from "@components/toast";
import Tooltip from "@components/tooltip";
import Transfer from "@components/transfer";
import Tree from "@components/tree";
import Upload from "@components/upload";

function Item(props: IProps<IItem>) {

  const configToComponent = (config) => {
    if (!config || !config.tag) {
      log.warning("the config is empty or tag name is empty", config);
      return config;
    }
    // set default id
    !config.id ? config.id = Id.generate(config.tag) : null;
    let Component;
    switch (config.tag) {
      case "banner": Component = Banner; break;
      case "bread": Component = Bread; break;
      case "button": Component = Button; break;
      case "carousel": Component = Carousel; break;
      case "checkbox": Component = Checkbox; break;
      case "date": Component = Date; break;
      case "div": Component = Div; break;
      case "drawer": Component = Drawer; break;
      case "form": Component = Form; break;
      case "frame": Component = Frame; break;
      case "group": Component = Group; break;
      case "html": Component = Html; break;
      case "icon": Component = Icon; break;
      case "iframe": Component = IFrame; break;
      case "img": Component = Img; break;
      case "input": Component = Input; break;
      case "layer": Component = Layer; break;
      case "link": Component = Link; break;
      case "loading": Component = Loading; break;
      case "menu": Component = Menu; break;
      case "modal": Component = Modal; break;
      case "pager": Component = Pager; break;
      case "panel": Component = Panel; break;
      case "progress": Component = Progress; break;
      case "radio": Component = Radio; break;
      case "select": Component = Select; break;
      case "slide": Component = Slide; break;
      case "span": Component = Span; break;
      case "switch": Component = Switch; break;
      case "table": Component = Table; break;
      case "tabs": Component = Tabs; break;
      case "textarea": Component = TextArea; break;
      case "timeline": Component = TimeLine; break;
      case "toast": Component = Toast; break;
      case "tooltip": Component = Tooltip; break;
      case "transfer": Component = Transfer; break;
      case "tree": Component = Tree; break;
      case "upload": Component = Upload; break;
      default : log.error("config.tag has no compared", config);
    }
    const rootClassName = [];
    rootClassName.push(Layout.rootClassName(config));
    props.className ? rootClassName.push(props.className) : null;
    return Component
      ? (
        <div
          key={ config.id }
          className={ `${rootClassName.join(" ")}` }
          style={ Layout.rootStyle(config) }
        >
          { config.hasOwnProperty("label") ? Label(config) : null }
          <div
            className={ Layout.containerClassName(config) }
            style={ Layout.containerStyle(config) }
          >
            <Component
              config={ config }
              rowIndex={ props.rowIndex }
              colIndex={ props.colIndex }
            />
          </div>
        </div>
    ) : null;
  };

  const render = () => {
    if (props.config) {
      return configToComponent(props.config);
    } else if (props.configs){
      return (
        <>
          { props.configs.map((config) => configToComponent(config)) }
        </>);
    }
  };

  return render();
}

export default Item;
