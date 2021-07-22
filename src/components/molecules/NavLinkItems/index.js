import { Link } from "gatsby";
import React from "react";
import styles from "./NavLinkItems.module.css";
export default function NavLinkItems() {
  return (
    <>
      <Link
        className={styles.navLinkItems}
        activeClassName={styles.navLinkItemsGrey}
        to="/shopsandrestaurants"
        to="/"
      >
        <p className={styles.navLinkItemText}>City Center</p>
        <div className={styles.subnavLinkItems}>
          <Link
            to="/"
            activeClassName={styles.activesubnavLinkItemText}
            className={styles.subnavLinkItemText}
          >
            City Center
          </Link>
          <Link
            to="/shopsandrestaurants"
            activeClassName={styles.activesubnavLinkItemText}
            className={styles.subnavLinkItemText}
          >
            Shopping And Restaurants
          </Link>
        </div>
      </Link>
      <Link
        className={styles.navLinkItems}
        activeClassName={styles.navLinkItemsGrey}
        to="/parking"
        to="/evcharging"
        to="/roads"
      >
        <p className={styles.navLinkItemText}>Driving</p>
        <div className={styles.subnavLinkItems}>
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
        </div>
      </Link>

      <Link
        className={styles.navLinkItems}
        activeClassName={styles.navLinkItemsGrey}
        to="/nexus"
        to="/transport"
      >
        <p className={styles.navLinkItemText}>Public Transport</p>

        <div className={styles.subnavLinkItems}>
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
        </div>
      </Link>

      <Link
        className={styles.navLinkItems}
        activeClassName={styles.navLinkItemsGrey}
        to="/about"
      >
        <p className={styles.navLinkItemText}>About</p>
      </Link>
    </>
  );
}
