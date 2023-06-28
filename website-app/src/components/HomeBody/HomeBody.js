import React from "react";
import './HomeBody.css';
import BubbleBlur from "./Background";

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
            <BubbleBlur />
            <div className="m-2" id="resumeOrHobbies">
                    <p id="downloadParagraph"></p>
                    <button id="resumeButton" onClick={DownloadPdf}>Download</button>
            </div>
        </>
    );
}

export default HomeBody;