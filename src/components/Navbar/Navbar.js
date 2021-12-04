import React from "react";
//import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
    return (
        // <div class="nav">
        //     <a href="#home">Home</a>
        //     <a href="#about">About</a>
        //     <a href="#skills">Skills</a>
        //     <a href="#project">Project</a>
        //     <a href="#contact">Contact</a>
        //     <a href="#resume">Resume</a>
        // </div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div class="container">
                <a class="navbar-brand" href="#"></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#shoes">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#bagpack">Projects</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#watch">Contact</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#subscribe">Subscribe</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;


