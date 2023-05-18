import React from "react";
import './HomeBody.css'

const HomeBody = () =>{
    return (
        <div className="" id="contentsOfHomeBody">
            <div className="row">
                <div className="col-sm-1"></div>
                <div className="col-sm-5">
                    <div className="container-md-5" id="aboutMe">
                        <h1>Hello, My Name is Charlie Compton</h1>
                        <p>
                            About Me: I'm a recent college graduate with interests in UI design,
                            Software Development, and more! This also needs a better font, maybe can do
                            a different font collor or something interesting
                            links below, like my resume 
                        </p>
                    </div>
                    <div className="" id="resumeOrHobbies"></div>
                </div>
                <div className="col-sm-5" id="photo">
                    <p>fix the navbar it looks bad</p>
                </div>
                <div className="col-sm-1"></div>
            </div>
        </div>
    );
}

export default HomeBody;