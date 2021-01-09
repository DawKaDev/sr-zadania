import React, { Component } from "react";

class CTimer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0
    }
    this.updateTime = this.updateTime.bind(this);
  }

  updateTime() {
    this.setState({
      time: this.state.time + 1
    })
  }

  componentDidMount() {
    this.timer = setInterval(this.updateTime, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { time } = this.state;
    return (
      <div>(Class) You spent {time} seconds on this page</div>
    )
  }
}

export default CTimer;