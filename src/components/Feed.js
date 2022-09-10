import React from "react";
import "./Feed.css";
import Post from "./Post";
import Tweetbox from "./Tweetbox";
const Feed = () => {
  return (
    <div className="feed">
      {/* header */}
      <div className="feed-header">
        <h2>Home</h2>
      </div>
      {/* tweetbox */}
      <Tweetbox />
      {/* posts */}
      <Post />
    </div>
  );
};

export default Feed;
