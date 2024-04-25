
import React from "react";
import "../styles/Home.css";
import Sidebar from "./Sidebar";
import { FaRegCalendar } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { IoIosNotificationsOutline } from "react-icons/io";
import SaveLibraryCards from "./SaveLibraryCards";
import Banking from "./Banking";
import RecentReleases from "./RecentReleases";

const Home = () => {
  return (
    <div className="home-container">
      <Sidebar />
      <div className="home-items-container">
        {/* header  */}
        <div className="home-header">
          <div className="name-container">
            <h1>Good Afternoon, Akshay</h1>
            <p>You are subscribed to Retail plan.</p>
          </div>
          <div className="date-container">
            <div className="date">
              <FaRegCalendar className="date-icons" />
              <p>Today, 14 February</p>
              <IoMdTime className="date-icons" />
              <p>16:42</p>
            </div>
            <IoIosNotificationsOutline className="date-icons" />
          </div>
        </div>
        {/* items */}
        <div className="home-save-library-cards-container">
          <SaveLibraryCards />
        </div>
        <div className="home-banking-container-it">
          <Banking />
        <div className="recent-cont"> 
        <div className='d-flex recent-heading'>
        <h6>Recent Releases</h6>
        <select className='select-c'>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="RUssia">RUssia</option>
            <option value="Chaina">Chaina</option>
            <option value="Japan">Japan</option>
        </select>
    </div>
    <RecentReleases/>
        </div>


        </div>
        <button className="custom-button">View More</button>  

      </div>

    </div>
  );
};




export default Home;
