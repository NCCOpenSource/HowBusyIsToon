import React from "react";
import WazeMap from "../components/atoms/WazeMap";
import Layout from "../components/layout";
import Home from "../components/templates/Home";
export default function index() {
  return (
    <Layout>
      <WazeMap/>
      <Home />
    </Layout>
  );
}
