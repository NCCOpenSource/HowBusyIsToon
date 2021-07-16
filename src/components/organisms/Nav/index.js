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

import NavLinkItems from "../../molecules/NavLinkItems";
export default function Nav(props) {
  const [show, setShow] = useState(false);

  const showNavOverlay = (event) => {
    console.log(show);
    event.preventDefault();
    setShow(!show);
  };

  return (
    <div>
      <Box fullBorderRadius="top">
        {" "}
        <div className={styles.titlecontainer}>
          <a href="/" className={styles.title}>
            How Busy Is...
          </a>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.NavLinkList}>
            <NavLinkItems />
          </ul>
        </nav>
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
          {show ? (
            <NavOverlay>
              <NavLinkItems />
            </NavOverlay>
          ) : (
            <div />
          )}
        </nav>
        {/* endMobileNav */}
      </Box>
      <Box
        fullBorderRadius="bottom"
        fontColor="black"
        color="grey"
        className={styles.bottom}
      >
        <LocationIcon className={styles.locationIcon} />
        <span className={styles.location}>Newcastle</span>
        <ul className={styles.linkList}>{props.children}</ul>
      </Box>
    </div>
  );
}
