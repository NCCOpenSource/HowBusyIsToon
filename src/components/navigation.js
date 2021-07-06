import React from "react";
import styles from "./navigation.module.css";
import Dropdown from "./micro/dropdown";
import Icon from "../assets/icons/icon_location.svg";

export default function Nav() {
  return (
    <>
      <div className={styles.top}>
        <a href="/" className={styles.title}>
          How Busy Is...
        </a>
        <nav className={styles.nav}>
          <Dropdown
            title="City Center"
            subTitles={["The Roads", "Shops & restuarants"]}
          ></Dropdown>
          <Dropdown
            title="Driving"
            subTitles={["The Roads", "Shops & restuarants"]}
          ></Dropdown>
          <Dropdown
            title="Public Transport"
            subTitles={["The Roads", "Shops & restuarants"]}
          ></Dropdown>
          {/* <Dropdown
            title="Active Travel"
            subTitles={["The Roads", "Shops & restuarants"]}
          ></Dropdown> */}
        </nav>
      </div>
      <div className={styles.bottom}>
        <Icon className={styles.locationIcon} />
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
    </>
  );
}
