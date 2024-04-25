import { useState} from "react";

import React from "react";
import "../styles/Sidebar.css";
import { IoMdSettings } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { MdOutlineMonitor } from "react-icons/md";
import { FaRegQuestionCircle } from "react-icons/fa";
import { IoMdCalendar } from "react-icons/io";
import { BiSolidDollarCircle } from "react-icons/bi";
import { FaHeadphones } from "react-icons/fa6";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";

import logo from "../assets/logo.png";

const Sidebar = () => {
  const [shownames,setshownames] = useState(false)

    function onclickLogo(){
        setshownames(!shownames)
    }

  return (
    <div className="sidebar-container">
      <div className="top-section">
        {/* logo */}
        <div className="logo-container">
          <img src={logo} alt="log" className="logo" onClick={onclickLogo}/>
        </div>
        {/* icons */}
        <div className="icon-container">
          {shownames ? <p className="iconname">Search</p> :<CiSearch className="icons" />}
          {shownames ? <p className="iconname">Desktop</p> :<MdOutlineMonitor className="icons" />}
          {shownames ? <p className="iconname">Query</p> :<FaRegQuestionCircle className="icons" />}
          {shownames ? <p className="iconname">Calender</p>:<IoMdCalendar className="icons" />}

          {shownames ? <p className="iconname">Office</p>:<HiOutlineBuildingOffice2 className="icons" />}
          {shownames ? <p className="iconname">Dollar</p>:<BiSolidDollarCircle className="icons" />}
          {shownames ? <p className="iconname">Music</p>:<FaHeadphones className="icons" />}
        </div>
      </div>
      <IoMdSettings className="icons" />
    </div>
  );
};

export default Sidebar;