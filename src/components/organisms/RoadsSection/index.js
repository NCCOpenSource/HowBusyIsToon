import React, { useState } from "react";
import GetRoadFeedImage from "../../atoms/GetRoadFeedImage";
import SimpleArticle from "../../atoms/SimpleArticle";
import styles from "./RoadSection.module.css";

export default function RoadsSection() {
  const [option, setOption] = useState(0);
  function handleChange(event) {
    setOption(event.target.value);
  }

  return (
    <div className={styles.container}>
      {/* ////////////////////Selector/////////////////////// */}
      <div className={styles.select}>
        <div className={styles.selectbox}>
          <select
            className={styles.selector}
            name="option"
            onChange={handleChange}
            onBlur={handleChange}
          >
            <option className={styles.option} value="0">
              Coast Road (Corner House 1)
            </option>
            <option className={styles.option} value="1">
              Coast Road (Corner House 2)
            </option>
            <option className={styles.option} value="2">
              Cowgate junction
            </option>
            <option className={styles.option} value="3">
              Mosley St (Tyne Bridge)
            </option>
            <option className={styles.option} value="4">
              Gosforth High St
            </option>
          </select>
        </div>
      </div>
      {/* /////////////////////////////////////////// */}
      <div className={styles.RoadsCameraFeed}>
        <GetRoadFeedImage option={option} />
      </div>

      <div className={styles.RoadsLookingBusy}>
        <h1 className={styles.calloutText}>
          Roads looking busy? Have you considered cycling or walking instead?
          Our useful links provide tools to help you plan your journey.
        </h1>
      </div>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.google.co.uk/maps"
        className={styles.WalkingOrCycling}
      >
        <SimpleArticle
          TopText="Walking or Cycling?"
          BottomText="User Google Maps to help you decide on which route you’d like to take"
        />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href={"https://www.nexus.org.uk/cycle"}
        className={styles.CycleParking}
      >
        <SimpleArticle
          TopText="Cycle Parking?"
          BottomText=" Nexus Cycle lockers are located around the City Centre. Find out where
      they are located here"
        />
      </a>
    </div>
  );
}
