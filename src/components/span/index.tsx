import * as React from "react";
import { Layout } from "@util";
import { PREFIX } from "@shared/constant";
import ISpan from "@types-component/span";
import IProps from "@types-common/props";
import Item from "@components/item";
import "./style.less";

function Span(props: IProps<ISpan>) {

  const [config] = React.useState(() => {
    const config = props.config;
    return config;
  });

  const render = () => {
    if (!config) {
      return null;
    }
    return (
      <span
        className={`${Layout.componentClassName(config)}`}
        style={Layout.componentStyle(config)}
      >
        {
          config.items
            ? <Item
                configs={config.items}
                className={`${PREFIX}-span-item`}
              />
            : config.text
        }
      </span>
    );
  };

  return render();
}

export default Span;
