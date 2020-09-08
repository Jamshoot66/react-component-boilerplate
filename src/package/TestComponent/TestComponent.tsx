import React from "react";
import styles from "./TestComponent.module.scss";

interface Props {
  title: string;
}

interface State {
  counter: number;
}

class TestComponent extends React.Component<Props, State> {
  private readonly timer: NodeJS.Timer;

  constructor(props: Props) {
    super(props);

    this.state = {
      counter: 0,
    };

    this.timer = setInterval(
      () =>
        this.setState((prev) => ({
          counter: prev.counter + 1,
        })),
      250
    );
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { counter } = this.state;
    const { title } = this.props;
    return (
      <div className={styles.test}>
        {title} {' '}
        <span className={styles.counter}>{counter}</span>
      </div>
    );
  }
}

export default TestComponent;
