import React, { Component } from 'react';
import Timer from 'simple-react-timer';

class FocusTimer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cycle: 1,
      timerType: "focus"
    }
  }

  render() {
    if (this.state.timerType === "focus" && this.state.cycle === this.props.numCycles) {
      console.log('focus => long')
      setTimeout(() => {
        this.setState({
          timerType: "long",
          cycle: 0
        })
      }, (this.props.focusPeriod * 60000))
    } else if (this.state.timerType === "focus" && this.state.cycle !== this.props.numCycles) {
      console.log('focus => short')
      setTimeout(() => {
        this.setState({
          timerType: "short",
        })
      }, (this.props.focusPeriod * 60000))
    } else if (this.state.timerType === "short") {
      console.log('short => focus')
      setTimeout(() => {
        this.setState({
          timerType: "focus",
          cycle: this.state.cycle + 1
        })
      }, (this.props.shortBreak * 60000))
    } else if (this.state.timerType === "long") {
      console.log('long => focus')
      setTimeout(() => {
        this.setState({
          timerType: "focus",
          cycle: 1
        })
      }, (this.props.longBreak * 60000))
    }

    let FocusPeriodTimer = <Timer startTime={Date.parse(new Date()) + ((this.props.focusPeriod * 60000) + 499)} countDown />;
    let shortBreakTimer = <Timer startTime={Date.parse(new Date()) + ((this.props.shortBreak * 60000) + 499)} countDown />;
    let longBreakTimer = <Timer startTime={Date.parse(new Date()) + ((this.props.longBreak * 60000) + 499)} countDown />;

    return (
      <div className="focus-timer-container">
        {
          this.state.timerType === "focus"
            ?
            <div className="break-timer">
              Focus
              {FocusPeriodTimer}
            </div>
            :
            this.state.timerType === "short"
              ?
              <div className="break-timer">
                Break
                {shortBreakTimer}
              </div>
              :
              <div className="break-timer">
                Break
                {longBreakTimer}
              </div>
        }
      </div>
    )
  }
}

export default FocusTimer;