import React, { Component } from "react";
import sweden from "../assets/png/1200px-flag_of_sweden.svg_copy_1@3x.png";
import danmark from "../assets/png/download@2x.png";
import logo from "../assets/social-media/paytack.png";
import fb from "../assets/social-media/facebook-letter-logo_2019-11-27/facebook-letter-logo@3x.png";
import linkedin from "../assets/social-media/linkedin.png";
import twt from "../assets/social-media/twitter.png";
import siteseal from "../assets/png/siteseal_gd_3_h_l_m@2x.png";
class Footer extends Component {
  state = {};
  render() {
    return (
      <div className="footer-cpr-container">
        <div className="footer-container">
          <div className="social-media">
            <img id="logo" src={logo} alt="" />
            <div className="media-wrapper">
              <div className="fb">
                <a href="https://www.facebook.com/pune2018/">
                  {" "}
                  <img id="fb" src={fb} alt="" />
                </a>
              </div>
              <div className="fb">
                <img id="linkedin" src={linkedin} alt="" />
              </div>
              <div className="fb">
                <img id="linkedin" src={twt} alt="" />
              </div>
            </div>
            <img id="site-seal" src={siteseal} alt="" />
          </div>

          <div className="aboutus">
            <h3>About Us</h3>
            <div className="tags">
              <a href="google.com">Our services</a>
              <a href="google.com">Contact us</a>
              <a href="google.com">Admin panel</a>
              <a href="google.com">GDPR & Privacy policy</a>
            </div>
          </div>

          <div className="address">
            <h3>Find us</h3>
            <div className="flag-address">
              <div className="flag-title">
                <img src={danmark} alt="dk-flag" />
                <h4> PayTack IVS</h4>
              </div>
              <p>
                Fruebjergvej 3, 2100 Copenhagen <br /> tel: +45 71393342 <br />
                cvr: 40209751
              </p>
            </div>
            <div className="flag-address">
              <div className="flag-title">
                <img src={sweden} alt="dk-flag" />
                <h4>PayTack AB </h4>
              </div>
              <p>
                Anckargripsgatan 3, 211 19 Malmö <br /> tel: +46 406753461{" "}
              </p>
            </div>
          </div>
        </div>
        <hr />
        <p id="cpr">Copyright © 2020 PayTack . All rights reserved</p>
      </div>
    );
  }
}

export default Footer;
