import "animate.css";
import "./style/index.less";

import api from "./api";

// polyfill
import 'core-js/es/map';
import 'core-js/es/set';
import 'core-js/es/promise';

// window
!window["dk"] ? window["dk"] = api : console.log("donkey is exist");