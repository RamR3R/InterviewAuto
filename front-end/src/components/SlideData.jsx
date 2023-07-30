import AOS from "aos"
import "aos/dist/aos.css"
import React, { useState, useEffect } from 'react';
const data=[
    
    "Seamless AI-powered Interviews Gone are the days of scheduling and coordinating interviews with human recruiters",
    "Diverse Interview Formats Whether it's technical assessments, behavioral questions, or situational judgment scenarios, our website covers a wide range of interview formats. ",
    "Realistic Interaction OpenAI's language model provides a remarkably realistic interview experience.",
    "Instant Evaluation and Insights No more lengthy wait times for interview results! Our platform offers real-time evaluation and generates comprehensive insights on candidates' performance."
  ]
const SlideData = () => {
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedData, setDisplayedData] = useState([]);
 

  useEffect(() => {
    AOS.init({ duration: 800 });
    const interval = setInterval(() => {
      if (currentIndex < data.length) {
        setDisplayedData((prevData) => [...prevData, data[currentIndex]]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex, data]);

  return (
    <div >
      {displayedData.map((item, index) => (
        <div style={{margin:' 6.8% 5%'}}>
        <p data-aos="fade-right" key={index}>{item}</p>
        </div>
      ))}
    </div>
  );
};

export default SlideData;