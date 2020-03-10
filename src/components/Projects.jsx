import React, { Component } from "react";
import paytack from "../assets/paytack.png";
import car from "../assets/car.png";
import music from "../assets/music.png";
import weather from "../assets/weather.png";
class Projects extends Component {
  render() {
    return (
      <div className="fContainer">
        <h1 className="why-patyack">Projects</h1>
        <div className="features-wrapper">
          <div className="post-wrap">
            <div className="privacy feature">
              <a href="https://paytack.se/">
                <img src={paytack} alt="" />
                <h3>Paytack Landingpage </h3>
                <p>
                  Paytack is a face recognition company. At the early stage of
                  their online presence they need to redesign their landing page
                  in order to introudce their product.
                </p>
              </a>
            </div>

            <div className="post-hidden">
              <span className="type">React</span>
              <span className="type">Sass</span>
            </div>
          </div>
          <div className="post-wrap">
            <div className="privacy feature">
              <a href="https://artingineer.dk/IM-Motors/#/">
                <img src={car} alt="" />
                <h3>IM-motors website </h3>
                <p>
                  The project is about developing a car dealership website.All
                  data regarding cars have been fetched from a no sql
                  database.The project also includs a blog page.
                </p>
              </a>
            </div>

            <div className="post-hidden">
              <span className="type">React</span>
              <span className="type">Sass</span>
              <span className="type">restdb</span>
            </div>
          </div>
          <div className="post-wrap">
            <div className="privacy feature">
              <a href="https://artingineer.dk/stasproject/">
                <img src={music} alt="" />
                <h3>Stas music </h3>
                <p>
                  The task was to build a professional website for a musician.We
                  have used wordPress as our CMS. All data have been grabbed
                  from wp and front end has been created using HTM,CSS and
                  javascript.
                </p>
              </a>
            </div>

            <div className="post-hidden">
              <span className="type">Vanila js</span>
              <span className="type">Wordpress</span>
            </div>
          </div>
          <div className="post-wrap">
            <div className="privacy feature">
              <a href="https://artingineer.dk/weatherapp">
                <img src={weather} alt="" />
                <h3>Weather app </h3>
                <p>
                  This is an application wich provides weather information from
                  the a weather API.It shows current location weather and you
                  can search any city to see current weather data as well as 5
                  days forecast.
                </p>
              </a>
            </div>

            <div className="post-hidden">
              <span className="type">React</span>
              <span className="type">Weather API</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;

//
