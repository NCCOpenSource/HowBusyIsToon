import React from "react";
import { Link } from "gatsby";
import styles from './NavLinkItems.module.css'
export default function NavLinkItems() {
  return (
    <>
      <Link
        className={styles.navLinkItems}
        activeClassName={styles.navLinkItemsGrey}
        to="/"
      >
        <p className={styles.navLinkItemText}>City Center</p>
      </Link>
      <Link
        className={styles.navLinkItems}
        activeClassName={styles.navLinkItemsGrey}
        to="/driving"
      >
        <p className={styles.navLinkItemText}>Driving</p>
      </Link>
      <Link
        className={styles.navLinkItems}
        activeClassName={styles.navLinkItemsGrey}
        to="/transport"
      >
        <p className={styles.navLinkItemText}>Public Transport</p>
      </Link>
      <Link
        className={styles.navLinkItems}
        activeClassName={styles.navLinkItemsGrey}
        to="/travel"
      >
        <p className={styles.navLinkItemText}>Active Travel</p>
      </Link>
    </>
  );
}
