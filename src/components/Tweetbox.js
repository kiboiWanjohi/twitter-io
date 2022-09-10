import React from "react";
import "./Tweetbox.css";
import { Avatar, Button } from "@mui/material";
import Twitterdodge from "../images/Twitterdodge.jpg";
const Tweetbox = () => {
  return (
    <div className="tweetbox">
      <form action="">
        <div className="tweetbox-input">
          <Avatar src={Twitterdodge} />
          <input type="text" placeholder="Enter your opinion" />
        </div>
        <Button className="tweetbox-btn">Tweet</Button>
      </form>
    </div>
  );
};

export default Tweetbox;
