import React from "react";
import stylesOverlay from "./navOverlay.module.css";

export default function NavOverlay({ children }) {
  return (
    <div className={stylesOverlay.overlay}>
      <ul className={stylesOverlay.mobile__list}>{children}</ul>
    </div>
  );
}
