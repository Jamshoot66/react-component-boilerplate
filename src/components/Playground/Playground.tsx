import React from "react";
import TestComponent from "package/TestComponent";
import styles from "./Playground.module.scss";

interface props {}

class Playground extends React.Component<props> {
  render() {
    return (
      <section className={styles.something}>
        <TestComponent title="Test counter" />
      </section>
    );
  }
}

export default Playground;
