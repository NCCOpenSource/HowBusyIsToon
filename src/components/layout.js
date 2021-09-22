import React from "react";
import Container from "./container";
import "./CSS/base.css";
import styles from "./layout.module.css";
import Footer from "./organisms/Footer";
import Nav from "./organisms/Nav";
import Box from "./atoms/Box";

export default function Layout(props) {
  const { children } = props;

  return (
    <Container>
      {/* <div className={styles.closed}>
        <div>
          <Box>
            <h1>How Busy Is Toon is currently closed for maintenance</h1>
          </Box>
          <Box color={"grey"} fontColor={"black"}>
            <h1>
              We will be back shortly with more real time data about your city
              centre
            </h1>
          </Box>
        </div>
      </div> */}
      <div className={styles.containerGrid}>
        <header className={styles.header}>
          <Nav />
        </header>

        <main className={styles.main}>{children}</main>
        <footer className={styles.footer}>
          <Footer />
        </footer>
      </div>
    </Container>
  );
}
