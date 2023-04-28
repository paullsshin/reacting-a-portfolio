import React from "react";
import Profile from '../../images/Marvel-Pic.jpg'

export default function About () {
    return (
        <div className="about-page">
            <div className="about-section">
            <h1>Welcome to my Profile! Powered by React!</h1>
            <img src={Profile} className="about-pic" alt="placeholder" />
            <p className="about-content">Hi there! Thanks for stopping by! My name is Paull Shin and I am currently enrolled in a Full-Stack-Developer Program. I am always looking to expand my base of knowledge. I enjoy learning new things and I enjoy challenging myself whenever possible.</p>
            </div>
        </div>
    )
}

// trying something