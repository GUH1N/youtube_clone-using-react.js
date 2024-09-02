import React from "react";
import "./header.css";
import logo from "../youtube-logo.png";

export default function Header() {
    return (
        <div className="container">
        <div className="side_container">
            <ul className="list_container">
                <li className="item-1"><i class="fa-solid fa-bars"></i></li>
                <li className="item"><div className="it1"><i class="fa-solid fa-house"></i>
                    <p>Home</p></div></li>
                <li className="item"><div  className="it2"><i class="fa-solid fa-compact-disc"></i>
                    <p>Shorts</p></div></li>
                <li className="item"><div  className="it3"><i class="fa-regular fa-folder-open"></i>
                    <p>Subscriptions</p></div></li>
                <li className="item"><div  className="it4"><i class="fa-solid fa-user-tag"></i>
                    <p>You</p></div></li>
            </ul>
        </div>
            <div className="youtube_con">
                    <div id="youtube">
                        <i id="Youtube_icon" class="fa-brands fa-youtube"></i>
                        <p>YouTube</p>
                    </div>
                    <div id="search">
                        <input placeholder="Search"></input>
                        <i id="magnifier" class="fa-solid fa-magnifying-glass"></i>
                    </div>
                </div>
        </div>
    );
}