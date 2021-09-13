import React from "react";
import Container from "./container";
import "./CSS/base.css";
import styles from "./layout.module.css";
import Footer from "./organisms/Footer";
import Nav from "./organisms/Nav";

export default function Layout(props) {
  const { children } = props;

  return (
    <Container>
      <div className={styles.containerGrid}>
        <Nav />
        <main>
          {children}
        </main>
        <Footer />
      </div>
    </Container>
  );
}
