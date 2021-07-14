import React from "react";
import styles from "./twitterFeed.module.css";
import { TwitterTimelineEmbed } from "react-twitter-embed";

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
