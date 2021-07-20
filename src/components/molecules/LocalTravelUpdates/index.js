import React from "react";
import Box from "../../atoms/Box";
import TwitterFeedNexus from "../../atoms/TwitterFeedNexus";
import styles from "./LocalTravelUpdates.module.css";
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
