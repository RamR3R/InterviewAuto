import React, { useEffect, useState } from 'react';
import "../Styles/LangSelectionPage.css";
import { LiaJava } from "react-icons/lia";
import { FaReact, FaAngular } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import 'animate.css';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Toast, useToast } from '@chakra-ui/toast';

const LangSelectionPage = () => {
  const [select, setSelect] = useState("");
  const toast = useToast()
  const navigate = useNavigate()
  // const [searchParams, setSearchParams] = useSearchParams();
  // const initialCourse = searchParams.get("lang");
  // const [sub, setSubject] = useState(initialCourse || "");
  // console.log("17",sub)
  // console.log(initialCourse)

  // useEffect(() => {
  //   let params = {
  //     sub
  //   };
  //   setSearchParams(params);
  // }, []);

  const handleSubmit = () => {
    if(select===""){
      toast({
        title: 'Warning!!',
        description: "Course not selected",
        position: 'top',
        status: 'warning',
        duration: 3000,
        isClosable: true,
      })
      return
    }else{
      localStorage.setItem("course",select)
      // setSubject(select)
      // console.log("lang",language)
    toast({
      title: 'Language Selected!!',
      description: "Redirecting to the Interview Panel",
      position: 'top',
      status: 'success',
      duration: 3000,
      isClosable: true,
    })
    setTimeout(() => {
      navigate("/screen")
    }, 3500);
    }
  }

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
                    <option value="React">React</option>
                    <option value="Java">Java</option>
                    <option value="Node">NodeJs</option>
                    <option value="Angular">Angular</option>
                </select>
                <button className='animate__animated animate__fadeInRightBig' onClick={handleSubmit}>Proceed further</button>
            </div>
        </div>
    </div>
  )
}

export default LangSelectionPage