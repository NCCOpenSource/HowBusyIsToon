import React, { useState } from "react";

import styles from "./Driving.module.css";
import HowBusyAreBuses from "../../molecules/HowBusyAreBuses";
import HowBusyAreRoads from "../../molecules/HowBusyAreRoads";
import CameraFeed from "../../molecules/CameraFeed";
import Callout from "../../molecules/Callout";
import SectionExample from "../../molecules/SectionExample";
import CouncilLinks from "../../molecules/CouncilLinks";
import Nav from "../../organisms/Nav";
import WazeMap from "../../atoms/WazeMap";
import VisitCitySafetly from "../../atoms/VisitCitySafely";

export default function DrivingTemplate() {
  const [state, setState] = useState("FootFall Camera");

  return (
    <>
      <Nav>
        <div
          className={styles.NavSubLink}
          onClick={() => {
            setState("Parking Data");
          }}
        >
          <p className={styles.NavSubLinkText}>Parking Data</p>
        </div>
        <div
          className={styles.NavSubLink}
          onClick={() => {
            setState("Ev Charging Stations");
          }}
        >
          <p className={styles.NavSubLinkText}>Ev Charging Stations</p>
        </div>

        <div
          className={styles.NavSubLink}
          onClick={() => {
            setState("Cameras And Maps");
          }}
        >
          <p className={styles.NavSubLinkText}>Cameras And Maps</p>
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
            <div className={styles.WazeMap}>
              <WazeMap />
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
