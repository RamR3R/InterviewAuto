import React, { useState } from 'react';
import "../Styles/LangSelectionPage.css";
import { LiaJava } from "react-icons/lia";
import { FaReact, FaAngular } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import 'animate.css';

const LangSelectionPage = () => {
  const [select, setSelect] = useState("");

  console.log(select)

  return (
    <div className='lang-main-cont'>
        <div className='mid-cont'>
            <div className='cont1'>
                <div className='animate__animated animate__fadeInTopLeft'>
                   <div></div>
                   <div>
                        <FaReact className="animate__animated animate__heartBeat same" style={{color: "#7ddfff"}}/>
                   </div>
                </div>
                <div className='animate__animated animate__fadeInTopRight'>
                   <div></div>
                   <div>
                        <LiaJava className="animate__animated animate__heartBeat same" style={{color: "white"}}/>
                   </div>
                </div>
                <div className='animate__animated animate__fadeInBottomLeft'>
                   <div></div>
                   <div>
                        <DiNodejs className="animate__animated animate__heartBeat same" style={{color: "#43c22b"}}/>                   
                    </div>
                </div>
                <div className='animate__animated animate__fadeInBottomRight'>
                   <div></div>
                   <div>
                        <FaAngular className="animate__animated animate__heartBeat same" style={{color: "red"}}/>
                   </div>
                </div>
            </div>
            <div className='cont2'>
                <select className='animate__animated animate__fadeInLeftBig' name="" onChange={(e)=> setSelect(e.target.value)}>
                    <option value="">Select Language</option>
                    <option value="react">React</option>
                    <option value="java">Java</option>
                    <option value="node">NodeJs</option>
                    <option value="angular">Angular</option>
                </select>
                <button className='animate__animated animate__fadeInRightBig'>Proceed further</button>
            </div>
        </div>
    </div>
  )
}

export default LangSelectionPage