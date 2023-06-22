import React from "react";
import './HomeBody.css'

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
        <div className="row p-0 m-0">
            <div className="col-sm-6">
                <div className="p-2" id="aboutMe">
                    <h1>Hello, My Name is Charlie Compton</h1>
                    <p>
                        About Me: I'm a recent college graduate with interests in UI design,
                        Software Development, and more! This also needs a better font, maybe can do
                        a different font collor or something interesting
                        links below, like my resume 
                    </p>
                </div>
                <div className="m-2" id="resumeOrHobbies">
                    <p id="downloadParagraph"></p>
                    <button id="resumeButton" onClick={DownloadPdf}>Download</button>
                </div>
            </div>
            <div className="col-sm-6 d-none d-sm-block">
                <div className="p-2 mt-4" id="photo">

                </div>
            </div>
        </div>
    );
}

export default HomeBody;