import React from "react";
import './HomeBody.css';

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
        <>
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
                <div className="row p-0 m-0">
                    <div className="col-sm-6 p-2" id="aboutMe">
                        <div className="position-relative z-index-2">
                            <h1>Hello, My Name is Charlie Compton</h1>
                            <p>
                                About Me: I'm a recent college graduate with interests in UI design,
                                Software Development, and more! This also needs a better font, maybe can do
                                a different font collor or something interesting
                                links below, like my resume 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="m-2" id="resumeOrHobbies">
                <p id="downloadParagraph"></p>
                <button id="resumeButton" onClick={DownloadPdf}>Download</button>
        </div>
        </>
    );
}

export default HomeBody;