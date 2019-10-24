import * as React from "react";
import { FormContext } from "@shared/context";
import { Label, Layout } from "@util";
import IProps from "@types-common/props";
import IUpload from "@types-component/upload";
import Item from "@components/item";
import "./style.less";

function Upload(props: IProps<IUpload>) {

  const fileRef = React.createRef<HTMLInputElement>();
  const fileId = `upload_${Date.now()}_${Math.random()}`;
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
          <label
            className={"dk-upload-text"}
            htmlFor={ fileId }
            onClick={ () => fileRef.current.click() }
          >
            <input
              ref={ fileRef }
              id={ fileId }
              type="file"
              style={{display:'none'}}
            />
            { config.items ? <Item configs={ config.items }/> : config.text }
          </label>
        </div>
      </div>
    );
  };

  return render();

}

export default Upload;