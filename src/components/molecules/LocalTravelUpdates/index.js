import React from "react";
import TwitterFeedNexus from "../../atoms/TwitterFeedNexus";
import styles from "./LocalTravelUpdates.module.css";
import Box from "../../atoms/Box";
export default function LocalTravelUpdates() {
  return (
    <div className={styles.container}>
      <Box>
        <p className={styles.topFont}>Local Travel Updates</p>
      </Box>
      <TwitterFeedNexus />
    </div>
  );
}
