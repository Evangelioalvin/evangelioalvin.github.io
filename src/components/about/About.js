import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-desc">
        <h3>About Me</h3>
        <p>
       I am a 4rth year BSCS student from North Eastern Mindanao State University Lianga Camupus. 
        </p>
      </div>
      <div className="about-img">
        <img
          src="https://hireline.io/blog/wp-content/uploads/2020/10/tec-programador.jpg" width="400" height="360"
          alt="about"
        />
      </div>
    </div>
  );
};

export default About;
