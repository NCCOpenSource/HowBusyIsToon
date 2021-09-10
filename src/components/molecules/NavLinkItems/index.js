import { useLocation } from "@reach/router";
import { Link } from "gatsby";
import React, { useState } from "react";
import styles from "./NavLinkItems.module.css";

export default function NavLinkItems() {
  /* eslint-disable */
  const [path, setPath] = useState(useLocation().pathname);
  /* eslint-enable */

  return (
    <>
      <div
        className={
          path === "/shopsandrestaurants/" || path === "/"
            ? `${styles.navLinkItems} ${styles.navLinkItemsGrey}  `
            : `${styles.navLinkItems}`
        }
      >
        <p className={styles.navLinkItemText}>City centre</p>
        <div className={styles.subnavLinkItems}>
          <Link
            to="/"
            activeClassName={styles.activesubnavLinkItemText}
            className={styles.subnavLinkItemText}
          >
            City centre
          </Link>
          <Link
            to="/shopsandrestaurants/"
            activeClassName={styles.activesubnavLinkItemText}
            className={styles.subnavLinkItemText}
          >
            Shopping and restaurants
          </Link>
        </div>
      </div>
      <div
        className={
          path === "/parking/" || path === "/evcharging/" || path === "/roads/"
            ? `${styles.navLinkItems} ${styles.navLinkItemsGrey}  `
            : `${styles.navLinkItems}`
        }
      >
        <p className={styles.navLinkItemText}>Driving</p>
        <div className={styles.subnavLinkItems}>
          <Link
            to="/roads/"
            activeClassName={styles.activesubnavLinkItemText}
            className={styles.subnavLinkItemText}
          >
            Roads
          </Link>
          <Link
            to="/parking/"
            activeClassName={styles.activesubnavLinkItemText}
            className={styles.subnavLinkItemText}
          >
            Parking
          </Link>
          <Link
            to="/evcharging/"
            activeClassName={styles.activesubnavLinkItemText}
            className={styles.subnavLinkItemText}
          >
            EV charging stations
          </Link>
        </div>
      </div>

      {/* <div
        className={
          path === "/nexus/" || path === "/transport/"
            ? `${styles.navLinkItems} ${styles.navLinkItemsGrey}  `
            : `${styles.navLinkItems}`
        }
      >
        <p className={styles.navLinkItemText}>Public Transport</p>
        <div className={styles.subnavLinkItems}>
          <Link
            to="/transport/"
            activeClassName={styles.activesubnavLinkItemText}
            className={styles.subnavLinkItemText}
          >
            Buses
          </Link>
          <Link
            to="/nexus/"
            activeClassName={styles.activesubnavLinkItemText}
            className={styles.subnavLinkItemText}
          >
            Nexus
          </Link>
        </div>
      </div> */}
      <Link
        className={styles.navLinkItems}
        activeClassName={styles.navLinkItemsGrey}
        to="/transport/"
      >
        <p className={styles.navLinkItemText}>Public transport</p>
      </Link>
      <Link
        className={styles.navLinkItems}
        activeClassName={styles.navLinkItemsGrey}
        to="/about/"
      >
        <p className={styles.navLinkItemText}>About</p>
      </Link>
    </>
  );
}
