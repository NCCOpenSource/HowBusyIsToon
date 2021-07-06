import React from "react";
import "./base.css";
import Container from "./container";
import Navigation from "./navigation";
import styles from "./layout.module.css";
import Footer from "./footer";
import Callout from "./micro/callout";

class Template extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <Container>
        <div className={styles.top}>
          <Navigation />
          <div className={styles.middle}>
            <Callout />
            {children}
          </div>
        </div>
        <div className={styles.bottom}>
          <Footer />
        </div>
      </Container>
    );
  }
}

export default Template;
