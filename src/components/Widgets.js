import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
// import { SearchIcon } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
const Widgets = () => {
  return (
    <div className="widgets">
      <div className="widgets-input">
        <SearchIcon className="search-icon" />
        <input type="text" placeholder="Search Twitter" />
      </div>
      <div className="widgets-widgetsContainer">
        <h1>What's happening bruv</h1>
      </div>
      <TwitterTweetEmbed tweetId="" />
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName=""
        options={{ height: 400 }}
      />
      <TwitterShareButton url="" />
    </div>
  );
};

export default Widgets;
