import React from "react";
import boy from "../Images/boy.jpg";

const TextMsg = ({ id, title }) => {
  return (
    <div style={{ display: "flex", marginTop: "15px", width: "100%" }}>
    <div style={{width: "7%"}}>
        <div style={{ width: "34px", height: "34px", marginRight: "10px", borderRadius: "50%", border: "1px solid red" }}>
            <img src={boy} alt="" style={{width: "100%", height: "100%", borderRadius: "50%"}}/>
        </div>
    </div>
      <div style={{width: "93%"}}>
        <ol style={{ color: "white", marginTop: "3px", fontSize: "1.1rem", width:"100%" }}>
          <li>{title}</li>
        </ol>
      </div>
    </div>
  );
};

export default TextMsg;
