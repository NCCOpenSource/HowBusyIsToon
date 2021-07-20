import React from "react";
import Box from "../../atoms/Box";
import TwitterFeedNETravel from "../../atoms/TwitterFeedNETravel";
import styles from "./LocalRoadUpdates.module.css";
export default function LocalRoadUpdates() {
  return (
    <div className={styles.container}>
      <Box>
        <p className={styles.topFont}>Local Road Updates</p>
      </Box>
      <TwitterFeedNETravel />
    </div>
  );
}
