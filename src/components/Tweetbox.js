import React, { useState } from "react";
import "./Tweetbox.css";
import { Avatar, Button } from "@mui/material";
import Twitterdodge from "../images/Twitterdodge.jpg";
const Tweetbox = () => {
  const [tweetMessage, setTweetMessage] = useState("");
  return (
    <div className="tweetbox">
      <form action="">
        <div className="tweetbox-input">
          <Avatar src={Twitterdodge} />
          <input
            value={tweetMessage}
            type="text"
            placeholder="Enter your opinion"
          />
        </div>
        <Button className="tweetbox-btn">Tweet</Button>
      </form>
    </div>
  );
};

export default Tweetbox;
