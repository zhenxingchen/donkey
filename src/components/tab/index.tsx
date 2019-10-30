import * as React from "react";
import { FormContext} from "@shared/context";
import { Layout } from "@util";
import IProps from "@types-common/props";
import ITab from "@types-component/tab";
import Item from "@components/item";

/**
 * 选项卡
 * @param {IProps<ITab>} props
 * @returns {any}
 * @constructor
 */
function Tab(props: IProps<ITab>) {

  const [config] = React.useState(() => {
    const config = props.config;
    return config;
  });
  const [formContext] = React.useContext(FormContext);

  const render = () => {
    return (<Item configs={ config.items }/>);
  };

  return render();
}

export default Tab;