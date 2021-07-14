import React from "react";
import TwitterFeedNexus from "../../atoms/TwitterFeedNETravel";
import styles from "./LocalRoadUpdates.module.css";
import Box from "../../atoms/Box";
export default function LocalRoadUpdates() {
  return (
    <div className={styles.container}>
      <Box >
        <p className={styles.topFont}>Local Road Updates</p>
      </Box>
      <TwitterFeedNexus />
    </div>
  );
}
