import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeTimezone, changeTimeformat } from '../redux/reducer';

class Dropdown extends Component {
  constructor() {
    super()
    this.state = {
      displayMenu: false,
    }
  }

  toggleMenu = (e) => {
    e.target.classList.toggle("fa-bars-open")
  }
  handleTimeZoneChange = (e) => {
    this.props.changeTimezone(e.target.value)
  }
  handleTimeFormatChange = (e) => {
    this.props.changeTimeformat(e.target.value)
  }

  render() {
    return (
      <div>
          <button onClick={this.toggleMenu} className="fas fa-bars-closed">Dropdown</button>
          Set Timezone: <select name="timezone" onChange={this.handleTimeZoneChange} defaultValue="Mountain">
            <option value="Hawaii">Hawaii</option>
            <option value="Alaska">Alaska</option>
            <option value="Pacific">Pacific</option>
            <option value="Mountain" >Mountain</option>
            <option value="Central">Central</option>
            <option value="Eastern">Eastern</option>
            <option value="gmt">GMT</option>
          </select>
          Clock format: <select name="timeformat" onChange={this.handleTimeFormatChange}>
            <option value="HH:mm:ss - zz">HHH:mm:ss - 24hr + TimeZone</option>
            <option value="h:mm:ss A - zz">HH:mm:ss - 12hr + TimeZone</option>
            <option value="HH:mm:ss" selected="selected">HH:mm:ss - 24hr</option>
            <option value="h:mm:ss A">HH:mm:ss 12hr</option>
            <option value="HH:mm">HH:mm - 24hr</option>
            <option value="h:mm A">HH:mm - 12hr</option>
          </select>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    timezone: state.timezone,
    timeformat: state.timeformat
  }
}

export default connect(mapStateToProps, { changeTimezone, changeTimeformat })(Dropdown)