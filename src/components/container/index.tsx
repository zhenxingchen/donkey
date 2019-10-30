import * as React from "react";
import { Label, Layout } from "@util";
import IItem from "@types-component/item";
import IProps from "@types-common/props";

function Container(props: IProps<IItem>) {

  return (
    <div
      className={Layout.rootClassName(props.config)}
      style={Layout.rootStyle(props.config)}
    >
      {
        props.config.hasOwnProperty("label")
        ? Label(props.config)
        : null
      }
      <div
        className={Layout.containerClassName(props.config)}
        style={Layout.containerStyle(props.config)}
      >
        { props.children }
      </div>
    </div>
  );
}

export default Container;
