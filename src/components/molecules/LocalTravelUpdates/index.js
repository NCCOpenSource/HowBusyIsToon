import React from "react";
import Box from "../../atoms/Box";
import TwitterFeed from "../../atoms/TwitterFeed";
import styles from "./LocalTravelUpdates.module.css";

export default function LocalTravelUpdates() {
  return (
    <div className={styles.container}>
      <Box>
        <p className={styles.topFont}>Local Travel Updates</p>
      </Box>
      <TwitterFeed profile={"My_Metro"} />
    </div>
  );
}
