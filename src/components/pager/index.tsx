import * as React from "react";
import { FormContext, TableContext } from "@shared/context";
import IProps from "@types-common/props";
import IPager from "@types-component/pager";
import "./style.less";

function Pager(props: IProps<IPager>) {

  const [config] = React.useState(() => {
    const config = props.config;
    return config;
  });
  const [formContext] = React.useContext(FormContext);
  const [tableContext] = React.useContext(TableContext);

  const render = () => {
    if (!config) {
      return null;
    }
    return (
      <>
        <a className="dk-transition-border" href="">&lt;</a>
        <a className="dk-transition-border" href="">1</a>
        <a className="dk-transition-border dot" href="">···</a>
        <a className="dk-transition-border" href="">4</a>
        <a className="dk-transition-border" href="">5</a>
        <a className="dk-transition-border disabled" href="">6</a>
        <a className="dk-transition-border" href="">7</a>
        <a className="dk-transition-border" href="">8</a>
        <a className="dk-transition-border dot" href="">···</a>
        <a className="dk-transition-border" href="">15</a>
        <a className="dk-transition-border" href="">&gt;</a>
      </>
    );
  }

  return render();
}

export default Pager;
