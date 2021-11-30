import React, { useEffect, useState } from 'react';
import "./ProjectList.css";
import Projects from "../Projects/Projects.js";

const ProjectList = () => {
    const [Project, setProject] = useState([]);

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setProject(data));
    }, [])
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">Create & inspire. It's Lama</h1>
                <p className="pl-desc">
                    Lama is a creative portfolio that your work has been waiting for.
                    Beautiful homes, stunning portfolio styles & a whole lot more awaits
                    inside.
                </p>
            </div>
            <div className="pl-list">
                {
                    Project.map
                        ((item) =>
                        (
                            <div className="p">
                                <div className="p-browser">
                                    <div className="p-circle"></div>
                                    <div className="p-circle"></div>
                                    <div className="p-circle"></div>
                                </div>
                                <a href={item.link} target="_blank" rel="noreferrer">
                                    <img src={item.img} alt="" className="p-img" />
                                </a>
                            </div>
                        ))
                }
            </div>
        </div>
    );
};

export default ProjectList;