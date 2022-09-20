import React from "react";
import "./Sidebar.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import Sidebaroptions from "./Sidebaroptions";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ForumIcon from "@mui/icons-material/Forum";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import MessageIcon from "@mui/icons-material/Message";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import { Button } from "@mui/material";
const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Twitter Icon */}
      <TwitterIcon className="twitter-icon" />
      {/* Sidebar Options */}
      <Sidebaroptions active text="Home" Icon={HomeIcon} />
      <Sidebaroptions text="Explore" Icon={SearchIcon} />
      <Sidebaroptions text="Notifications" Icon={CircleNotificationsIcon} />
      <Sidebaroptions text="Messages" Icon={MessageIcon} />
      <Sidebaroptions text="Bookmarks" Icon={ForumIcon} />
      <Sidebaroptions text="Profile" Icon={AccountBoxIcon} />
      <Sidebaroptions text="More" Icon={MoreHorizIcon} />
      {/* Button Tweet */}
      <Button variant="outlined" className="sidebarTweet" fullWidth>
        Tweet
      </Button>
    </div>
  );
};

export default Sidebar;
