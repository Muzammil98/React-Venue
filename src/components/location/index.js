import React from "react";

function Location() {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14469.878190602007!2d67.07486592613527!3d24.950134433048802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb340a647a28e99%3A0xb14d579037571b1f!2sAfroze%20Textile%20Industries!5e0!3m2!1sen!2s!4v1568558754185!5m2!1sen!2s"
        width="100%"
        height="500px"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
}

export default Location;
