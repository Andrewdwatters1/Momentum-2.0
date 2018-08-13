import React, { Component } from 'react';

class Dropdown extends Component {
  render() {
    return (
      <div className="nav-items">
        <div className="nav-links-desktop">
          <span>Item 1 </span>
          <span>Item 2 </span>
          <span>Item 3 </span>
          <button class="fas fa-bars" aria-hidden="true" onClick={this.toggleDropdown}>Dropdown</button>
        </div>

        <div hidden="true" className="nav-links-mobile">
          <button>Item 1</button>
          <button>Item 2</button>
          <button>Item 3</button>
        </div>

      </div>
    )
  }
}

export default Dropdown;