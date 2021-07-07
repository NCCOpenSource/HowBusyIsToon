import React from "react";
import Styles from "./layout.module.css";

export default ({ children }) => (
  <div className={Styles.container}>{children}</div>
);
