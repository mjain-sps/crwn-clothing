import React from "react";
import MenuItem from "./MenuItem";
import "../CSS/HomePage/directory.css";
import { useSelector } from "react-redux";
function HomePageDirectory() {
  const directoryFromState = useSelector;

  return (
    <>
      <div className="directory-wrapper">
        {sections.map((item) => {
          return <MenuItem key={item.id} item={item} />;
        })}
      </div>
    </>
  );
}

export default HomePageDirectory;
