import React, { Component } from "react";
import scrollToComponent from "react-scroll-to-component";
import Logo from "./assets/mylogo.png";

import "./sass/App.scss";
import Projects from "./components/Projects";
import Aboutme from "./components/Aboutme";

import linkedin from "./assets/social-media/linkedin.png";
import Email from "./assets/email.png";
import Phone from "./assets/phone.png";

import ToggleButton from "./components/BurgerMenu/Toggler-btn";
import BackDrop from "./components/BurgerMenu/BackDrop";
import CloseBtn from "./components/BurgerMenu/close-button";
class App extends Component {
  state = {
    isTop: true,
    sideDrawerOpen: false
  };
  componentDidMount() {
    document.addEventListener("scroll", () => {
      const isTop = window.scrollY < 80;
      this.setState({ isTop });
      if (isTop !== this.state.isTop) {
        this.setState({ isTop: false });
      }
    });
  }

  toggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };
  closeHandler = () => {
    this.setState({
      sideDrawerOpen: false
    });
  };
  // BACK-drop-burger-menu
  render() {
    let backdrop;
    if (this.state.sideDrawerOpen) {
      backdrop = <BackDrop handleBackdrop={this.closeHandler} />;
    }
    return (
      <div className="App">
        <div
          className={
            this.state.isTop ? "headerContainer" : "headerContainerPlus"
          }
        >
          <img id="logo" src={Logo} alt="" />
          {/* BURGER-MENU */}
          <ToggleButton click={this.toggleClickHandler} />
          <div
            className={this.state.isTop ? "navContainer" : "navContainerPlus"}
          >
            <li
              onClick={() =>
                scrollToComponent(this.Projects, {
                  offset: 0,
                  align: "middle",
                  duration: 1500
                })
              }
            >
              Projects
            </li>
            <li
              onClick={() =>
                scrollToComponent(this.Aboutme, {
                  offset: -50,
                  align: "middle",
                  duration: 1500
                })
              }
            >
              About me
            </li>
          </div>
        </div>
        <div
          className={
            this.state.sideDrawerOpen ? "open side-drawer" : "side-drawer"
          }
        >
          <li
            onClick={() =>
              scrollToComponent(
                this.Projects,
                {
                  offset: -70,
                  align: "top",
                  duration: 1500
                },
                this.closeHandler()
              )
            }
          >
            Projects
          </li>
          <hr />

          <li
            onClick={() =>
              scrollToComponent(
                this.Aboutme,
                {
                  offset: -50,
                  align: "top",
                  duration: 1500
                },
                this.closeHandler()
              )
            }
          >
            About me
          </li>
          <hr />

          <CloseBtn closeMenu={this.closeHandler} />
        </div>
        {backdrop}
        <div className="fvContainer">
          <div className="text-block">
            <h2>
              I <span style={{ color: "#e55851" }}>♥</span> life and
              <br /> building websites
            </h2>
            <div className="btn-wrapper"></div>
          </div>
        </div>

        <div className="interested-wrpper">
          {/* <p>Want to know more?</p> */}
        </div>
        <Projects
          ref={Projects => {
            this.Projects = Projects;
          }}
        />
        <Aboutme
          ref={Aboutme => {
            this.Aboutme = Aboutme;
          }}
        />

        <div className="footer-cpr-container">
          <div className="footer-container">
            <div className="aboutus">
              <h3>Happy to hear from you</h3>
              <div className="tags">
                <div className="contacts">
                  <img id="email" src={Email} alt="" />
                  <p>arjomandielaheh@gmail.com</p>
                </div>
                <div className="contacts">
                  {" "}
                  <img id="linkedin" src={linkedin} alt="" />{" "}
                  <p>linkedin.com/in/elaheharjomandi/</p>
                </div>
                <div className="contacts">
                  {" "}
                  <img id="phone-no" src={Phone} alt="" /> <p>71559071</p>
                </div>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </div>
    );
  }
}

export default App;
