import React from "react";
import { Layout } from "../components/layout";
import {
  HowBusyAreRoads,
  HowBusyAreBuses,
  CameraFeed,
  Callout,
} from "../components/molecules";

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
