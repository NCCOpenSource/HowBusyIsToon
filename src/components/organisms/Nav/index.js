import { Link } from "gatsby";
import React, { useState } from "react";
import CloseIcon from "../../../assets/icons/icon_closeMenu.svg";
import BurgerIcon from "../../../assets/icons/icon_mobileNavButton.svg";
import Box from "../../atoms/Box";
import NavLinkItems from "../../molecules/NavLinkItems";
import NavOverlay from "../../molecules/NavOverlay";
import styles from "./navigation.module.css";

export default function Nav(props) {
  const [show, setShow] = useState(false);

  const showNavOverlay = (event) => {
    event.preventDefault();
    setShow(!show);
  };

  return (
    <div>
      <Box fullBorderRadius="full">
        <Link to="/" className={styles.titlecontainer}>
          <h1 className={styles.title}>How Busy Is Toon</h1>
          <p className={styles.Tagline}>Your home for real time data</p>
        </Link>
        <nav className={styles.nav}>
          <ul className={styles.NavLinkList}>
            <NavLinkItems />
          </ul>
        </nav>
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
          {show ? <NavOverlay /> : null}
        </nav>
      </Box>
    </div>
  );
}
