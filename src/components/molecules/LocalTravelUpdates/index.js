import React from "react";
import Box from "../../atoms/Box";
import TwitterFeed from "../../atoms/TwitterFeed";
import styles from "./LocalTravelUpdates.module.css";

export default function LocalTravelUpdates() {
  return (
    <div className={styles.container}>
      <Box>
        <h2 className={styles.topFont}>Local travel updates</h2>
      </Box>
      <TwitterFeed profile={"My_Metro"} />
    </div>
  );
}
