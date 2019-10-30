import * as React from "react";
import { FormContext } from "@shared/context";
import { Id } from "@util";
import IProps from "@types-common/props";
import IUpload from "@types-component/upload";
import Item from "@components/item";
import "./style.less";

function Upload(props: IProps<IUpload>) {

  const fileRef = React.createRef<HTMLInputElement>();
  const fileId = Id(props.config.tag);
  const [formContext] = React.useContext(FormContext);
  const [config] = React.useState(() => {
    const config = props.config;
    return config;
  });

  const render = () => {
    if (!config) {
      return null;
    }
    return (
      <>
        <input
          ref={ fileRef }
          id={ fileId }
          type="file"
          style={{display:'none'}}
        />
        <label
          className={"dk-upload-text"}
          htmlFor={ fileId }
          onClick={ (e) => {
            e.nativeEvent.stopImmediatePropagation();
            // fileRef.current.click();
          }
          }
        >
          { config.items ? <Item configs={ config.items }/> : config.text }
        </label>
      </>
    );
  };

  return render();

}

export default Upload;