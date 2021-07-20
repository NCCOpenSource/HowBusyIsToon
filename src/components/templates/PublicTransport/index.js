import React, { useState } from "react";
import BusMap from "../../molecules/BusMap";
import CouncilLinks from "../../molecules/CouncilLinks";
import LocalTravelUpdates from "../../molecules/LocalTravelUpdates";
import RoadClosureAroundTown from "../../molecules/RoadClosureAroundTown";
import SectionExample from "../../molecules/SectionExample";
import Nav from "../../organisms/Nav";
import navStyles from "../../organisms/Nav/navExtension.module.css";
import "./PublicTransport.css";
export default function PublicTransport() {
  const [state, setState] = useState("Travel by Bus");

  console.log("🚀 ~ file: index.js ~ line 34 ~ state ~ state", state);

  return (
    <>
      {/* ////////////////////////////nav//////////////////// */}
      <Nav>
        <div
          className={
            state === "Travel by Bus"
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
            state === "Travelling By Metro"
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
         
            <div className="PublicTransport-RoadClosureAroundTown">
              <RoadClosureAroundTown />
            </div>
            <div className={"PublicTransport-LocalTravelUpdates"}>
              <LocalTravelUpdates />
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
