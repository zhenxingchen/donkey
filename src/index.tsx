import * as React from "react";

// polyfill
import 'core-js/es/map';
import 'core-js/es/set';
import 'core-js/es/promise';

// animate
import "animate.css";

// common style
import "./style/index.less";

// api service
import * as api from "./api";

// window
!window["dk"] ? window["dk"] = api : console.log("donkey is exist");
