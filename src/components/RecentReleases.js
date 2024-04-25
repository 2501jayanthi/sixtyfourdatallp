
import React from "react";
import {Chrono} from 'react-chrono'

import "../styles/RecentReleases.css";
const RecentReleases = () => {
  return (
    <div className='recent-container'>
    

    <div className="chrono-container">
    <Chrono  mode="VERTICAL" theme={{
    primary: "grey",
    
  }}
  hideControls = {["jumpTO,changeLayout","changeeDestiny"]}
  >
    <div>
        <p>Feburary 12 2024</p>
        <h6>Industrial Production</h6>
        <p>Index of Industrial Production (IIP) grew by 3.8% YoY in December, as compared to a 5.1% YoY growth in the same month last year. Electricity has seen the slowest growth of 1:2% YoY in December as compared to 10.4% YoY growth in the same month last year.</p>
    </div>
    <div>
        <p>Feburary 12 2024</p>
        <h6>CPI Inflation</h6>
        <p>India's Inflation eased to 5.1% in Jan, a 60 basis points decrese from the previous month. Consumer Food Price Index (CFP() declined from 9.6% in Dec 23 to 8.3% in</p>
    </div>
    </Chrono>
  </div>
    
    
</div>

  );
};

export default RecentReleases;

