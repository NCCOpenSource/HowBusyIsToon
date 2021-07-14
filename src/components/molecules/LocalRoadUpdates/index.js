import React from "react";
import TwitterFeedNexus from "../../atoms/TwitterFeedNETravel";
import { TopBox } from "../../atoms/Box/TopBox";
import styles from "./LocalRoadUpdates.module.css";

export default function LocalRoadUpdates() {
  return (
    <div className={styles.container}>
      <TopBox height={"72px"} fontSize={"31px"}>
        <p className={styles.topFont}>Local Road Updates</p>
      </TopBox>
      <TwitterFeedNexus />
    </div>
  );
}
