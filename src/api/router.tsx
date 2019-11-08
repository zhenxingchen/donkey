import * as React from "react";
import { Doc } from "@util";
import Fetch from "./fetch";
import Render from "./render";

/**
 * router page
 */
function router(params) {
  // convert map
  const routerMap = {};
  params.pages.map(page => routerMap[ '#' + page.url ] = page);

  const hash = window.location.hash;
  if (hash) {
    const router = routerMap[hash];
    console.log(hash, router);
    if (router) {
      Fetch(router.src, () => {
        console.log(router.name, window[router.name]);
        Doc.unmount(document.getElementById("donkey"));
        Render(window[router.name]);
      });
    }
  } else {
    // render home
    const homes = params.pages.filter(page => page.home);
    if (homes && homes.length > 0) {
      const home = homes[0];
      Fetch(home.src, () => {
        console.log("config ", home.name, window[home.name]);
        Render(window[home.name]);
      });
    }
  }

  // hash change
  window.addEventListener("hashchange", function(hashEvent) {
    const hash = window.location.hash;
    const router = routerMap[hash];
    console.log(hash, router);
    if (router) {
      Fetch(router.src, () => {
        console.log(router.name, window[router.name]);
        Doc.unmount(document.getElementById("donkey"));
        Render(window[router.name]);
      });
    }
  });
}

export default router;
