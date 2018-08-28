import React, { Component } from 'react';
import Timer from 'simple-react-timer';

class FocusTimer extends Component {
  constructor(props) {
    super(props)
    this.state = { // hit
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
      }, (this.props.focusPeriod * 1000))
    } else if (this.state.timerType === "focus" && this.state.cycle !== this.props.numCycles) {
      console.log('focus => short')
      setTimeout(() => {
        this.setState({
          timerType: "short",
        })
      }, (this.props.focusPeriod * 1000))
    } else if (this.state.timerType === "short") {
      console.log('short => focus')
      setTimeout(() => {
        this.setState({
          timerType: "focus",
          cycle: this.state.cycle + 1
        })
      }, (this.props.shortBreak * 1000))
    } else if (this.state.timerType === "long") {
      console.log('long => focus')
      setTimeout(() => {
        this.setState({
          timerType: "focus",
          cycle: 1
        })
      }, (this.props.longBreak * 1000))
    }

    //   // document.getElementById("focus-timer").classList.toggle("hide-timer"
    console.log('state is now', this.state)

    let FocusPeriodTimer = <Timer startTime={Date.parse(new Date()) + ((this.props.focusPeriod * 1000) + 499)} countDown />; // this should be 60,000
    let shortBreakTimer = <Timer startTime={Date.parse(new Date()) + ((this.props.shortBreak * 1000) + 499)} countDown />; // this should be 60,000
    let longBreakTimer = <Timer startTime={Date.parse(new Date()) + ((this.props.longBreak * 1000) + 499)} countDown />; // this should be 60,000

    return (
      <div>
        {
          this.state.timerType === "focus"
            ?
            <div id="focus-timer">
              {FocusPeriodTimer}
            </div>
            :
            this.state.timerType === "short"
              ?
              <div id="short-break-timer">
                {shortBreakTimer}
              </div>
              :
              <div id="short-break-timer">
                {longBreakTimer}
              </div>
        }
      </div>
    )
  }
}

export default FocusTimer;