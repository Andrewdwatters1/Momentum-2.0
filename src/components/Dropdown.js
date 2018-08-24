import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import { changeTimezone, changeTimeformat, logout } from '../redux/reducer';

class Dropdown extends Component {

  handleTimeZoneChange = (e) => {
    this.props.changeTimezone(e.target.value)
  }
  handleTimeFormatChange = (e) => {
    this.props.changeTimeformat(e.target.value)
  }

  render() {
    return (
      <div>
        <DropdownButton>
          <MenuItem eventKey="1">Productivity Mode</MenuItem>
          <MenuItem eventKey="2">Focus Timer</MenuItem>
          <MenuItem eventKey="3">
            {
              this.props.user
                ?
                <Link to="/" onClick={this.props.logout}><button>Logout</button></Link>
                :
                <Link to=""><button>login</button></Link>
            }
          </MenuItem>
          <DropdownButton eventKey="4"> Settings
          <MenuItem>
              Set Timezone: <select name="timezone" onChange={this.handleTimeZoneChange} defaultValue="Mountain" id="timezone-select" className="menu-item" href="/">
                <option value="Hawaii">Hawaii</option>
                <option value="Alaska">Alaska</option>
                <option value="Pacific">Pacific</option>
                <option value="Mountain" >Mountain</option>
                <option value="Central">Central</option>
                <option value="Eastern">Eastern</option>
                <option value="gmt">GMT</option>
              </select>
            </MenuItem>
            <MenuItem>
              Clock format: <select name="timeformat" onChange={this.handleTimeFormatChange} id="timeformat-select" className="menu-item" href="/">
                <option value="HH:mm:ss - zz">HHH:mm:ss - 24 T</option>
                <option value="h:mm:ss A - zz">HH:mm:ss - 12 T</option>
                <option value="HH:mm:ss" selected="selected">HH:mm:ss - 24</option>
                <option value="h:mm:ss A">HH:mm:ss - 12</option>
                <option value="HH:mm">HH:mm - 24</option>
                <option value="h:mm A">HH:mm - 12</option>
              </select>
            </MenuItem>
          </DropdownButton>
        </DropdownButton>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    timezone: state.timezone,
    timeformat: state.timeformat,
    user: state.userInfo
  }
}

export default connect(mapStateToProps, { changeTimezone, changeTimeformat, logout })(Dropdown)