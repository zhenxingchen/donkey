import * as React from "react";

function fetch(src: string, onLoad: () => void) {
  const script = document.createElement("script");
  script.setAttribute("type", "text/javascript");
  script.setAttribute("src", src);
  script.onload = () => {
    console.log("Fetch onLoad");
    onLoad();
  };
  document.body.appendChild(script);
}

export default fetch;