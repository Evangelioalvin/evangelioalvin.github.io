import React from "react";
import "./Cover.css";
import coverVideo from "../../media/coverVideo.mp4";

const Cover = () => {
  return (
    <div className="cover-container">
      <video className="video" src={coverVideo} autoPlay loop muted />
      <h1>Alvin Evangelio</h1>
      <p>Developer | Designer Web | Motor Rider | BSCS Student </p>
    </div>
  );
};

export default Cover
