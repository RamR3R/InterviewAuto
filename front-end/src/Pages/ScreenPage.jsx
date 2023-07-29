import React, { useRef, useState } from "react";
import "../Styles/ScreenPage.css";
// import SideBar1 from "./SideBar1";
import SideBar2 from "./SideBar2";
import { RiSendPlane2Fill } from "react-icons/ri";
import { Scrollbars } from "react-custom-scrollbars";
import { FaAngular, FaReact } from "react-icons/fa";
import { LiaJava } from "react-icons/lia";
import { DiNodejs } from "react-icons/di";
import TextMsg from "../components/TextMsg";
import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import boy from "../Images/boy.jpg"
import VideoChat from "../components/VideoChat";

const ScreenPage = () => {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  const [aiData, setAiData] = useState([]);
  const [instantFeedback, setInstantFeedback] = useState(false);
  // console.log(instantFeedback)
  const navigate = useNavigate();
  const toast = useToast();

  const inputref = useRef();
  const instantRef = useRef();
  const you = "you";
  const ai = "ai";

  const [qna, setQna] = useState([]);

  let course = localStorage.getItem("course") || "Interview";

  const updateQandA = (from, value) => {
    setQna((qna) => [...qna, { from, value }]);
  };

  const handleStart = () => {
    if (!course) {
      toast({
        title: "Select select course first",
        position: "top",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
    } else {
      axios
        .post(`https://interviewauto.onrender.com/chat/start?sub=${course}`)
        .then((res) => {
          console.log(res.data);
          setAiData(res.data);
        })
        .catch((err) => console.log(err));
    }
  };

  const handleSubmit = () => {

    const newText = inputref.current.value;
    const checked = instantRef.current.value;
    updateQandA(you, newText);
    console.log(checked)

    if(!instantFeedback){
      axios
      .post(`https://interviewauto.onrender.com/chat/submit?feedback=0`, newText)
      .then((res) => {
        console.log(res.data);
        updateQandA(ai, res.data);
        inputref.current.value = "";
      })
      .catch((err) => console.log(err));
      if (newText == "") {
        toast({
          title: "Please write something",
          position: "top",
          status: "warning",
          duration: 3000,
          isClosable: true,
        });
      } else {
        setData([...data, newText]);
        setText("");
      }
    }else{
      axios
      .post(`https://interviewauto.onrender.com/chat/submit?feedback=1`, newText)
      .then((res) => {
        console.log(res.data);
        updateQandA(ai, res.data);
        inputref.current.value = "";
      })
      .catch((err) => console.log(err));
      if (newText == "") {
        toast({
          title: "Please write something",
          position: "top",
          status: "warning",
          duration: 3000,
          isClosable: true,
        });
      } else {
        setData([...data, newText]);
        setText("");
      }
    }
  };
  
  const renderContent = (qna) => {
    const value = qna.value;
    if (Array.isArray(value)) {
      return value.map((el) => {
        return el;
      });
    }
    inputref.current.value = "";
    return <p>{value}</p>;
  };

  const handleEnd = () => {
    const payload = { logout: true };
    axios
      .post(`https://interviewauto.onrender.com/chat/logout`, payload)
      .then((res) =>  {
        console.log(res.data)
        localStorage.setItem("final-data",JSON.stringify(res.data))
      })
      .catch((err) => console.log(err));
    toast({
      title: "Your Interview has been Ended!!",
      description: "Moving towards dashboard",
      position: "top",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    setTimeout(() => {
      navigate("/dashboard");
    }, 3500);
  };

  return (
    <div className="screen-main-cont">
      <div className="animate__animated animate__backInDown">
        <p style={{zIndex: "100"}}>Welcome to {course} Session</p>
      </div>
      <div>
        <div>
          <div className="sidebar1-main-cont">
            <div>
              <div>
                {course === "React" ? (
                  <FaReact className="seticon" style={{ color: "#7ddfff" }} />
                ) : course === "Java" ? (
                  <LiaJava
                    className="seticon"
                    style={{ color: "white", fontSize: "80px" }}
                  />
                ) : course === "Node" ? (
                  <DiNodejs
                    className="seticon"
                    style={{ color: "#43c22b", fontSize: "115px" }}
                  />
                ) : course === "Angular" ? (
                  <FaAngular className="seticon" style={{ color: "red" }} />
                ) : (
                  ""
                )}
              </div>
              <div className="img-div">
                <img
                  src="https://www.shutterstock.com/shutterstock/videos/1063759960/thumb/6.jpg?ip=x480"
                  alt=""
                  style={{ width: "150%", height: "55%" }}
                />
              </div>
            </div>
            <div>
              <div>
                <Scrollbars>
                  <div className="scroll-div">
                    <p style={{marginLeft:"48px", fontSize: "1.2rem"}}>Hello, Are you Ready for the Interview !!</p>
                    {aiData.length > 0 ? <div style={{ display: "flex", marginTop: "15px", width: "100%" }}>
                    <div style={{width: "7%"}}>
                        <div style={{ width: "34px", height: "34px", marginRight: "10px", borderRadius: "50%", border: "2px solid orange" }}>
                          <img src="https://previews.123rf.com/images/goodzone95/goodzone951803/goodzone95180300023/96668201-chatbot-icon-cute-robot-working-behind-laptop-modern-bot-sign-design-smiling-customer-service.jpg" alt="" style={{width: "100%", height: "100%", borderRadius: "50%"}}/>
                        </div>
                    </div>
                    <div style={{width: "93%"}}>
                      <ol style={{ color: "white", marginTop: "3px", fontSize: "1.1rem", width:"100%" }}>
                        <li>{aiData}</li>
                      </ol>
                    </div>
                  </div>
                  : ""
                }
                    {qna.map((el, i) => {
                      if (el.from == you) {
                        return (
                          <div style={{ display: "flex", marginTop: "5px", width: "100%" }}>
                            <div style={{width: "7%"}}>
                                <div style={{ width: "34px", height: "34px", marginTop: "-2px", marginRight: "10px", borderRadius: "50%", border: "2px solid green" }}>
                                    <img src={boy} alt="" style={{width: "100%", height: "100%", borderRadius: "50%"}}/>
                                </div>
                            </div>
                            <div style={{width: "93%", marginTop: "-2px"}}>
                              <ol style={{ color: "white", marginTop: "3px", fontSize: "1.1rem", width:"100%" }}>
                                <li>{renderContent(el)}</li>
                              </ol>
                            </div>
                          </div>
                        );
                      } else {
                        return (
                          <div style={{ display: "flex", marginTop: "30px", width: "100%" }}>
                            <div style={{width: "7%"}}>
                                <div style={{ width: "34px", height: "34px", marginRight: "10px", borderRadius: "50%", border: "2px solid orange" }}>
                                  <img src="https://previews.123rf.com/images/goodzone95/goodzone951803/goodzone95180300023/96668201-chatbot-icon-cute-robot-working-behind-laptop-modern-bot-sign-design-smiling-customer-service.jpg" alt="" style={{width: "100%", height: "100%", borderRadius: "50%"}}/>
                                </div>
                            </div>
                            <div style={{width: "93%"}}>
                              <ol style={{ color: "white", marginTop: "3px", fontSize: "1.1rem", width:"100%" }}>
                                <li>{renderContent(el)}</li>
                              </ol>
                            </div>
                          </div>
                        );
                      }
                    })}
                  </div>
                </Scrollbars>
              </div>
              <div className="screen-input-div">
                <input
                  ref={inputref}
                  type="text"
                  placeholder="send a message"
                  name="text"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
                <button onClick={handleSubmit}>
                  <RiSendPlane2Fill
                    style={{
                      marginLeft: "1rem",
                      fontSize: "25px",
                      color: "grey",
                    }}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="sidebar2-main-cont">
            <div>
              <VideoChat />
              <div>
                <div className="checkbox">
                  <input ref={instantRef} type="checkbox" name="" value={instantFeedback} onChange={(e) => setInstantFeedback(e.target.checked)} />
                  <label htmlFor="">Instant Feedback</label>
                </div>
                <button onClick={handleStart}>Start the Interview</button>
                <button onClick={handleEnd}>End the Interview</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScreenPage;
