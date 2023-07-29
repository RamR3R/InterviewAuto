import React from 'react'

const AiMsg = ({id, data}) => {
  return (
    <div style={{ display: "flex", marginTop: "15px", width: "100%" }}>
    <div style={{width: "7%"}}>
        <div style={{ width: "34px", height: "34px", marginRight: "10px", borderRadius: "50%", border: "1px solid red" }}>
            <img src="https://img.freepik.com/premium-vector/cute-robot-icon-illustration-techology-robot-icon-concept-isolated-flat-cartoon-style_138676-1220.jpg?w=2000" alt="" style={{width: "100%", height: "100%", borderRadius: "50%"}}/>
        </div>
    </div>
      <div style={{width: "93%"}}>
        <ol style={{ color: "white", marginTop: "3px", fontSize: "1.1rem", width:"100%" }}>
          <li>{data}</li>
        </ol>
      </div>
    </div>
  )
}

export default AiMsg