import React from "react";
import './HomeBody.css'

const DownloadPdf = () => {
    const pdfLink = 'src/Files/Charlie Compton.pdf';

    const link = document.createElement('a');
    link.href = pdfLink;
    
}

const HomeBody = () => {
    return (
        <div className="row" id="contentsOfHomeBody">
            <div className="col-sm-1"></div>
            <div className="col-sm-5">
                <div className="container-sm-5 p-2 p-sm-0" id="aboutMe">
                    <h1>Hello, My Name is Charlie Compton</h1>
                    <p>
                        About Me: I'm a recent college graduate with interests in UI design,
                        Software Development, and more! This also needs a better font, maybe can do
                        a different font collor or something interesting
                        links below, like my resume 
                    </p>
                </div>
                <div className="" id="resumeOrHobbies">
                    <button id="resumeButton" onClick={DownloadPdf}></button>
                </div>
            </div>
            <div className="col-sm-5" id="photo">
            </div>
            <div className="col-sm-1"></div>
        </div>
    );
}

export default HomeBody;