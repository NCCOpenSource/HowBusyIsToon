import React from "react";
import Layout from "../components/layout";
import Home from "../components/templates/Home";
import BusMap from "../components/molecules/BusMap";
export default function index() {
  return (
    <Layout>
      <BusMap />
      <Home />
    </Layout>
  );
}
