import React from 'react'
import "./css/Navbar.css"
import { IoGameController } from 'react-icons/io5';
import pslogo from './navbarImages/pslogo.jpg'
import xboxlogo from './navbarImages/xboxlogo.jpg'
import nintendologo from './navbarImages/nintendologo.png'
function Navbar() {
  return (
    <div className='mycontainer'>
      <div className='mynavbar-item' id="nav2">
        <a href="/" style={{ "textDecoration": "none" }}><h1 className="title" id="gametitle">GameFlow®</h1></a>
      </div>
      <div className="mynavbar-item">
        <a href="/" style={{ "textDecoration": "none" }}><h2 className="title">Home</h2></a>
      </div>
      <div className="mynavbar-item">
        <a href="/" style={{ "textDecoration": "none" }}><h2 className="title">About</h2></a>
      </div>
      <div className='mynavbar-item'>
        <label className='title' htmlFor="Platform"><h2 style={{ "background": "transparent" }}>Platforms</h2></label>
        <select className='platform-select' name="Platform" id="Platform">
          <option className="platform-options" value="PS2">Sony PlayStation®</option>
          <option className="platform-options" value="Xbox">Xbox One X</option>
          <option className="platform-options" value="Nintendo">Nintendo Switch</option>
        </select>
      </div>
      <div style={{ "marginLeft": "600px", "display": "flex", "marginTop": "10px" }}>
        <div>
          <img className='ps2logo' style={{ "height": "60px" }} src={pslogo} />
        </div>
        <div>
          <img className='ps2logo' style={{ "height": "60px" }} src={xboxlogo} />
        </div>
        <div>
          <img className='ps2logo' style={{ "height": "60px" }} src={nintendologo} />
        </div>
      </div>
    </div>
  )
}

export default Navbar
