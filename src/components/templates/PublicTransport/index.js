import React, { useState } from "react";
import navStyles from "../../organisms/Nav/navExtension.module.css";
import styles from "./PublicTransport.module.css";
import SectionExample from "../../molecules/SectionExample";
import CouncilLinks from "../../molecules/CouncilLinks";
import Nav from "../../organisms/Nav";
import RoadClosureAroundTown from "../../molecules/RoadClosureAroundTown";
import LocalRoadUpdates from "../../molecules/LocalRoadUpdates";
import EvMap from "../../molecules/EvMap";
import "./PublicTransport.css";
import CarParkMap from "../../molecules/CarParkMap";
import RoadsCameraFeed from "../../molecules/RoadsCameraFeed";
import BusMap from "../../molecules/BusMap";
import TomTomMap from "../../molecules/TomtomMap";
export default function PublicTransport() {
  const [state, setState] = useState("Travel by Bus");

  console.log("🚀 ~ file: index.js ~ line 34 ~ state ~ state", state);

  return (
    <>
      {/* ////////////////////////////nav//////////////////// */}
      <Nav>
        <div
          className={
            state == "Travel by Bus"
              ? `${navStyles.NavSubLink} ${navStyles.ActiveNavSubLink} `
              : `${navStyles.NavSubLink}  `
          }
          onClick={() => {
            setState("Travel by Bus");
          }}
        >
          <p className={navStyles.NavSubLinkText}>Travel by Bus</p>
        </div>

        <div
          className={
            state == "Travelling By Metro"
              ? `${navStyles.NavSubLink} ${navStyles.ActiveNavSubLink} `
              : `${navStyles.NavSubLink}  `
          }
          onClick={() => {
            setState("Travelling By Metro");
          }}
        >
          <p className={navStyles.NavSubLinkText}>Travelling By Metro</p>
        </div>
      </Nav>
      {/* ////////////////////////////////////////////////////////////// */}
      <div className={state}>
        {state === "Travel by Bus" ? (
          <div>
            <BusMap />
          </div>
        ) : (
          ""
        )}

        {state === "Travelling By Metro" ? (
          <>
            <div className="PublicTransport-TomtomMap">
              <TomTomMap />
            </div>
            <div className="PublicTransport-RoadClosureAroundTown">
              <RoadClosureAroundTown />
            </div>
            <div className={"PublicTransport-LocalRoadUpdates"}>
              <LocalRoadUpdates />
            </div>
          </>
        ) : (
          ""
        )}

        <div className="PublicTransport-SectionExample">
          <SectionExample />
        </div>
        <div className={"PublicTransport-CouncilLinks"}>
          <CouncilLinks />
        </div>
      </div>
    </>
  );
}
