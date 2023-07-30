import React, { useEffect, useRef } from 'react';
import { initTE, Chart } from 'tw-elements';

const RadarChart = () => {
  // Ref to the chart container element
  const data =  localStorage.getItem('final-data');
  const parseData=JSON.parse(data)
  console.log(parseData)
  console.log([parseData])
  const chartRef = useRef();

  useEffect(() => {
    // Data for the radar chart
    const dataRadar = {
      type: 'radar',
      data: {
        labels: ['CommunicationSkills', 'CriticalThinking', 'ProblemSolving', 'TechnicalKnowledge', 'UoF'],
        datasets: [
          {
            label: ' Meeting Score',
            
            data: [parseData.CommunicationSkills,parseData.CriticalThinking,parseData.ProblemSolving,parseData.TechnicalKnowledge,parseData.UoF],
          },
        ],
      },
    };

    // Initialize the Chart
    initTE({ Chart });

    // Create the radar chart
    const radarChart = new Chart(chartRef.current, dataRadar);

    // Clean up the chart on unmount
    // return () => radarChart.destroy();
  }, []);

  return <div ref={chartRef} id="radar-chart"  />;
};

export default RadarChart;


// CommunicationSkills
// : 
// 4
// CriticalThinking
// : 
// 6
// ProblemSolving
// : 
// 5
// TechnicalKnowledge
// : 
// 6
// UoF
// : 
// 7