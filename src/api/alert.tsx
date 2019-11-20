import * as React from "react";
import { close } from "@api";
import { Doc, Id } from "@util";
import IModal from "@types-component/modal";
import Modal from "@components/modal";

type AlertParam = string | {
  id?: string;
  title?: string;
  content?: string;
  icon?: string;
  btnAlign?: "left" | "center" | "right";
  btnText?: string;
  btnTheme?: string;
  btnOnClick?: () => void | boolean;
};

type IGetAlertConfig = (param: AlertParam) => IModal;

const getAlertConfig : IGetAlertConfig =
  (param: AlertParam) => {
    const modalId = Id.generate("modal");
    return {
      tag: "modal",
      id: modalId,
      title: "我是一个提示框",
      content: "我是提示框内容",
      icon: "fa fa-info-circle",
      position: "top",
      showClose: false,
      showMask: true,
      maskClose: false,
      footer: {
        tag: "button",
        text: "确定",
        onClick: () => {
          console.log("footer");
          close(modalId);
        }
      }
    };
};

function alert(
  param: AlertParam,
  onClick?: () => void | boolean
) {
  let _param: AlertParam = {};
  if (typeof param === "string") {
    _param.content = param as string;
    onClick ? _param.btnOnClick = onClick: null;
  } else {
    _param = param;
  }
  const target = Doc.createAndAppend("div");
  const alertConfig = getAlertConfig(_param);
  Doc.render(
    <Modal config={ alertConfig } target={ target }/>,
    target
  );
}

export default alert;
