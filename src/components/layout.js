import React from "react";
import "./base.css";
import Container from "./container";
import Navigation from "./molecule/navigation";
import styles from "./layout.module.css";
import Footer from "./footer";
import Callout from "./atom/callout";
import useViewport from "./hooks/useViewport";
// import TwitterFeed from './atom/twitterFeed'

export default function Template(props) {
  const { children } = props;

  const NavLinkItems = [
    {
      title: "City Center",
      subTitles: ["the Roads", "shops and resturants"],
      slugs: ["roads", "shopping"],
    },
    {
      title: "Driving",
      subTitles: ["the Roads", "shops and resturants"],
      slugs: ["roads", "shopping"],
    },
    {
      title: "Public Transport",
      subTitles: ["Public Transport", "shops and resturants"],
      slugs: ["roads", "shopping"],
    },
  ];
  console.log(
    "🚀 ~ file: layout.js ~ line 26 ~ Template ~ NavLinkItems",
    NavLinkItems
  );

  return (
    <Container>
      <div className={styles.top}>
        <Navigation navLinks={NavLinkItems} />
      </div>
      <div className={styles.middle}>
        <Callout />
        {/* <TwitterFeed className={styles.TrafficFeed}/> */}
        {/* {children} */}
      </div>
      <div className={styles.bottom}>
        <Footer />
      </div>
    </Container>
  );
}
