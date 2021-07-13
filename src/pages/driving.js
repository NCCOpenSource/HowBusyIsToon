import React from "react";
import Layout from "../components/layout";
import DrivingTemplate from "../components/templates/Driving";
import MyMap from "../components/atoms/LeafletMap";
import EvMap from "../components/molecules/EvMap";

export default function Driving() {
  return (
    <Layout>
      <EvMap />
      <DrivingTemplate />
    </Layout>
  );
}
