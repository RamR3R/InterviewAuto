import React from "react";
import "../Styles/ScreenPage.css";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const SideBar2 = () => {
  const toast = useToast();
  const navigate = useNavigate();

  const handleStart = () => {
    
  }

  const handleEnd = () => {
    toast({
      title: 'Your Interview has been Ended!!',
      description: "Moving towards dashboard",
      position: 'top',
      status: 'success',
      duration: 3000,
      isClosable: true,
    })
    setTimeout(() => {
      navigate("/dashboard")
    }, 3500);
  }

  return (
    <div className="sidebar2-main-cont">
      <div>
        <div>
          <div className="checkbox">
            <input type="checkbox" name="" />
            <label htmlFor="">Instant Feedback</label>
          </div>
          <button onClick={handleStart}>Start the Interview</button>
          <button onClick={handleEnd}>End the Interview</button>
        </div>
      </div>
    </div>
  );
};

export default SideBar2;
