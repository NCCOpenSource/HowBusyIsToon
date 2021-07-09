import React, { useState } from "react";
import styles from "./navigation.module.css";
// import DropDown from "../../atoms";
import DropDown from "../../atoms/DropDown";
import LocationIcon from "../../../assets/icons/icon_location.svg";
import BurgerIcon from "../../../assets/icons/icon_mobileNavButton.svg";
import CloseIcon from "../../../assets/icons/icon_closeMenu.svg";
// import NavOverlay from "../../molecules";
import NavOverlay from "../../molecules/NavOverlay";
import Box from "../../atoms/Box";
import { TopBox } from "../../atoms/Box/TopBox";
import { BottomBox } from "../../atoms/Box/BottomBox";

export default function Nav(props) {
  const [show, setShow] = useState(false);

  const showNavOverlay = (event) => {
    console.log(show);
    event.preventDefault();
    setShow(!show);
  };
  const NavData = props.navLinks;
  const NavLinkItem = NavData.map((NavLinkItems) => (
    <DropDown
      title={NavLinkItems.title}
      subInfo={NavLinkItems.subInfo}
    ></DropDown>
  ));

  return (
    <div>
      <TopBox height={"112px"} fontSize={"31px"} className={styles.top}>
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
          {show ? <NavOverlay Links={props.navLinks} /> : <div />}
        </nav>
        {/* endMobileNav */}
      </TopBox>
      <BottomBox fontSize={"25px"} height={"56px"} className={styles.bottom}>
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
      </BottomBox>
    </div>
  );
}
