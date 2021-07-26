import React from "react";
import Layout from "../components/layout";
import Parking from "../components/templates/Parking";

export default function index() {
  return (
    <Layout pageTitle='Parking'>
      <Parking />
    </Layout>
  );
}
