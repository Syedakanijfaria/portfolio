import React from "react";
import "./About.css";

const About = () => {
    return (
        <div className="container">
            <div className="container-left">
                <div className="container-card bg"></div>
                <div className="container-card">
                    <img
                        src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt=""
                        className="container-img"
                    />
                </div>
            </div>
            <div className="container-right">
                <h1 className="container-title">About Me</h1>
                <p className="container-sub">
                    It is a long established fact that a reader will be distracted by the
                    readable content.
                </p>
                <p className="container-desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat duis aute irure dolor in reprehende.
                </p>
                <div className="container-award">

                    <div className="container-award-texts">
                        <h4 className="container-award-title">Certificates</h4>
                        <p className="container-award-desc">
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
                            and fugit.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;