import { Link } from "gatsby";
import React, { useState } from "react";
import CloseIcon from "../../../assets/icons/icon_closeMenu.svg";
import BurgerIcon from "../../../assets/icons/icon_mobileNavButton.svg";
import Box from "../../atoms/Box";
import NavLinkItems from "../../molecules/NavLinkItems";
// import NavOverlay from "../../molecules";
import NavOverlay from "../../molecules/NavOverlay";
import styles from "./navigation.module.css";
export default function Nav(props) {
  const [show, setShow] = useState(false);

  const showNavOverlay = (event) => {
    console.log(show);
    event.preventDefault();
    setShow(!show);
  };

  // const NavLinkItemData = [
  //   {
  //     title: "City Center",

  //     subInfo: [
  //       { subTitles: "Street Cameras", slug: "" },
  //       { subTitles: "Shopping And Restaurants", slug: "shopsandrestaurants" },
  //     ],
  //   },
  //   {
  //     title: "Driving",

  //     subInfo: [
  //       { subTitles: "Roads", slug: "roads" },
  //       { subTitles: "Parking", slug: "parking" },
  //       { subTitles: "EV Charging Stations", slug: "evcharging " },
  //     ],
  //   },
  //   {
  //     title: "About",

  //     subInfo: [{ subTitles: "About", slug: "about" }],
  //   },
  // ];
  // const NavLinkItems = NavLinkItemData.map((NavLinkItems) => (
  //   <DropDown
  //     title={NavLinkItems.title}
  //     subInfo={NavLinkItems.subInfo}
  //   ></DropDown>
  // ));

  return (
    <div>
      <Box fullBorderRadius="top">
        <Link href="/" className={styles.titlecontainer}>
          <h1 className={styles.title}>
            How Busy Is...
          </h1>
        <p className={styles.Tagline}>Your home for real time data</p>

        </Link>
        <nav className={styles.nav}>
          <ul className={styles.NavLinkList}>
            <NavLinkItems/>
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
              {/* <NavLinkItems /> */}
            </NavOverlay>
          ) : (
            null
          )}
        </nav>
        {/* endMobileNav */}
      </Box>
      {/* <Box
        fullBorderRadius="bottom"
        fontColor="black"
        color="grey"
        className={styles.bottom}
      >
        <h2 className={styles.Tagline}>Your home for real time data</h2>
        <ul className={styles.linkList}>{props.children}</ul>
      </Box> */}
    </div>
  );
}
