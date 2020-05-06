import React from "react";
import Fade from "react-reveal/Fade";

function Footer() {
  return (
    <footer className="bck_red">
      <Fade delay={500}>
        <div className="font_righteous footer_logo_venue">The Venue</div>
        <div className="footer_copyright">
          The venue 2019 &copy; All Rights Reserved
        </div>
      </Fade>
    </footer>
  );
}

export default Footer;
