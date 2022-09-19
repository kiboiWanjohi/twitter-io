import React, { useEffect, useState } from "react";

import "./Feed.css";
import Post from "./Post";
import Tweetbox from "./Tweetbox";
import db from "./Firebase";
import FlipMove from "react-flip-move";
const Feed = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() =>
    // run code on load
    {
      db.collection("posts").onSnapshot((snapshot) => {
        setPosts(snapshot.docs.map((doc) => doc.data()));
      });
    }, []);
  return (
    <div className="feed">
      {/* header */}
      <div className="feed-header">
        <h2>Home</h2>
      </div>
      {/* tweetbox */}
      <Tweetbox />
      {/* posts with smooth scroll */}
      <FlipMove>
        {posts.map((post) => (
          <Post
            displayName={post.displayName}
            userName={post.userName}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
          />
        ))}
      </FlipMove>
    </div>
  );
};

export default Feed;
