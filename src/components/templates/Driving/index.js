import React, { useState } from "react";

import styles from "./Driving.module.css";
import SectionExample from "../../molecules/SectionExample";
import CouncilLinks from "../../molecules/CouncilLinks";
import Nav from "../../organisms/Nav";
import RoadClosureAroundTown from "../../molecules/RoadClosureAroundTown";
import LocalRoadUpdates from "../../molecules/LocalRoadUpdates";
import EvMap from "../../molecules/EvMap";
import "./Driving.css";

export default function DrivingTemplate() {
  const [state, setState] = useState("Driving-Traffic");

  console.log("🚀 ~ file: index.js ~ line 34 ~ state ~ state", state);

  return (
    <>
      {/* ////////////////////////////nav//////////////////// */}
      <Nav>
        <div
          className={styles.NavSubLink}
          onClick={() => {
            setState("Driving-Traffic");
          }}
        >
          <p className={styles.NavSubLinkText}>Traffic</p>
        </div>

        <div
          className={styles.NavSubLink}
          onClick={() => {
            setState("Driving-ParkingData");
          }}
        >
          <p className={styles.NavSubLinkText}>Parking Data</p>
        </div>
        <div
          className={styles.NavSubLink}
          onClick={() => {
            setState("Driving-EvChargingStations");
          }}
        >
          <p className={styles.NavSubLinkText}>Ev Charging Stations</p>
        </div>

        <div
          className={styles.NavSubLink}
          onClick={() => {
            setState("Driving-CamerasAndMaps");
          }}
        >
          <p className={styles.NavSubLinkText}>Cameras And Maps</p>
        </div>
      </Nav>
      {/* ////////////////////////////////////////////////////////////// */}
      <div className={state}>
        {state === "Driving-Traffic" ? (
          <>
            <div className="DrivingRoadClosureAroundTown">
              <RoadClosureAroundTown />
            </div>
            <div className={"DrivingLocalRoadUpdates"}>
              <LocalRoadUpdates />
            </div>
          </>
        ) : (
          ""
        )}

        {state === "Driving-EvChargingStations" ? (
          <div className="Driving-EvMap">
            <EvMap />
          </div>
        ) : (
          ""
        )}

        <div className="Driving-SectionExample">
          <SectionExample />
        </div>
        <div className={"Driving-CouncilLinks"}>
          <CouncilLinks />
        </div>
      </div>
    </>
  );
}
