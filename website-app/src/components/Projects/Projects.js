import React, {useEffect} from "react";
import './Projects.css'
import { Carousel } from "bootstrap";
import noodleImage from '/src/Files/noodle.jpg'

const Projects = () => {
    useEffect(() => {
        const carousel = new Carousel(document.getElementById("projectCarousel"));
    }, []);

    return(
        <>
        <div id="fullBackground" className="" />
        <div id="projectCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active center">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="col-md-6 d-none d-sm-block p-6">
                            <img src={noodleImage} alt="Image of Program" className="img-fluid" />
                        </div>
                        <div className="col-md-6 p-6">
                            <h3>Image Title</h3>
                            <p>Image Description</p>
                        <div className="text-center">
                            <button className="btn btn-primary">Download</button>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <p>hi</p>
                </div>
                <div className="carousel-item">
                    <p>sup</p>
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