import React from "react";
import MetaData from "./atoms/MetaData";

export default ({ children }) => (
  <>
    <MetaData />
    <div>{children}</div>
  </>
);
