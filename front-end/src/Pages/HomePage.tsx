import React, { useRef, useEffect } from 'react';
import SlideIcon from '../components/SlideIcon';
import SlideData from '../components/SlideData';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
//import video1 from "https://www.youtube.com/watch?v=Cx5aNwnZYDc"

interface VideoPlayerProps {
 
  width?: string;
  height?: string;
  margin?:string;
}

const HomePage: React.FC<VideoPlayerProps> = ({ width = '100%', height = '100vh' }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true; // Mute the video
      videoRef.current.autoplay = true; // Autoplay the video
    }
  }, []);

  return (
    <div>
      
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 pb-2 sm:px-6 lg:px-8 ">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 mt-5">
            Welcome to MasaiGpt
          </h1>
        </div>
      </header>
      <div className="width:100% flex flex-row mx-auto my-10">
        <div className="w-4/12 ml-6 pt-20">
          <img  src="https://img.okezone.com/content/2023/05/19/54/2816476/mengenal-jenis-bot-mana-yang-cocok-untuk-war-tiket-FMyXZgtOVG.jpg" alt="chatbot" />
        </div>
        <div className="w-8/12  flex flex-row item-center justify-center">
          <div className="w-1/12 item-center flex flex-col justify-center">
            <SlideIcon/>
          </div>
          <div className="w-9/12 text-left">
            <SlideData/>
          </div>
        </div>
      </div>
      <div >
      <video   width={width} height={height} autoPlay muted>
        <source style={{ objectFit: 'cover' }} src="https://frontend-payalsahuj.vercel.app/static/media/dashvedio.8890129732ce0913b62b.mp4" type="video/mp4" />
     
      </video>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default HomePage;
