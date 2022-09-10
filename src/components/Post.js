import React from "react";
import "./Post.css";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PublishIcon from "@mui/icons-material/Publish";
import { Avatar } from "@mui/material";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import Twitterdodge from "../images/Twitterdodge.jpg";
const Post = ({ displayName, userName, verified, timestamp, text, avatar }) => {
  return (
    <div className="post">
      <div className="post-avatar">
        <Avatar src={Twitterdodge} />
      </div>
      <div className="post-body">
        <div className="post-header">
          <div className="post-headerText">
            <h3>
              Elon Tusk{" "}
              <span>
                <VerifiedUserIcon className="post-badge" />
              </span>
            </h3>
          </div>
          <div className="post-description">
            <p>Wueehh bro</p>
          </div>
          <div className="post-footer">
            <ChatBubbleIcon />
            <RepeatIcon />
            <FavoriteBorderIcon />
            <PublishIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
