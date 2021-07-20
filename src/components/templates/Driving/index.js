import React, { useState } from "react";
import CarParkMap from "../../molecules/CarParkMap";
import CouncilLinks from "../../molecules/CouncilLinks";
import EVArticle from "../../molecules/EVArticle";
import EvMap from "../../molecules/EvMap";
import LocalRoadUpdates from "../../molecules/LocalRoadUpdates";
import RoadClosureAroundTown from "../../molecules/RoadClosureAroundTown";
import RoadsCameraFeed from "../../molecules/RoadsCameraFeed";
import SectionExample from "../../molecules/SectionExample";
import TrafficBusynessMap from "../../molecules/TrafficBusynessMap";
import Nav from "../../organisms/Nav";
import navStyles from "../../organisms/Nav/navExtension.module.css";
import "./Driving.css";
export default function DrivingTemplate() {
  const [state, setState] = useState("Driving-Traffic");

  console.log("🚀 ~ file: index.js ~ line 34 ~ state ~ state", state);

  return (
    <>
      {/* ////////////////////////////nav//////////////////// */}
      <Nav>
        <div
          className={
            state === "Driving-Traffic"
              ? `${navStyles.NavSubLink} ${navStyles.ActiveNavSubLink} `
              : `${navStyles.NavSubLink}  `
          }
          onClick={() => {
            setState("Driving-Traffic");
          }}
        >
          <p className={navStyles.NavSubLinkText}>Traffic    </p>
        </div>

        <div
          className={
            state === "Driving-ParkingData"
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
            state === "Driving-EvChargingStations"
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
            state === "Driving-CamerasAndMaps"
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
            <div className="Driving-TrafficBusynessMap">
              <TrafficBusynessMap />
            </div>
            <div className="Driving-RoadClosureAroundTown">
              <RoadClosureAroundTown />
            </div>
            <div className={"Driving-LocalRoadUpdates"}>
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
          <>
            <div className="Driving-EvMap">
              <EvMap />
            </div>
            <div className="Driving-EVArticle">
              <EVArticle />
            </div>
          </>
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
