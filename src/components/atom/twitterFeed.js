import React from "react";
import styles from "./twitterFeed";
import { TwitterTimelineEmbed } from "react-twitter-embed";

const TwitterFeed = () => {
  return (
    <div className={styles.TrafficFeed}>
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="My_Metro"
        options={{ height: 400 }}
      />
    </div>
  );
};

export default TwitterFeed;
