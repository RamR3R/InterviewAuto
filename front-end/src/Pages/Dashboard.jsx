import React, { useState } from 'react';
import SkillsTable from './Skill';
import MarksTable from './Marks';
import RadarChart from './Chart';


const Dashboard = () => {
  // Sample data (Replace this with your data)
  const [skillsData, setSkillsData] = useState([
    { id: 1, skill: 'React', level: 'Advanced' },
    { id: 2, skill: 'JavaScript', level: 'Intermediate' },
    { id: 3, skill: 'HTML', level: 'Beginner' },
  ]);

  const [marksData, setMarksData] = useState([
    { id: 1, subject: 'React', marks: 90 },
    { id: 2, subject: 'Java', marks: 85 },
    { id: 3, subject: 'Node', marks: 70 },
    { id: 4, subject: 'Node', marks: 70 },
    { id: 5, subject: 'Node', marks: 70 },
    { id: 6, subject: 'Node', marks: 70 },
    { id: 7, subject: 'Node', marks: 70 },
    { id: 8, subject: 'Node', marks: 70 },
  ]);

  return (
    
    <div style={{display:"grid", gridTemplateColumns:"repeat(2,1fr)"}}>
        <div style={{width:"70%",margin:"auto"}}>
        <MarksTable data={marksData} />
        </div>
        <div style={{marginTop:"-5%"}}>
        <RadarChart/>
        </div>
    </div>
  );
};

export default Dashboard;
