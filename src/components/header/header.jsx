import React from "react";
import "./header.css";
import { FaYoutube, FaSearch, FaMicrophone, FaCamera, FaBell, FaUserCircle } from "react-icons/fa";
import Video from "../video/video";

export default function Header() {
    return (
        <div className="element">
            <div className="maintag">
                <div className="sections">
                    <div className="icon">
                        <i class="fa-solid fa-bars"></i>
                    </div>
                    <div className="icon">
                        <i class="fa-solid fa-house"></i>
                        <p>Home</p>
                    </div>
                    <div className="icon">
                        <i class="fa-solid fa-compact-disc"></i>
                        <p>Shorts</p>
                    </div>
                    <div className="icon">
                        <i class="fa-regular fa-folder-open"></i>
                        <p>Subscription</p>
                    </div>
                    <div className="icon">
                        <i class="fa-solid fa-user-tag"></i>
                        <p>You</p>
                    </div>
                </div>
            </div>
            <div className="section1">
                <div className="searchbox">
                    <div className="split1">
                        <h1 className="headh1"><FaYoutube /> YouTube</h1>
                    </div>
                    <div className="split2">
                        <input type="text" placeholder="Search" />
                        <FaSearch />
                        <FaMicrophone />
                    </div>
                    <div className="split3">
                        <FaCamera />
                        <FaBell />
                        <FaUserCircle />
                    </div>
                </div>    
            </div>

            <div className="youtubecom">
                <Video />
                <Video />
                <Video />
                <Video />
                <Video />
                <Video />
                <Video />
                <Video />
            </div>
        </div>
    );
}