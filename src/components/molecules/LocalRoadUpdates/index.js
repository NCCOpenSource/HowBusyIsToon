import React from "react";
import Box from "../../atoms/Box";
import TwitterFeed from "../../atoms/TwitterFeed";
import styles from "./LocalRoadUpdates.module.css";

export default function LocalRoadUpdates() {
  return (
    <div className={styles.container}>
      <Box>
        <h2 className={styles.topFont}>Local road updates</h2>
      </Box>
      <TwitterFeed profile={"NELiveTraffic"} />
    </div>
  );
}
