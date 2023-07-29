import React from 'react'
import { useNavigate } from 'react-router-dom'

const PageNotFound = () => {
  const navigate = useNavigate()

  const handleSubmit = () => {
    navigate("/")
  }

  return (
    <div style={{width: "100%",height: "92vh",display: "flex", justifyContent: "center", alignItems: "center"}}>
      <div style={{width: "70%", height:"70%", margin: "auto",display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center"}}>
        <div style={{width: "100%", height: "80%"}}>
          <p style={{fontSize: "1.8rem", fontWeight: "bold"}}>404</p>
          <p style={{fontSize: "1.8rem", fontWeight: "bold"}}>Page not found</p>
          <button onClick={handleSubmit} style={{border: "2px solid black", marginTop: "10px", padding: "5px 10px"}}>Home Screen</button>
        </div>
        <div style={{width: "75%", height: "80%", marginLeft: "20%"}}>
          <img src="https://img.freepik.com/premium-vector/cute-white-flying-robot-character-thinking-futuristic-chatbot-mascot-embarrassment-with-speech-bubble-tech-cartoon-online-confused-bot-robotic-ai-assistance-talk-mental-activity-emotion-vector-eps_502272-734.jpg?w=2000" alt="" width="60%" />
        </div>
      </div>
    </div>
  )
}

export default PageNotFound