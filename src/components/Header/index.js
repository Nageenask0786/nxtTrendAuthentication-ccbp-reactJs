// Write your JS code here

import {Component} from 'react'

import './index.css'

class Header extends Component {
  render() {
    return (
      <div className="header">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="logo"
        />
        <ul className="nav-items-container">
          <li>Home</li>
          <li>Products</li>
          <li>Cart</li>
          <li>
            <button type="button" className="button">
              Logout
            </button>
          </li>
        </ul>
      </div>
    )
  }
}

export default Header
