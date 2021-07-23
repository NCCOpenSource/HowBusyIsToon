import React from "react";
import Layout from "../components/layout";
import About from "../components/templates/About";
import Home from "../components/templates/Home";

export default function index() {
  return (
    <Layout>
      <About />
    </Layout>
  );
}
