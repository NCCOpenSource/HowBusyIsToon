import React, { useState } from "react";

import styles from "./home.module.css";
import HowBusyAreBuses from "../../molecules/HowBusyAreBuses";
import HowBusyAreRoads from "../../molecules/HowBusyAreRoads";
import CameraFeed from "../../molecules/CameraFeed";
import Callout from "../../molecules/Callout";
import SectionExample from "../../molecules/SectionExample";
import CouncilLinks from "../../molecules/CouncilLinks";
import Nav from "../../organisms/Nav";
import WazeMap from "../../atoms/WazeMap";
import ShopsRestaurantsMap from "../../atoms/Shops&RestaurantsMap";
import VisitCitySafetly from "../../atoms/VisitCitySafely";
export default function Home() {
  const [state, setState] = useState("FootFall Camera");

  return (
    <>
      <Nav>
        <div
          className={styles.NavSubLink}
          onClick={() => {
            setState("FootFall Camera");
          }}
        >
          <p className={styles.NavSubLinkText}>FootFall Camera</p>
        </div>
        <div
          className={styles.NavSubLink}
          onClick={() => {
            setState("Shops And Resturants");
          }}
        >
          <p className={styles.NavSubLinkText}>Shops And Resturants</p>
        </div>
      </Nav>

      <div
        className={
          state == "FootFall Camera" ? styles.containerFF : styles.containerSR
        }
      >
        {state == "Shops And Resturants" ? (
          <>
            <div className={styles.VisitCitySafetly}>
              <VisitCitySafetly />
            </div>
            <div className={styles.ShopsRestaurantsMap}>
              <ShopsRestaurantsMap />
            </div>
          </>
        ) : (
          ""
        )}

        {state == "FootFall Camera" ? (
          <>
            <div className={styles.Callout}>
              <Callout />
            </div>
            <div className={styles.CameraFeed}>
              <CameraFeed />
            </div>{" "}
            <div className={styles.HowBusyAreRoads}>
              <HowBusyAreRoads />
            </div>
            <div className={styles.HowBusyAreBuses}>
              <HowBusyAreBuses />
            </div>
          </>
        ) : (
          ""
        )}

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
