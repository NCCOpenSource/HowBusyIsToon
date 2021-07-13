import React from "react";
import Layout from "../components/layout";
import DrivingTemplate from "../components/templates/Driving";
import MyMap from "../components/atoms/LeafletMap";

export default function Driving() {
  return (
    <Layout>
      <DrivingTemplate />
    </Layout>
  );
}
