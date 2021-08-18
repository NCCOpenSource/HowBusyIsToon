import React from "react";
import Box from "../../atoms/Box";
import TwitterFeed from "../../atoms/TwitterFeed";
import styles from "./LocalRoadUpdates.module.css";

export default function LocalRoadUpdates() {
  return (
    <div className={styles.container}>
      <Box>
        <p className={styles.topFont}>Local Road Updates</p>
      </Box>
      <TwitterFeed profile={"NELiveTraffic"} />
    </div>
  );
}
