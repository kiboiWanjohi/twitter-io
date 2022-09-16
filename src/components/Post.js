import React, { forwardRef } from "react";
import "./Post.css";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PublishIcon from "@mui/icons-material/Publish";
import { Avatar } from "@mui/material";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";

const Post = forwardRef(
  ({ displayName, userName, verified, timestamp, text, avatar }, ref) => {
    return (
      <div className="post" ref={ref}>
        <div className="post-avatar">
          <Avatar src={avatar} />
        </div>
        <div className="post-body">
          <div className="post-header">
            <div className="post-headerText">
              <h3>
                {displayName}
                <span>
                  {verified && <VerifiedUserIcon className="post-badge" />

                  //  @{username}
                  }
                </span>
              </h3>
            </div>
            <div className="post-description">
              <p>{text}</p>
            </div>
            <div className="post-footer">
              <ChatBubbleIcon className="bt-icons" />
              <RepeatIcon className="bt-icons" />
              <FavoriteBorderIcon className="bt-icons" />
              <PublishIcon className="bt-icons" />
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default Post;
