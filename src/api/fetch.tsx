import * as React from "react";

const _loadPromise = (src: string) => {
  if (src.lastIndexOf(".js") > -1) {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.setAttribute("type", "text/javascript");
      script.setAttribute("src", src);
      script.onerror = () => {
        reject(`load failed, please check: ${src} `);
      };
      script.onload = () => {
        resolve();
      };
      document.body.appendChild(script);
    });
  } else if (src.lastIndexOf(".css") > -1) {
    return new Promise((resolve, reject) => {
      const style = document.createElement('link');
      style.rel = 'stylesheet';
      style.href = src;
      style.onerror = function() {
        reject(`load failed, please check: ${src} `);
      };
      style.onload = function() {
        resolve();
      };
      document.getElementsByTagName('head')[0].appendChild(style);
    });
  }
};

function fetch(
  src: string | string[],
  onLoad?: () => void,
  onError?: (src: string) => void
) {
  let allPromise = null;
  if (typeof src === "string") {
    allPromise = [ _loadPromise(src) ];
  } else if (src instanceof Array) {
    allPromise = src.map(s => _loadPromise(s));
  }
  Promise.all(allPromise)
    .then(() => onLoad ? onLoad() : null)
    .catch((error) => onError(error));
}

export default fetch;
