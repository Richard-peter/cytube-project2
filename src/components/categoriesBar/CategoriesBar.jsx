import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  getPopularVideos,
  getVideosByCategory,
} from "../../redux/actions/videos.action";
import "./categoriesBar.scss";

const keywords = [
  "All",
  "Audio Books",
  "Live",
  "Cryptocurrency",
  "Nollywood",
  "Hollywood",

  "Mixes",

  // "React js",
  // "Angular js",
  // "React Native",
  // "use of API",
  // "Redux",
  "Music",
  "Algorithm Art ",
  "Guitar",
  "Pastor Chris",
  "Love world live",
  "Qubators Hackathon",
  // "Coding",
  "Recently uploaded",
  "Cricket",
  "Football",
  "Real Madrid",
  // "Gatsby",
  // "Poor Coder",
];

const CategoriesBar = () => {
  const [activeElement, setActiveElement] = useState("All");

  const dispatch = useDispatch();

  const handleClick = (value) => {
    setActiveElement(value);
    dispatch(getVideosByCategory(value));
    if (value === "All") {
      dispatch(getPopularVideos());
    } else dispatch(getVideosByCategory(value));
  };

  return (
    <div className="categoriesBar">
      {keywords.map((value, i) => (
        <span
          onClick={() => handleClick(value)}
          key={i}
          className={activeElement === value ? "active" : ""}
        >
          {value}
        </span>
      ))}
    </div>
  );
};

export default CategoriesBar;
