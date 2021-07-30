import React from "react";
import styles from "./twitterFeed.module.css";

const TwitterFeedNELive = () => {
  return (
    <div className={styles.TrafficFeed}>
      <a
        class="twitter-timeline"
        data-height="700"
        data-theme="light"
        href="https://twitter.com/NELiveTraffic?ref_src=twsrc%5Etfw"
      >
        Tweets by NELiveTraffic
      </a>
      <script
        async
        src="https://platform.twitter.com/widgets.js"
        charset="utf-8"
      ></script>
    </div>
  );
};

export default TwitterFeedNELive;
