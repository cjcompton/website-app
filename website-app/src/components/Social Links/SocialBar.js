import React from "react";
import "./SocialBar.css"

const SocialBar = () => {
    return (
        <div className="socialBar">
            <div class="row p-0 m-0">
                <div class="col-4">
                    <a href="https://www.linkedin.com/in/ch-compton/" id="linkedIn">LinkedIn</a>
                </div>
                <div class="col-4">
                    <a href="https://github.com/cjcompton" id="gitHub">GitHub</a>
                </div>
                <div class="col-4">
                    <a href="mailto:youremail@gmail.com" id="gmail">Gmail</a>
                </div>
            </div>
        </div>
    );
}

export default SocialBar;
