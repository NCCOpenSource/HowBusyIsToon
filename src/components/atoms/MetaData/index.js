import React from "react";
import { Helmet } from "react-helmet";

export default function index() {
  return (
    <Helmet>
      <html lang="en"></html>
      <title>How Busy Is Newcastle</title>
      <meta
        charSet="utf-8"
        name="Your home for real time data"
        content="Various Traffic Data sets and real time footfall data associated with NewCastle City Center"
      ></meta>
      {/* <script
        src="https://sak.userreport.com/hedgehog/launcher.js"
        async
        id="userreport-launcher-script"
      ></script>
      <a
        href="https://feedback.userreport.com/a6957638-a624-43ca-aea4-dc1371cb9bd9/"
        onclick="event.preventDefault(); _urq.push(['Feedback_Open'])"
      >
        Feedback
      </a> */}

      <link rel="canonical" href="https://dreamy-hbitv2-7b8f2c.netlify.app/" />
    </Helmet>
  );
}
