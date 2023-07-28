import React, { useState } from "react";
import { RiSendPlane2Fill } from "react-icons/ri";

const SideBar1 = ({add}) => {
  const [text, setText] = useState("");

  const handleClick = () => {
    add(text);
    setText("");
  };

  return (
    <div className='sidebar1-main-cont'>
      <div>
        <img
          src="https://www.shutterstock.com/shutterstock/videos/1063759960/thumb/6.jpg?ip=x480"
          alt=""
          style={{width: "150%", height: "55%" }}
        />
      </div>
      <div>
        <div></div>
        <div className="screen-input-div">
            <input type="text" placeholder="send a message" name="text" value={text} onChange={(e) => handleClick(e.target.value)}/>
            <button><RiSendPlane2Fill style={{marginLeft: "1rem", fontSize: "25px",color: "grey"}}/></button>
        </div>
      </div>
    </div>
  );
};

export default SideBar1;
