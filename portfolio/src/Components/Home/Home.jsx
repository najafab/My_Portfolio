import React, { useState } from "react";
import "./Home.css";
import image from "../../assets/bg-img.png";
import resume from "../../../public/AllJobCv.pdf";
const Home = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick("Donloading", true);
  };
  return (
    <div className="home">
      <div className="imgcenter">
        <div className="home-img">
          <img src={image} alt="" height="90px" />
        </div>
      </div>
      <h2>I'm Najaf Abbas</h2>
      <div className="box-home">
        <div className="box">
          <h1>FrontEnd Developer</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero ex
            temporibus neque quas voluptatibus quis facere, vel deleniti?
            Voluptatum quasi nam atque reiciendis sint, assumenda quos fugiat
            eaque expedita incidunt!
          </p>
          <div className="home-btn">
            <a href={resume} download="Najaf Resume.pdf" onClick={handleClick}>
              <button>DOWNLOAD RESUME</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
