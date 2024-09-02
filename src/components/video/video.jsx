import React from "react";
import "./video.css";
import img from '../Tn6-PIqc4UM-SD.jpg';
import img1 from '../Untitled.jpg';


export default function Video() {
    return (
        <div className="sec1">
            <div className="yt">
                <img 
                    src={img} 
                    alt="Thumbnail" 
                    className="thumbnail"
                />
                <div className="video-info">
                    <img 
                        src={img1}
                        alt="Channel" 
                        className="channel-icon"
                    />
                    <div className="text-content">
                        <p className="video-title">React in 100 sec</p>
                        <p className="channel-name">FireShip <i className="fas fa-check-circle"></i></p>
                        <p className="video-meta">5.3M views • 2 years ago</p>
                    </div>
                </div>
            </div>
        </div>
    );
}