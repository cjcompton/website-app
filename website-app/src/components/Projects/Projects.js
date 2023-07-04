import React, {useEffect} from "react";
import './Projects.css'
import { Carousel } from "bootstrap";
import noodleImage from '/Users/charliecompton/Desktop/Website/website-app/src/Files/noodle.jpg'
import portlandYardImage from '/Users/charliecompton/Desktop/Website/website-app/src/Files/portlandYard.png'

const Projects = () => {
    useEffect(() => {
        const projectCarousel = document.getElementById("projectCarousel");
        const carousel = new Carousel(projectCarousel);

        carousel.interval = 2000;
        carousel.cycle()
      }, []);

    const openLinkTeaching22 = () => {
        window.open("https://github.com/PeterDrake/teaching22", "_blank");
    };

    const openLinkPortlandYard = () => {
        window.open("https://github.com/cjcompton/Portland-Yard", "_blank");
    };

    return(
        <>
        <div id="projectCarousel" className="carousel slide py-6" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="d-flex align-items-center">
                        <div className="col-1" />
                        <div className="col-md-5 d-none d-sm-block">
                            <img src={noodleImage} alt="Noodle" className="img-fluid" id="noodleImg"/>
                        </div>
                        <div className="col-md-5">
                            <h3 className="px-2">Personal Website</h3>
                            <p className="px-2">This website was creating using ReactJS and Bootstrap which I taught myself. There is also the EmailJS api</p>
                            <div className="text-center">
                                <button id="linkButton" onClick={openLinkTeaching22}>Github</button> 
                            </div>
                            <div className="col-1" />
                        </div>
                    </div>
                </div>

                <div className="carousel-item">
                    <div className="d-flex align-items-center">
                        <div className="col-1" />
                        <div className="col-md-5 d-none d-sm-block">
                            <img src={portlandYardImage} alt="Portland Yard" className="img-fluid" id="portlandImg"/>
                        </div>
                        <div className="col-md-5">
                            <h3 className="px-2">Portland Yard</h3>
                            <p className="px-2">Portland Yard is a cross platform mobile game that was created as part of an independant study of Dart and Flutter. It is incomplete at the moment due to the lack of a backend framework, although we explored using Google Firebase</p>
                            <div className="text-center">
                                <button id="linkButton" onClick={openLinkPortlandYard}>Github</button> 
                            </div>
                            <div className="col-1" />
                        </div>
                    </div>
                </div>
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#projectCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#projectCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        </>
    );
};

export default Projects;