import React from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import styles from "./twitterFeed.module.css";

const TwitterFeedNexus = () => {
  return (
    <div className={styles.TrafficFeed}>
      <a
        class="twitter-timeline"
        data-height="700"
        href="https://twitter.com/My_Metro?ref_src=twsrc%5Etfw"
      >
        Tweets by My_Metro
      </a>
      <script
        async
        src="https://platform.twitter.com/widgets.js"
        charset="utf-8"
      ></script>
    </div>
  );
};

export default TwitterFeedNexus;
