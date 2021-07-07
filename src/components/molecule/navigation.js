import React, { useState } from "react";
import styles from "./navigation.module.css";
import Dropdown from "../atom/dropdown";
import LocationIcon from "../../assets/icons/icon_location.svg";
import BurgerIcon from "../../assets/icons/icon_mobileNavButton.svg";
import CloseIcon from "../../assets/icons/icon_closeMenu.svg";
import NavMobileOverlay from "../atom/navOverlay";

export default function Nav(props) {
  const [show, setShow] = useState(false);

  const showNavOverlay = (event) => {
    console.log(show);
    event.preventDefault();
    setShow(!show);
  };
  const NavData = props.navLinks;
  const NavLinkItem = NavData.map((NavLinkItems) => (
    <Dropdown
      title={NavLinkItems.title}
      subInfo={NavLinkItems.subInfo}
    ></Dropdown>
  ));

  return (
    <div>
      <div className={styles.top}>
        <a href="/" className={styles.title}>
          How Busy Is...
        </a>
        <nav className={styles.nav}>{NavLinkItem}</nav>

        {/* mobileNav */}
        <nav className={styles.mobileNav}>
          {show ? (
            <CloseIcon
              onClick={showNavOverlay}
              className={styles.exit_button}
            ></CloseIcon>
          ) : (
            <BurgerIcon
              onClick={showNavOverlay}
              className={styles.mobile_Burger_menu}
            ></BurgerIcon>
          )}
          {show ? <NavMobileOverlay Links={props.navLinks} /> : <div />}
        </nav>
        {/* endMobileNav */}
      </div>
      <div className={styles.bottom}>
        <LocationIcon className={styles.locationIcon} />
        <span className={styles.location}>Newcastle</span>

        <ul className={styles.linkList}>
          <a3e className={styles.linkListItem} target="_blank" href="/">
            onBoarding Guide >
          </a3e>
          <a
            className={styles.linkListItem}
            target="_blank"
            href="https://newcastle.gov.uk/services/public-health-wellbeing-and-leisure/public-health-services/coronavirus-covid-19"
          >
            Council Guidance >
          </a>
          <a
            className={styles.linkListItem}
            target="_blank"
            href="https://www.gov.uk/coronavirus?gclid=CjwKCAiAkan9BRAqEiwAP9X6UULwnfwW9PPhWLDxgcsV9SRU4xHQ4pgLU-YAy4KXFvL4EDikA-4RthoCZ10QAvD_BwE"
          >
            Council Compliance >
          </a>
        </ul>
      </div>
    </div>
  );
}
