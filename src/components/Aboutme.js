import React, { Component } from "react";
import Avatar from "../assets/avatar.svg";

class Aboutme extends Component {
  state = {};
  render() {
    return (
      <div className="face-rec">
        <div className="text-button-wrapper">
          <h2>Who I am and What I do</h2>
          <p>I am Elaheh and currently I am a web development student.</p>
          <p>
            I’ve always been drawn to technology and design. After years of
            academic tarining in other fields , and some unexpected turns in
            life,I finally decided to shift my focus on web development AND I
            found it amazing! I value teamwork as an essential part of any
            project as well as being dedicated to fulfill the tasks as an
            individual.
          </p>
          <p>
            I’ve started putting more consideration in strategies and best
            practices of structuring code for better efficiency and
            maintanability of projects.You can also see some of the technologies
            that I work with on the right/below!
          </p>

          <div className="buttons">
            <a href="https://www.linkedin.com/in/elaheharjomandi/">
              <div className="app-btn">Get in toch</div>
            </a>
          </div>
        </div>
        <img id="phone" src={Avatar} alt="" />
      </div>
    );
  }
}

export default Aboutme;
