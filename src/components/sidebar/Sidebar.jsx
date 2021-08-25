import React from "react";
import "./sidebar.scss";

import {
  MdSubscriptions,
  MdExitToApp,
  MdThumbUp,
  MdHistory,
  MdLibraryBooks,
  MdHome,
  // MdSentimentDissatisfied,
} from "react-icons/md";
import WatchLaterOutlinedIcon from "@material-ui/icons/WatchLaterOutlined";
import VideoLibrarySharpIcon from "@material-ui/icons/VideoLibrarySharp";
import WhatshotOutlinedIcon from "@material-ui/icons/WhatshotOutlined";
import { useDispatch } from "react-redux";
import { log_out } from "../../redux/actions/auth.action";
import { Link } from "react-router-dom";

//######## This is resposible for the Logout action ###########
const Sidebar = ({ sidebar, handleToggleSidebar }) => {
  const dispatch = useDispatch();
  const logOutHandler = () => {
    dispatch(log_out());

    // ######################################################
  };
  return (
    <nav
      className={sidebar ? "sidebar open" : "sidebar"}
      onClick={() => handleToggleSidebar(false)}
    >
      <Link to="/">
        <li>
          <MdHome className="sidebar__icons" size={23} />
          <span className="sidebar__title">Home</span>
        </li>
      </Link>
      <li>
        <WhatshotOutlinedIcon className="sidebar__icons" size={23} />
        <span className="sidebar__title">Trending</span>
      </li>
      {/* LINL########## */}
      <Link to="/feed/subscriptions">
        <li>
          <MdSubscriptions className="sidebar__icons" size={23} />
          <span className="sidebar__title">Subscription</span>
        </li>
      </Link>
      <hr />
      <Link to="/library">
        <li>
          <MdLibraryBooks className="sidebar__icons" size={23} />
          <span className="sidebar__title">Library</span>
        </li>
      </Link>
      {/* <Link to="/history"> */}
      <li>
        <MdHistory className="sidebar__icons" size={23} />
        <span className="sidebar__title">History</span>
      </li>
      {/* </Link> */}

      <li>
        <VideoLibrarySharpIcon className="sidebar__icons" size={23} />
        <span className="sidebar__title">Your videos</span>
      </li>

      <li>
        <WatchLaterOutlinedIcon className="sidebar__icons" size={23} />
        <span className="sidebar__title">Watch later</span>
      </li>

      <li>
        <MdThumbUp className="sidebar__icons" size={23} />
        <span className="sidebar__title">Liked Videos</span>
      </li>
      {/* <li>
        <MdSentimentDissatisfied className="sidebar__icons" size={23} />
        <span className="sidebar__title">I don't know</span>
      </li> */}

      <hr />
      {/* <Link to="/log out"> */}
      <li onClick={logOutHandler}>
        <MdExitToApp className="sidebar__icons" size={23} />
        <span className="sidebar__title">Log Out</span>
      </li>
      {/* </Link> */}
      <hr />
    </nav>
  );
};

export default Sidebar;
