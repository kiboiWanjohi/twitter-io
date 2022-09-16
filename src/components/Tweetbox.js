import React, { useState } from "react";
import db from "./Firebase";
import "./Tweetbox.css";
import { Avatar, Button } from "@mui/material";
import Twitterdodge from "../images/Twitterdodge.jpg";
const Tweetbox = () => {
  const [tweetMessage, setTweetMessage] = useState("");
  const sendTweet = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      displayName: "",
      userName: "",
      verified: true,
      text: tweetMessage,
      avatar: "",
    });
    setTweetMessage("");
  };
  return (
    <div className="tweetbox">
      <form action="">
        <div className="tweetbox-input">
          <Avatar src={Twitterdodge} />
          <input
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}
            type="text"
            placeholder="Enter your opinion"
          />
        </div>
        <Button onClick={sendTweet} type="submit" className="tweetbox-btn">
          Tweet
        </Button>
      </form>
    </div>
  );
};

export default Tweetbox;
