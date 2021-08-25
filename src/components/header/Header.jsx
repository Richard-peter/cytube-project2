import React from "react";
import "./header.scss";
import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotifications, MdApps } from "react-icons/md";
import VideoCallSharpIcon from "@material-ui/icons/VideoCallSharp";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

// const Header = ({ handleToggleSidebar }) => {
//   const [input, setInput] = useState("");

//   const history = useHistory();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     history.push(`/search/${input}`);
//   };
//   const { photoURL } = useSelector((state) => state.auth?.user);
//   return (
//     <div className="border border-dark header">
//       <FaBars
//         className="header__menu"
//         size={26}
//         onClick={() => handleToggleSidebar()}
//       />
//       <span className="header__name">
//         cyTUBE

//         <img
//           src="http://iconsetc.com/icons-watermarks/simple-ios-blue-gradient/social-media/social-media_youtube/social-media_youtube_simple-ios-blue-gradient_512x512.png"
//           alt=""
//           className="header__logo"
//         />
//       </span>

//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="search"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//         />
//         <button type="submit">
//           <AiOutlineSearch sisze={22} />
//         </button>
//       </form>
//       <div className="header__icons">
//         <VideoCallSharpIcon size={28} />
//         <MdNotifications size={28} />
//         <MdApps size={28} />
//         <img src={photoURL?.photoURL} alt="avatar" />
//       </div>
//     </div>
//   );
// };

// export default Header;

const Header = ({ handleToggleSidebar }) => {
  const [input, setInput] = useState("");

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    history.push(`/search/${input}`);
  };
  const user = useSelector((state) => state.auth?.user);

  return (
    <div className="header ">
      <FaBars
        className="header__menu"
        size={26}
        onClick={() => handleToggleSidebar()}
      />

      <span className="header__name">
        cyTUBE <i className="fab fa-typo3"></i>
        {/* <img
          src="http://iconsetc.com/icons-watermarks/simple-ios-blue-gradient/social-media/social-media_youtube/social-media_youtube_simple-ios-blue-gradient_512x512.png"
          alt=""
          className="header__logo"
        /> */}
      </span>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">
          <AiOutlineSearch size={22} />
        </button>
      </form>

      <div className="header__icons">
        <VideoCallSharpIcon size={28} />
        <MdNotifications size={28} />
        <MdApps size={28} />
        <img src={user?.photoURL} alt="avatar" />
      </div>
    </div>
  );
};

export default Header;
