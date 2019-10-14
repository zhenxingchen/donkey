import * as React from "react";
import { FormContext } from "../../shared/context";
import IProps from "../../types/common/props";
import IUpload from "../../types/components/upload";
import { Label, Layout } from "../../utils";
import "./style.less";

function Upload(props: IProps<IUpload>) {

  const [formContext] = React.useContext(FormContext);
  const [config] = React.useState(() => {
    const config = props.config;
    !config.attr ? config.attr = {} : "";
    return config;
  });

  const render = () => {
    if (!config) {
      return null;
    }
    return (
      <div
        className={Layout.rootClassName(config)}
        style={Layout.rootStyle(config)}
      >
        {Label(config)}
        <div
          className={Layout.containerClassName(config)}
          style={Layout.containerStyle(config)}
        >
          <label className={"dk-upload-text"} htmlFor="111111">{config.text}</label>
          <input id="111111" type="file" style={{display:'none'}}/>
        </div>
      </div>
    );
  };

  return render();

}

export default Upload;