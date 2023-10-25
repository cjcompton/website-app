import React from "react";
import './HomeBody.css';
import Projects from "../Projects/Projects";
import SocialBar from "../Social Links/SocialBar"
import Button from "../UI/DownloadButton";


const DownloadPdf = () => {
    const pdfLink = 'src/Files/Charlie Compton.pdf';
    const link = document.createElement('a');
    link.href = pdfLink;
    link.download = 'Charlie Compton\'s resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}


const HomeBody = () => {
    return (
        <div id="viewHeight">
            <div className="row p-0 m-0" id="BGBubble">
                <div className="col p-0 m-0">
                    <div className="position-relative z-index-1">
                        <div id="circle1"></div>
                        <div id="circle2"></div>
                        <div id="circle3"></div>
                        <div id="circle4"></div>
                    </div>
                </div>
                <div className="container">
                    <div className="row p-0 m-0 mt-4">
                        <div className="col-lg-6" id="aboutMe">
                            <div className="position-relative z-index-2">
                                <h1>Hello, My Name is Charlie Compton</h1>
                                <p id="theP">
                                    About Me: I'm a recent Lewis & Clark college graduate with a BA in Computer science.
                                    Some of my interests inclue UI design, Website Development Software Development, 
                                    and more! Check out my projects, and click the link below to downlaod my resume. 
                                </p>
                                <Button onClick={DownloadPdf}>Resume</Button>
                            </div>
                        </div>
                        <div className="col-lg-6 p-0 m-0 projects-container">
                            <div className="text-center">
                                <h1 id="projHead">Projects:</h1>
                            </div>
                            <Projects />
                        </div>
                    </div>
                </div>
            </div>
            <SocialBar />
        </div>
    );
}
// add a hobie section, maybe cyber security section, find some stuff to add

export default HomeBody;