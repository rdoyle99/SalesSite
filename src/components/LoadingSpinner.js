import React from 'react'
import './styles/Footer.css';
import { Line, Circle } from 'rc-progress';

class LoadingSpinner extends React.Component {
  constructor() {
    super();
    this.state = {
      percent: 0,
    };
    this.increase = this.increase.bind(this);
    this.restart = this.restart.bind(this);
  }

  componentDidMount() {
    this.increase();
  }

  increase() {
    const percent = this.state.percent + 1;
    if (percent >= 100) {
      clearTimeout(this.tm);
      return;
    }
    this.setState({ percent });
    this.tm = setTimeout(this.increase, 35);
  }

  restart() {
    clearTimeout(this.tm);
    this.setState({ percent: 0 }, () => {
      this.increase();
    });
  }

  render() {
    return (

      <div class="prog"style={{ margin: 10, width: "full"}}>
        <Line class="prog" strokeWidth="6" percent={this.state.percent} />
        <h1 class="overLoad"> Loading... </h1>
      </div>

    );
  }
}


export default LoadingSpinner
