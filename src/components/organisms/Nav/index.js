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
      <TopBox height={"112px"} fontSize={"31px"} className={styles.top}>
        <a href="/" className={styles.title}>
          How Busy Is...
        </a>
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
      </TopBox>
      <BottomBox fontSize={"25px"} height={"56px"} className={styles.bottom}>
        <LocationIcon className={styles.locationIcon} />
        <span className={styles.location}>Newcastle</span>
        <ul className={styles.linkList}>{props.children}</ul>
      </BottomBox>
    </div>
  );
}
