import * as React from "react";
import { isEmpty } from "@api";
import { PREFIX, PREFIX_INNER } from "@shared/constant";
import IProps from "@types-common/props";
import IBread from "@types-component/bread";
import Item from "@components/item";
import "./style.less";

function Bread(props: IProps<IBread>) {

  const [config] = React.useState(() => {
    const config = props.config;
    return config;
  });

  const renderSplit = (index: number) => {
    if (isEmpty(config.split) || index === config.items.length - 1) {
      return null;
    }
    return (
      <span className={`${PREFIX}-bread-split`}>
        { config.split }
      </span>
    );
  };

  const renderItems = () => {
    if (!config.items
      || !(config.items instanceof Array)
      || config.items.length < 1) {
      return null;
    }
    return (
      <>
        {
          config.items.map((item, index) => (
            <React.Fragment key={index}>
              <Item
                config={ item }
                className={`${PREFIX}-bread-item`}
              />
              { renderSplit(index) }
            </React.Fragment>
          ))
        }
      </>
    );
  };

  const render = () => {
    if (!config) {
      return null;
    }
    return renderItems();
  };

  return render();
}

export default Bread;
