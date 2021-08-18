import React from "react";
import { Timeline } from "react-twitter-widgets";
import styles from "./twitterFeed.module.css";

const TwitterFeed = ({ profile }) => {
  return (
    <div className={styles.TrafficFeed}>
      <Timeline
        dataSource={{
          sourceType: "profile",
          screenName: profile,
        }}
        options={{ id: `profile:${profile}`, height: "700" }}
      />
    </div>
  );
};

export default TwitterFeed;
