import React from "react";
import Webcam from "react-webcam";

const VideoChat = () => {
  const webcamRef = React.useRef(null);

  return (
    <div>
      <Webcam
        audio={false}
        mirrored={true}
        ref={webcamRef}
        width={280}
        height={360}
      />
    </div>
  );
};

export default VideoChat;
