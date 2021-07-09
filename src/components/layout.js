import React from "react";
import "./base.css";
import Container from "./container";
import Navigation from "./organisms";
import styles from "./layout.module.css";
import Footer from "./templates";

export default function Template(props) {
  const { children } = props;

  const NavLinkItems = [
    {
      title: "City Center",

      subInfo: [
        { subTitles: "the Roads", slug: "road" },
        { subTitles: "Resturants", slug: "restaurant" },
        { subTitles: "Shopping", slug: "shopping" },
      ],
    },
    {
      title: "City Center2",

      subInfo: [
        { subTitles: "the Roads", slug: "road" },
        { subTitles: "Resturants", slug: "restaurant" },
        { subTitles: "Shopping", slug: "shopping" },
      ],
    },
  ];

  return (
    <Container>
      <div className={styles.top}>
        <Navigation navLinks={NavLinkItems} />
      </div>
      <div className={styles.middle}>{children}</div>
      <div className={styles.bottom}>
        <Footer />
      </div>
    </Container>
  );
}
