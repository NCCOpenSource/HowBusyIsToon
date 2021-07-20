import React from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import styles from "./twitterFeed.module.css";

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
