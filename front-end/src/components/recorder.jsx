import {useState} from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';


const Recorder = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  const [inp, setInp] = useState("");

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div>
      <p>Microphone: {listening ? 'on' : 'off'}</p>
      <button onClick={SpeechRecognition.startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      {
        console.log(transcript)
      }
      <input type="text" value={transcript}/>
    </div>
  );
};
export default Recorder;