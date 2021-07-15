import React from "react";
import styles from "./twitterFeed.module.css";
import { TwitterTimelineEmbed } from "react-twitter-embed";

const TwitterFeedNexus = () => {
  return (
    <div className={styles.TrafficFeed}>
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="My_Metro"
        // options={{ height: 400 }}
        options={{ height: 709 }}
      />
    </div>
  );
};

export default TwitterFeedNexus;
