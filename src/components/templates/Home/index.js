import React, { useState } from "react";
import SimpleArticle from "../../atoms/SimpleArticle";
import Callout from "../../molecules/Callout";
import CameraFeed from "../../molecules/CameraFeed";
import CouncilLinks from "../../molecules/CouncilLinks";
import SectionExample from "../../molecules/SectionExample";
import styles from "./home.module.css";

export default function Home() {
  const [state, setState] = useState("FootFall Camera");

  return (
    <>
      <div className={styles.container}>
        <>
          <div className={styles.Callout}>
            <Callout />
          </div>
          <div className={styles.CameraFeed}>
            <CameraFeed />
          </div>
          <div className={styles.HowBusyAreRoads}>
            <SimpleArticle
              TopText="How Busy Are Roads?"
              BottomText="View live traffic updates of the busiest commuter routes in and out of
          the city centre"
            />
          </div>
          <div className={styles.HowBusyAreBuses}>
            <SimpleArticle
              TopText="How Busy Are Buses?"
              BottomText="View real time bus data on a map of the region to see exactly where
              your next bus is"
            />{" "}
          </div>
        </>

        <div className={styles.SectionExample}>
          <SectionExample />
        </div>
        <div className={styles.CouncilLinks}>
          <CouncilLinks />
        </div>
      </div>
    </>
  );
}
