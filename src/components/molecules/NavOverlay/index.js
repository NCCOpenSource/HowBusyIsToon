import { Link } from "gatsby";
import React from "react";
import {
  default as styles,
  default as stylesOverlay,
} from "./navOverlay.module.css";

export default function NavOverlay({ children }) {
  return (
    <div className={stylesOverlay.overlay}>
      <div className={stylesOverlay.overlayList}>
        <Link
          to="/"
          activeClassName={styles.activesubnavLinkItemText}
          className={styles.subnavLinkItemText}
        >
          City Centre
        </Link>
        <Link
          to="/shopsandrestaurants"
          activeClassName={styles.activesubnavLinkItemText}
          className={styles.subnavLinkItemText}
        >
          Shopping And Restaurants
        </Link>

        <Link
          to="/roads"
          activeClassName={styles.activesubnavLinkItemText}
          className={styles.subnavLinkItemText}
        >
          Roads
        </Link>
        <Link
          to="/parking"
          activeClassName={styles.activesubnavLinkItemText}
          className={styles.subnavLinkItemText}
        >
          Parking
        </Link>
        <Link
          to="/evcharging"
          activeClassName={styles.activesubnavLinkItemText}
          className={styles.subnavLinkItemText}
        >
          EV Charging Stations
        </Link>

        <Link
          to="/transport"
          activeClassName={styles.activesubnavLinkItemText}
          className={styles.subnavLinkItemText}
        >
          Buses
        </Link>
        <Link
          to="/nexus"
          activeClassName={styles.activesubnavLinkItemText}
          className={styles.subnavLinkItemText}
        >
          Nexus
        </Link>

        <Link
          className={styles.subnavLinkItemText}
          activeClassName={styles.activesubnavLinkItemText}
          to="/about"
        >
          About
        </Link>
      </div>
    </div>
  );
}
