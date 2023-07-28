import React from "react";
import "../Styles/ScreenPage.css";
import SideBar1 from "./SideBar1";
import SideBar2 from "./SideBar2";

const ScreenPage = () => {
  return (
    <div className="screen-main-cont">
      <div className="animate__animated animate__backInDown">
        <p>Welcome to Interview Session</p>
      </div>
      <div>
        <div>
          <SideBar1 />
        </div>
        <div>
          <SideBar2 />
        </div>
      </div>
    </div>
  );
};

export default ScreenPage;
