import * as React from "react";
import IIds from "@types-common/ids";

const generate = tag =>
  `${tag}_${(Math.random() * 1000000 % 1000000).toFixed(0)}`;

const isMatch = (id: IIds, targetId) => (
  typeof id === "string"
    ? id === targetId
    : id.indexOf(targetId) > -1
);

export default {
  generate,
  isMatch
};
