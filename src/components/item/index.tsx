import * as React from "react";
import { Id } from "@util";
import IProps from "@types-common/props";
import IItem from "@types-component/item";
import log from "@shared/log";

import Container from "@components/container";

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
import Side from "@components/side";
import Slide from "@components/slide";
import Span from "@components/span";
import Switch from "@components/switch";
import Table from "@components/table";
import Tabs from "@components/tabs";
import TextArea from "@components/textarea";
import Toast from "@components/toast";
import Tooltip from "@components/tooltip";
import Transfer from "@components/transfer";
import Tree from "@components/tree";
import Upload from "@components/upload";

function Item(props: IProps<IItem>) {

  const [configs] = React.useState(() => {
    const configs = props.configs;
    if (!configs) return null;
    for (const config of configs) {
      if (!config) continue;
      !config.attr ? config.attr = {} : "";
      !config.attr.id ? config.attr.id = Id(config.tag) : null;
    }
    return configs;
  });

  const [config] = React.useState(() => {
    const config = props.config;
    if (!config) return null;
    !config.attr ? config.attr = {} : "";
    !config.attr.id ? config.attr.id = Id(config.tag) : null;
    return config;
  });

  const configToComponent = (config) => {
    if (!config || !config.tag) {
      log.warning("the config is empty or tag name is empty", config);
      return config;
    }
    switch (config.tag) {
      case "banner":
        return (
          <Container
            key={ config.attr.id }
            config={ config }
            children={ <Banner config={ config }/> }
          />
        );
      case "block":
        return (
          <Container
            key={ config.attr.id }
            config={ config }
            children={ <Block config={ config }/> }
          />
        );
      case "bread":
        return (
          <Container
            key={ config.attr.id }
            config={ config }
            children={ <Bread config={ config } /> }
          />
        );
      case "button":
        return (
          <Container
            key={ config.attr.id }
            config={ config }
            children={
              <Button
                config={ config }
                rowIndex={ props.rowIndex }
                colIndex={ props.colIndex }
              />
            }
          />
        );
      case "carousel":
        return (
          <Container
            key={ config.attr.id }
            config={ config }
            children={ <Carousel config={ config }/> }
          />
        );
      case "checkbox":
        return (
          <Container
            key={ config.attr.id }
            config={ config }
            children={
              <Checkbox
                config={ config }
                rowIndex={ props.rowIndex }
                colIndex={ props.colIndex }
              />
            }
          />
        );
      case "date":
        return (
          <Container
            key={ config.attr.id }
            config={ config }
            children={
              <Date
                config={ config }
                rowIndex={ props.rowIndex }
                colIndex={ props.colIndex }
              />
            }
          />
        );
      case "form":
        return (
          <Container
            key={ config.attr.id }
            config={ config }
            children={ <Form config={ config }/> }
          />
        );
      case "frame":
        return (
          <Container
            key={ config.attr.id }
            config={ config }
            children={ <Frame config={ config }/> }
          />
        );
      case "group":
        return (
          <Container
            key={ config.attr.id }
            config={ config }
            children={
              <Group
                config={ config }
                rowIndex={ props.rowIndex }
                colIndex={ props.colIndex }
              />
            }
          />
        );
      case "html":
        return (
          <Container
            key={ config.attr.id }
            config={ config }
            children={
              <Html
                config={ config }
                rowIndex={ props.rowIndex }
                colIndex={ props.colIndex }
              />
            }
          />
        );
      case "icon":
        return (
          <Container
            key={ config.attr.id }
            config={ config }
            children={
              <Icon
                config={ config }
                rowIndex={ props.rowIndex }
                colIndex={ props.colIndex }
              />
            }
          />
        );
      case "iframe":
        return (
          <Container
            key={ config.attr.id }
            config={ config }
            children={ <IFrame config={ config }/> }
          />
        );
      case "img":
        return (
          <Container
            key={ config.attr.id }
            config={ config }
            children={
              <Img
                config={ config }
                rowIndex={ props.rowIndex }
                colIndex={ props.colIndex }
              />
            }
          />
        );
      case "input":
        return (
          <Container
            key={ config.attr.id }
            config={ config }
            children={
              <Input
                config={ config }
                rowIndex={ props.rowIndex }
                colIndex={ props.colIndex }
              />
            }
          />
        );
      case "layer":
        return (
          <Container
            key={ config.attr.id }
            config={ config }
            children={ <Layer config={ config }/> }
          />
        );
      case "link":
        return (
          <Container
            key={ config.attr.id }
            config={ config }
            children={
              <Link
                config={ config }
                rowIndex={ props.rowIndex }
                colIndex={ props.colIndex }
              />
            }
          />
        );
      case "loading":
        return (
          <Container
            key={ config.attr.id }
            config={ config }
            children={ <Loading config={ config }/> }
          />
        );
      case "menu":
        return (
          <Container
            key={ config.attr.id }
            config={ config }
            children={ <Menu config={ config }/> }
          />
        );
      case "modal":
        return (
          <Container
            key={ config.attr.id }
            config={ config }
            children={ <Modal config={ config }/> }
          />
        );
      case "pager":
        return (
          <Container
            key={ config.attr.id }
            config={ config }
            children={ <Pager config={ config }/> }
          />
        );
      case "panel":
        return (
          <Container
            key={ config.attr.id }
            config={ config }
            children={ <Panel config={ config }/> }
          />
        );
      case "progress":
        return (
          <Container
            key={ config.attr.id }
            config={ config }
            children={
              <Progress
                config={ config }
                rowIndex={ props.rowIndex }
                colIndex={ props.colIndex }
              />
            }
          />
        );
      case "radio":
        return (
          <Container
            key={ config.attr.id }
            config={ config }
            children={
              <Radio
                config={ config }
                rowIndex={ props.rowIndex }
                colIndex={ props.colIndex }
              />
            }
          />
        );
      case "select":
        return (
          <Container
            key={ config.attr.id }
            config={ config }
            children={
              <Select
                config={ config }
                rowIndex={ props.rowIndex }
                colIndex={ props.colIndex }
              />
            }
          />
        );
      case "side":
        return (
          <Container
            key={ config.attr.id }
            config={ config }
            children={ <Side config={ config }/> }
          />
        );
      case "slide":
        return (
          <Container
            key={ config.attr.id }
            config={ config }
            children={
              <Slide
                config={ config }
                rowIndex={ props.rowIndex }
                colIndex={ props.colIndex }
              />
            }
          />
        );
      case "span":
        return (
          <Container
            key={ config.attr.id }
            config={ config }
            children={
              <Span
                config={ config }
                rowIndex={ props.rowIndex }
                colIndex={ props.colIndex }
              />
            }
          />
        );
      case "switch":
        return (
          <Container
            key={ config.attr.id }
            config={ config }
            children={
              <Switch
                config={ config }
                rowIndex={ props.rowIndex }
                colIndex={ props.colIndex }
              />
            }
          />
        );
      case "table":
        return (
          <Container
            key={ config.attr.id }
            config={ config }
            children={
              <Table
                config={ config }
                rowIndex={ props.rowIndex }
                colIndex={ props.colIndex }
              />
            }
          />
        );
      case "tabs":
        return (
          <Container
            key={ config.attr.id }
            config={ config }
            children={ <Tabs config={ config }/> }
          />
        );
      case "textarea":
        return (
          <Container
            key={ config.attr.id }
            config={ config }
            children={
              <TextArea
                config={ config }
                rowIndex={ props.rowIndex }
                colIndex={ props.colIndex }
              />
            }
          />
        );
      case "toast":
        return (
          <Container
            key={ config.attr.id }
            config={ config }
            children={ <Toast config={ config }/> }
          />
        );
      case "tooltip":
        return (
          <Container
            key={ config.attr.id }
            config={ config }
            children={ <Tooltip config={ config }/> }
          />
        );
      case "transfer":
        return (
          <Container
            key={ config.attr.id }
            config={ config }
            children={ <Transfer config={ config }/> }
          />
        );
      case "tree":
        return (
          <Container
            key={ config.attr.id }
            config={ config }
            children={
              <Tree
                config={ config }
                rowIndex={ props.rowIndex }
                colIndex={ props.colIndex }
              />
            }
          />
        );
      case "upload":
        return (
          <Container
            key={ config.attr.id }
            config={ config }
            children={
              <Upload
                config={ config }
                rowIndex={ props.rowIndex }
                colIndex={ props.colIndex }
              />
            }
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
          configs.map((config) => (
            configToComponent(config)
          ))
        }
      </>
    );
  };

  const renderItem = () => {
    if (!config) {
      return null;
    }
    return configToComponent(config);
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
