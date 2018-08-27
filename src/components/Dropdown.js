import React, { Component } from 'react';
import { connect } from 'react-redux';
import { stack as Menu } from 'react-burger-menu';
import Switch from "react-switch";

import { changeTimezone, changeTimeformat, logout } from '../redux/reducer';

class Dropdown extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      focusTimer: false,
      theme: false
    }
  }

  showSettings = (event) => {
    event.preventDefault();
    this.setState({
      open: !this.state.open
    })
  }
  focusChange = () => {
    this.setState({
      focusTimer: !this.state.focusTimer
    });
  }
  themeChange = () => {
    this.setState({
      theme: !this.state.theme
    });
  }
  
  render() {
    return (
      <div>
        <Menu bodyClassName={"dropdown-menu"}>
          <a onClick={this.showSettings} className="menu-item--small"></a>
          <a className="menu-item">Focus Timer
          <div>
              <label htmlFor="normal-switch">
                <Switch
                  onChange={this.focusChange}
                  checked={this.state.focusTimer}
                  onColor="#888888"
                  onHandleColor="#4DAAF6"
                  handleDiameter={25}
                  uncheckedIcon={false}
                  checkedIcon={false}
                  boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                  activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                  height={15}
                  width={40}
                />
              </label>
            </div>
          </a>

          <a className="menu-item">Theme
          <div>
              <label htmlFor="normal-switch">
                <Switch
                  onChange={this.themeChange}
                  checked={this.state.theme}
                  onColor="#888888"
                  onHandleColor="#4DAAF6"
                  handleDiameter={25}
                  uncheckedIcon={false}
                  checkedIcon={false}
                  boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                  activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                  height={15}
                  width={40}
                />
              </label>
            </div></a>
          <a className="menu-item">Settings</a>
          <a className="menu-item">Logout</a>
        </Menu>
      </div>
    )
  }

  // if (this.state.open) {
  //   return (
  //     <div>
  //       <div>
  //         Set Timezone: <select name="timezone" onChange={this.handleTimeZoneChange} defaultValue="Mountain" id="timezone-select" className="menu-item" href="/">
  //           <option value="Hawaii">Hawaii</option>
  //           <option value="Alaska">Alaska</option>
  //           <option value="Pacific">Pacific</option>
  //           <option value="Mountain" >Mountain</option>
  //           <option value="Central">Central</option>
  //           <option value="Eastern">Eastern</option>
  //           <option value="gmt">GMT</option>
  //         </select>
  //       </div>
  //       <div>
  //         Clock format: <select name="timeformat" onChange={this.handleTimeFormatChange} id="timeformat-select" className="menu-item" href="/">
  //           <option value="HH:mm:ss - zz">HHH:mm:ss - 24 T</option>
  //           <option value="h:mm:ss A - zz">HH:mm:ss - 12 T</option>
  //           <option value="HH:mm:ss" selected="selected">HH:mm:ss - 24</option>
  //           <option value="h:mm:ss A">HH:mm:ss - 12</option>
  //           <option value="HH:mm">HH:mm - 24</option>
  //           <option value="h:mm A">HH:mm - 12</option>
  //         </select>
  //       </div>
  //       <div>
  //         {
  //           this.props.user
  //             ?
  //             <Link to="/" onClick={this.props.logout}><button>Logout</button></Link>
  //             :
  //             <Link to=""><button>login</button></Link>
  //         }
  //       </div>
  //       <div>
  //         Timer Settings
  //       </div>
  //       <div>
  //         Other
  //       </div>
  //       <div>
  //         <button onClick={this.handleClick} className="fas fa-times"></button>
  //       </div>
  //     </div>
  //   )
  // } else {
  //   return <button onClick={this.handleClick} className="fas fa-bars"></button>
  // }

}

const mapStateToProps = state => {
  return {
    timezone: state.timezone,
    timeformat: state.timeformat,
    user: state.userInfo
  }
}

export default connect(mapStateToProps, { changeTimezone, changeTimeformat, logout })(Dropdown)