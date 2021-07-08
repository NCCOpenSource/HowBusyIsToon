import React from "react";
import "./base.css";
import Container from "./container";
import Navigation from "./molecule/navigation";
import styles from "./layout.module.css";
import Footer from "./footer";
import Callout from "./atom/callout";
// import useViewport from "./hooks/useViewport";
import TwitterFeed from "./atom/twitterFeed";
import CarParksData from "./atom/carParksData";
import GetFeedImage from "./atom/GetFeedImage";
import WazeMap from "./atom/WazeMap";

import HowBusyAreRoads from "./molecule/howBusyAreRoads";
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
      <div className={styles.middle}>
        {/* <Callout /> */}
        {/* <TwitterFeed /> */}
        {/* <WazeMap /> */}
        {/* <CarParksData/> */}
        {/* <GetFeedImage /> */}
        <HowBusyAreRoads/>
        {children}
      </div>
      <div className={styles.bottom}>
        <Footer />
      </div>
    </Container>
  );
}
