import React from "react";
import "../../Components/Footer/Footer.css";

const Footer = () => {
  const handleClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="footer">
      <div className="footer-icons">
        <i
          className="fa-brands fa-instagram insta"
          onClick={() => handleClick("https://www.instagram.com/")}
        ></i>
        <i
          className="fa-brands fa-facebook fb"
          onClick={() => handleClick("https://www.facebook.com/")}
        ></i>
        <i
          className="fa-brands fa-twitter tw"
          onClick={() => handleClick("https://www.twitter.com/")}
        ></i>
        <i
          className="fa-brands fa-whatsapp wht"
          onClick={() => handleClick("https://www.whatsapp.com/")}
        ></i>
        <i
          className="fa-brands fa-telegram tel"
          onClick={() => handleClick("https://www.telegram.org/")}
        ></i>
      </div>
    </div>
  );
};

export default Footer;
