import * as React from "react";
export default (tag) => `${tag}_${Math.random() * 1000000 % 1000000}`;