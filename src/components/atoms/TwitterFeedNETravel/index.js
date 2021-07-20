import React from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import styles from "./twitterFeed.module.css";

const TwitterFeedNELive = () => {
  return (
    <div className={styles.TrafficFeed}>
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="NELiveTraffic"
        // options={{ height: 400 }}
        options={{ height: 709 }}
      />
    </div>
  );
};

export default TwitterFeedNELive;
