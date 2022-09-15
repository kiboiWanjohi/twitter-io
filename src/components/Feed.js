import React, { useEffect, useState } from "react";
import Twitterdodge from "../images/Twitterdodge.jpg";
import "./Feed.css";
import Post from "./Post";
import Tweetbox from "./Tweetbox";
import db from "./Firebase";
const Feed = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() =>
    // run code on load
    {
      db.collection("posts").onSnapshot((snapshot) => {
        setPosts(snapshot.map((doc) => doc.data()));
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
      {/* posts */}
      {posts.map((post) => {
        <Post
          displayName={post.displayName}
          userName={post.userName}
          verified={post.verified}
          text={post.text}
          avatar={post.avatar}
        />;
      })}
    </div>
  );
};

export default Feed;
