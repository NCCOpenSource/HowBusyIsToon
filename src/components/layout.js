import React from "react";
import "./base.css";
import Container from "./container";
import Nav from "./organisms/Nav";
import styles from "./layout.module.css";
import Footer from "./organisms/Footer";
import EmojicomWidget from "./molecules/EmojicomWidget/index";

export default function Layout(props) {
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
        <Nav navLinks={NavLinkItems} />
      </div>
    
      <div className={styles.middle}>{children}</div>
      <div className={styles.bottom}>
        <Footer />
      </div>
    </Container>
  );
}
