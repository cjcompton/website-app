import React from "react";
import './Projects.css';
import Button from "../UI/DownloadButton";

const Projects = () => {
    const openLinkTeaching22 = () => {
        window.open("https://github.com/PeterDrake/teaching22", "_blank");
    };

    const openLinkWebsiteApp = () => {
        window.open("https://github.com/cjcompton/website-app", "_blank");
    };
    // needs  a header
    return (
        <>
        <div className="d-flex align-items-center">
            <div className="col-sm-12 mt-5">
                <h3 className="px-2">Personal Website</h3>
                <p className="px-2">
                    This website was created using HTML, CSS, ReactJS, and Bootstrap. I have been teaching myself
                    how to use both React and Bootstrap, and have been working on other websites for friends and family.
                </p>
                <div className="text-center">
                        <Button id="linkButton" onClick={openLinkWebsiteApp}>Github</Button>
                </div>
            </div>
        </div>

        <div className="d-flex align-items-center">
            <div className="col-sm-12 mt-5">
                <h3 className="px-2">Noodle</h3>
                <p className="px-2">
                    Noodle was a project created for a Lewis and Clark College Professor to help
                    improve file managemnet by using the Java Swing framework. It allows a user to create a 
                    tree style file structure of class assignments, tests, and quizes.
                </p>
                <div className="text-center">
                    <Button id="linkButton" onClick={openLinkTeaching22}>Github</Button>
                </div>
            </div>
        </div>
        </>
    );
};

export default Projects;