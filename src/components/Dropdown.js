import React, { Component } from 'react';
import { connect } from 'react-redux';
import { stack as Menu } from 'react-burger-menu';
import { changeTimezone, changeTimeformat, logout } from '../redux/reducer';

class Dropdown extends Component {
  constructor() {
    super()
    this.state = {
      open: false,
    }
  }

  showSettings = (event) => {
    event.preventDefault();
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    return (
      <div>
        <Menu bodyClassName={ "dropdown-menu" }>
          <a onClick={this.showSettings} className="menu-item--small"></a>
          <a className="menu-item">Productivity Mode</a>
          <a className="menu-item">Theme</a>
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