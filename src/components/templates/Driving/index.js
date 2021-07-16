import React, { useState } from "react";
import navStyles from "../../organisms/Nav/navExtension.module.css";
import styles from "./Driving.module.css";
import SectionExample from "../../molecules/SectionExample";
import CouncilLinks from "../../molecules/CouncilLinks";
import Nav from "../../organisms/Nav";
import RoadClosureAroundTown from "../../molecules/RoadClosureAroundTown";
import LocalRoadUpdates from "../../molecules/LocalRoadUpdates";
import EvMap from "../../molecules/EvMap";
import "./Driving.css";
import CarParkMap from "../../molecules/CarParkMap";
import RoadsCameraFeed from "../../molecules/RoadsCameraFeed";

export default function DrivingTemplate() {
  const [state, setState] = useState("Driving-Traffic");

  console.log("🚀 ~ file: index.js ~ line 34 ~ state ~ state", state);

  return (
    <>
      {/* ////////////////////////////nav//////////////////// */}
      <Nav>
        <div
          className={
            state == "Driving-Traffic"
              ? `${navStyles.NavSubLink} ${navStyles.ActiveNavSubLink} `
              : `${navStyles.NavSubLink}  `
          }
          onClick={() => {
            setState("Driving-Traffic");
          }}
        >
          <p className={navStyles.NavSubLinkText}>Traffic</p>
        </div>

        <div
          className={
            state == "Driving-ParkingData"
              ? `${navStyles.NavSubLink} ${navStyles.ActiveNavSubLink} `
              : `${navStyles.NavSubLink}  `
          }
          onClick={() => {
            setState("Driving-ParkingData");
          }}
        >
          <p className={navStyles.NavSubLinkText}>Parking Data</p>
        </div>
        <div
          className={
            state == "Driving-EvChargingStations"
              ? `${navStyles.NavSubLink} ${navStyles.ActiveNavSubLink} `
              : `${navStyles.NavSubLink}  `
          }
          onClick={() => {
            setState("Driving-EvChargingStations");
          }}
        >
          <p className={navStyles.NavSubLinkText}>Ev Charging Stations</p>
        </div>

        <div
          className={
            state == "Driving-CamerasAndMaps"
              ? `${navStyles.NavSubLink} ${navStyles.ActiveNavSubLink} `
              : `${navStyles.NavSubLink}`
          }
          onClick={() => {
            setState("Driving-CamerasAndMaps");
          }}
        >
          <p className={navStyles.NavSubLinkText}>Cameras And Maps</p>
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

        {state === "Driving-ParkingData" ? (
          <div>
            <CarParkMap />
          </div>
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

        {state === "Driving-CamerasAndMaps" ? (
          <div className="Driving-CamerasAndMaps">
            <RoadsCameraFeed />
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
