import React, { useState } from "react";
import Layout from "../components/layout";
import Callout from "../components/molecules/Callout";
import CameraFeed from "../components/molecules";
import HowBusyAreRoads from "../components/molecules";
import HowBusyAreBuses from "../components/molecules";

export default function index() {
  return (
    <Layout>
      <Callout />
      <CameraFeed />
      <HowBusyAreRoads/>
      <HowBusyAreBuses/>
    </Layout>
  );
}
