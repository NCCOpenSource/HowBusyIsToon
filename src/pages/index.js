import React from "react";
import Layout from "../components/layout";
import HowBusyAreBuses from "../components/molecules/HowBusyAreBuses";
import HowBusyAreRoads from "../components/molecules/HowBusyAreRoads";
import CameraFeed from "../components/molecules/CameraFeed";
import Callout from "../components/molecules/Callout";



export default function index() {
  return (
    <Layout>
      <Callout />
      <CameraFeed />
      <HowBusyAreRoads />
      <HowBusyAreBuses />
    </Layout>
  );
}
