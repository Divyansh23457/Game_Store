import React from "react";
import './css/Footer.css'
function Footer() {
  return (
    <footer>
      <div className="mainframe">
        <div>
          <h1>GameFlow®</h1>
        </div>
        <div>
          <h1>Liked Our Content ? <hr/> Connect With us !</h1>
          <div className="About">
            <a className="connect-link" href = "/"><img className = "img-link"src = "https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-instagram-icon-png-image_6315974.png" width = "40px"></img>Insta@GameFlow</a>
            <a className="connect-link" href = "/"><img className = "img-link"src = "https://png.pngtree.com/png-clipart/20221018/ourmid/pngtree-youtube-social-media-3d-stereo-png-image_6308427.png" width = "40px"></img>YouTube@GameFlow</a>
            <a className="connect-link" href = "/"><img className = "img-link"src = "https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-facebook-social-media-icon-png-image_6315968.png" width = "40px"></img>Facebook@GameFlow</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
