import React, { useEffect, useRef } from 'react';
import { initTE, Chart } from 'tw-elements';

const RadarChart = () => {
  // Ref to the chart container element
  const chartRef = useRef();

  useEffect(() => {
    // Data for the radar chart
    const dataRadar = {
      type: 'radar',
      data: {
        labels: ['React', 'Java', 'Node', 'Dsa', 'Communication Skills', 'Interviewing Skill', 'Non Tech - First Impression ','Debugging'],
        datasets: [
          {
            label: ' Meeting Score',
            
            data: [10,10,10,10,10,10,10,10],
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
