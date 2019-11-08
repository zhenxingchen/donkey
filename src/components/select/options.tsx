import * as React from "react";
import { Doc } from "@util";
import { CLS, PREFIX, PREFIX_INNER } from "@shared/constant";
import IProps from "@types-common/props";
import ISelect from "@types-component/select";

import OptionsEmpty from "./optionsEmpty";

function Options(props: IProps<ISelect>) {

  const target = Doc.create("div");
  Doc.append(target);
  const [styles, setStyles] = React.useState(null);

  React.useEffect(() => {
    resetPosition();
    window.addEventListener("resize", resetPosition);
    return () => {
      Doc.unmoutAndRemove(target);
      window.removeEventListener("resize", resetPosition);
    };
  }, []);

  const resetPosition = () => {
    const current = props.parent.current;
    setStyles({
      top: current.offsetTop + current.offsetHeight + 1,
      left: current.offsetLeft,
      width: current.offsetWidth,
      display: "block"
    });
  };

  const Pager = () => {
    const pagePreCls = [CLS.icon.arrow.main, CLS.icon.arrow.left];
    const pageNextCls = [CLS.icon.arrow.main, CLS.icon.arrow.right];
    return (
      <div className={`${PREFIX_INNER}pager`}>
        <a className={`${PREFIX_INNER}pre`}>
          <i className={ pagePreCls.join(" ") }/>
        </a>
        <span>1 / 23</span>
        <a className={`${PREFIX_INNER}next`}>
          <i className={ pageNextCls.join(" ") }/>
        </a>
      </div>
    );
  }

  const List = () => {
    const config = props.config;
    const optionsCls = `${PREFIX}-select-options`;
    return (
      <div className={optionsCls} style={ styles }>
        <ul>
          {
            config.options.map(option => (
              <li key={option[config.valueField]}>
                { option[config.textField] }
                <i className={ CLS.icon.check.main }/>
              </li>
            ))
          }
        </ul>
        <Pager/>
      </div>
    );
  };

  const render = () => {
    const config = props.config;
    if (!config) {
      return null;
    }
    if (!config.options || config.options.length < 1) {
      return Doc.partols(
        <OptionsEmpty styles={ styles }/>,
        target
      );
    } else {
      return Doc.partols(<List/>, target);
    }
  };

  return render();
}

export default Options;
