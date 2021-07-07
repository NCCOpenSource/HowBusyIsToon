import React, { useState } from "react";
import Layout from "../components/layout";
import Callout from "../components/atom/callout";
import GetFeedImage from "../components/atom/GetFeedImage";
import TimeIcon from "../assets/icons/time.svg";
import styles from "./index.module.css";
import CameraFeed from "../components/molecule/CameraFeed";

export default function index() {
  return (
    <Layout>
      <Callout />
      <CameraFeed />
    </Layout>
  );
}
