
import * as React from "react";

import ALinkType from "../../types/alink";

interface IALinkProps {
  config: ALinkType
}

function ALink(props: IALinkProps) {

  const [config] = React.useState<ALinkType>(props.config);

  return (
    <div className="dk-alink">
      <a href={ config.attr.href }>{ config.text }</a>
    </div>
  );

}

export default ALink;
