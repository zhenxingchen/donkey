import * as React from "react";
import { PREFIX, PREFIX_INNER } from "@shared/constant";

interface IProps {
  styles: {}
}

function OptionsEmpty(props: IProps) {
  return (
    <div
      className={`${PREFIX}-select-options`}
      style={ props.styles }
    >
      <div className={`${PREFIX_INNER}empty`}>
        <i className={"fa fa-inbox"}></i>
        <span>暂无数据</span>
      </div>
    </div>
  );
};

export default OptionsEmpty;
