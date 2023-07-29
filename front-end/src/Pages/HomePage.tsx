import React, { useRef, useEffect } from 'react';
import SlideIcon from '../components/SlideIcon';
import SlideData from '../components/SlideData';
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
    <div style={{width:"98%",margin:"auto"}}>
      <div>
      <video style={{marginTop:"-6%"}}  width={width} height={height} autoPlay muted>
        <source style={{paddingTop:"55%"}} src="https://github.com/santoshsen96/JS_101_learning_js/assets/112757984/8ae136bb-79c9-4780-9985-a71fe064f904" type="video/mp4" />
     
      </video>
      </div>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 pb-2 sm:px-6 lg:px-8 ">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Welcome to ChatGpt
          </h1>
        </div>
      </header>
      <div className="width:100% flex flex-row mx-auto my-10">
        <div className="w-4/12 ml-6">
          <img style={{borderRadius:"50%"}} src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZW5tMjJ3bWNyM2dtemZydTJteWh6ZmFrZDJtcnMyeWRyODNjYXB2ZyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/S60CrN9iMxFlyp7uM8/giphy.gif" alt="" />
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
    </div>
  );
};

export default HomePage;
