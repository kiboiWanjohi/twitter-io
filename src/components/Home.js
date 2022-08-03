import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../Firebase/AuthContext";
import { logout } from "../Firebase/Firebase";
import "./Home.css";
import twitter from "../images/twitters.png";
function Home() {
  const [tweet, setTweet] = useState("");
  const handleTweet = (e) => {
    e.preventDefault();
    const newTweet = { tweet };
    console.log(newTweet);
  };
  const twitLonger = (e) => {
    e.preventDefault();
    const input = document.getElementById("tweet");
    input.classList.toggle("longTweet");
    const btn = document.getElementById("twitLonger");
    btn.remove();
  };
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
  };

  if (!user) {
    navigate("/Login");
  }

  return (
    <div className="Home">
      <div className="sidebar">
        <img src={twitter} alt="twitter" id="twitter-logo" />
        <i class="fa-solid fa-house"></i>
        <h3>Home</h3>
        <i class="fa-solid fa-hashtag"></i>
        <h3>Explore</h3>
        <i class="fa-solid fa-message"></i>
        <h3>Messages</h3>
        <button id="log-out" onClick={handleLogout}>
          Log Out
        </button>
      </div>
      <div className="feed">
        {" "}
        <h4>Home</h4>
        <div className="tweetbox">
          <form onSubmit={handleTweet}>
            {/* avatar icon user.photoURL*/}

            <input
              placeholder="What's happening"
              type="text"
              id="tweet"
              value={tweet}
              onChange={(e) => setTweet(e.target.value)}
            />
            <button id="twitLonger" onClick={twitLonger}>
              TwitLonger
            </button>
          </form>
          <button onClick={handleTweet}>Tweet</button>
        </div>
        <p>{tweet}</p>
      </div>
    </div>
  );
}

export default Home;
