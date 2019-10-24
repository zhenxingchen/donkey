import * as React from "react";
import { Key } from "@util";
import IProps from "@types-common/props";
import IItem from "@types-component/item";
import log from "@shared/log";

import Banner from "@components/banner";
import Block from "@components/block";
import Bread from "@components/bread";
import Button from "@components/button";
import Carousel from "@components/carousel";
import Checkbox from "@components/checkbox";
import Date from "@components/date";
import Form from "@components/form";
import Frame from "@components/frame";
import Group from "@components/group";
import Html from "@components/html";
import Icon from "@components/icon";
import IFrame from "@components/iframe";
import Img from "@components/img";
import Input from "@components/input";
import Link from "@components/link";
import Menu from "@components/menu";
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
import Transfer from "@components/transfer";
import Tree from "@components/tree";
import Upload from "@components/upload";

function Item(props: IProps<IItem>) {

  const [configs] = React.useState(props.configs);
  const [config] = React.useState(props.config);

  const configToComponent = (config, key) => {
    if (!config || !config.tag) {
      log.warning("the config is empty or tag name is empty", config);
      return config;
    }
    switch (config.tag) {
      case "banner":
        return (
          <Banner
            config={config}
            key={Key(config, key)}
            rowIndex={ props.rowIndex }
            colIndex={ props.colIndex }
          />
        );
      case "block":
        return (
          <Block
            config={config}
            key={Key(config, key)}
            rowIndex={ props.rowIndex }
            colIndex={ props.colIndex }
          />
        );
      case "bread":
        return (
          <Bread
            config={config}
            key={Key(config, key)}
            rowIndex={ props.rowIndex }
            colIndex={ props.colIndex }
          />
        );
      case "button":
        return (
          <Button
            config={config}
            key={Key(config, key)}
            rowIndex={ props.rowIndex }
            colIndex={ props.colIndex }
          />
        );
      case "carousel":
        return (
          <Carousel
            config={config}
            key={Key(config, key)}
            rowIndex={ props.rowIndex }
            colIndex={ props.colIndex }
          />
        );
      case "checkbox":
        return (
          <Checkbox
            config={config}
            key={Key(config, key)}
            rowIndex={ props.rowIndex }
            colIndex={ props.colIndex }
          />
        );
      case "date":
        return (
          <Date
            config={config}
            key={Key(config, key)}
            rowIndex={ props.rowIndex }
            colIndex={ props.colIndex }
          />
        );
      case "form":
        return (
          <Form
            config={config}
            key={Key(config, key)}
            rowIndex={ props.rowIndex }
            colIndex={ props.colIndex }
          />
        );
      case "frame":
        return (
          <Frame
            config={config}
            key={Key(config, key)}
            rowIndex={ props.rowIndex }
            colIndex={ props.colIndex }
          />
        );
      case "group":
        return (
          <Group
            config={config}
            key={Key(config, key)}
            rowIndex={ props.rowIndex }
            colIndex={ props.colIndex }
          />
        );
      case "html":
        return (
          <Html
            config={config}
            key={Key(config, key)}
            rowIndex={ props.rowIndex }
            colIndex={ props.colIndex }
          />
        );
      case "icon":
        return (
          <Icon
            config={config}
            key={Key(config, key)}
            rowIndex={ props.rowIndex }
            colIndex={ props.colIndex }
          />
        );
      case "iframe":
        return (
          <IFrame
            config={config}
            key={Key(config, key)}
            rowIndex={ props.rowIndex }
            colIndex={ props.colIndex }
          />
        );
      case "img":
        return (
          <Img
            config={config}
            key={Key(config, key)}
            rowIndex={ props.rowIndex }
            colIndex={ props.colIndex }
          />
        );
      case "input":
        return (
          <Input
            config={config}
            key={Key(config, key)}
            rowIndex={ props.rowIndex }
            colIndex={ props.colIndex }
          />
        );
      case "link":
        return (
          <Link
            config={config}
            key={Key(config, key)}
            rowIndex={ props.rowIndex }
            colIndex={ props.colIndex }
          />
        );
      case "menu":
        return (
          <Menu
            config={config}
            key={Key(config, key)}
            rowIndex={ props.rowIndex }
            colIndex={ props.colIndex }
          />
        );
      case "pager":
        return (
          <Pager
            config={config}
            key={Key(config, key)}
            rowIndex={ props.rowIndex }
            colIndex={ props.colIndex }
          />
        );
      case "panel":
        return (
          <Panel
            config={config}
            key={Key(config, key)}
            rowIndex={ props.rowIndex }
            colIndex={ props.colIndex }
          />
        );
      case "progress":
        return (
          <Progress
            config={config}
            key={Key(config, key)}
            rowIndex={ props.rowIndex }
            colIndex={ props.colIndex }
          />
        );
      case "radio":
        return (
          <Radio
            config={config}
            key={Key(config, key)}
            rowIndex={ props.rowIndex }
            colIndex={ props.colIndex }
          />
        );
      case "select":
        return (
          <Select
            config={config}
            key={Key(config, key)}
            rowIndex={ props.rowIndex }
            colIndex={ props.colIndex }
          />
        );
      case "slide":
        return (
          <Slide
            config={config}
            key={Key(config, key)}
            rowIndex={ props.rowIndex }
            colIndex={ props.colIndex }
          />
        );
      case "span":
        return (
          <Span
            config={config}
            key={Key(config, key)}
            rowIndex={ props.rowIndex }
            colIndex={ props.colIndex }
          />
        );
      case "switch":
        return (
          <Switch
            config={config}
            key={Key(config, key)}
            rowIndex={ props.rowIndex }
            colIndex={ props.colIndex }
          />
        );
      case "table":
        return (
          <Table
            config={config}
            key={Key(config, key)}
            rowIndex={ props.rowIndex }
            colIndex={ props.colIndex }
          />
        );
      case "tabs":
        return (
          <Tabs
            config={config}
            key={Key(config, key)}
            rowIndex={ props.rowIndex }
            colIndex={ props.colIndex }
          />
        );
      case "textarea":
        return (
          <TextArea
            config={config}
            key={Key(config, key)}
            rowIndex={ props.rowIndex }
            colIndex={ props.colIndex }
          />
        );
      case "transfer":
        return (
          <Transfer
            config={config}
            key={Key(config, key)}
            rowIndex={ props.rowIndex }
            colIndex={ props.colIndex }
          />
        );
      case "tree":
        return (
          <Tree
            config={config}
            key={Key(config, key)}
            rowIndex={ props.rowIndex }
            colIndex={ props.colIndex }
          />
        );
      case "upload":
        return (
          <Upload
            config={config}
            key={Key(config, key)}
            rowIndex={ props.rowIndex }
            colIndex={ props.colIndex }
          />
        );
      default : {
        log.error("config.tag has no compared", config);
        return null;
      }
    }
  };

  const renderItems = () => {
    if (!configs) {
      return null;
    }
    return (
      <>
        {
          configs.map((config, index) => (
            configToComponent(config, Key(config, index))
          ))
        }
      </>
    );
  };

  const renderItem = () => {
    if (!config) {
      return null;
    }
    return configToComponent(config, null);
  };

  const render = () => {
    if (config) {
      return renderItem();
    } else if (configs) {
      return renderItems();
    }
    return null;
  };

  return render();
}

export default Item;
