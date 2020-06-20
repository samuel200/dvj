import React, { useEffect } from "react";
import { Link } from 'react-scroll';
import $ from 'jquery';
import { useInView } from 'react-intersection-observer';

export const NavigationBar = ({ hide }) => {
  const menuButtonStyle = {
    width: "44px",
    height: "18px",
    position: "relative",
    right: "20px"
  }
  const [ ref, inView, entry ] = useInView({
    threshold: .35,
  })
  useEffect(() => {
    var elems = document.querySelectorAll(".sidenav");
    window.M.Sidenav.init(elems, {});
    if(inView){
      $("#to-top").css({display: "none"})
    }else{
      $("#to-top").css({display: "block"})
    }
  }, [inView]);
  return (
    <>
      <nav
        className="z-depth-0"
        style={{ padding: "0px 30px", background: "#111111" }}
        ref={ ref }
      >
        <div className="nav-wrapper">
          <a href="/" className="brand-logo" id="logo">
            DVJ PHOTOGRAPHY
          </a>
          <a href="#" data-target="mobile-demo" className={"sidenav-trigger" + (hide ? " hide" : "")}>
            <img src={ require("../img/menu.svg") } alt="menu" style={ menuButtonStyle }/>
          </a>
          <ul className={"right hide-on-med-and-down" + (hide ? " hide" : "")}>
            <li>
              <Link to="home" smooth={true} duration={500}>Home</Link>
            </li>
            <li>
              <Link to="portfolio" smooth={true} duration={500}>Portfolio</Link>
            </li>
            <li>
              <Link to="about-me" smooth={true} duration={500}>About</Link>
            </li>
            <li>
              <a href="/booking">Book Appointment</a>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500}>Contact</Link>
            </li>
          </ul>
        </div>
      </nav>

      <ul className={"sidenav" + (hide ? " hide" : "")} id="mobile-demo">
        <li>
          <Link to="home" smooth={true} duration={500}>Home</Link>
        </li>
        <li>
          <Link to="portfolio" smooth={true} duration={500}>Portfolio</Link>
        </li>
        <li>
          <Link to="about-me" smooth={true} duration={500}>About</Link>
        </li>
        <li>
          <a href="/booking">Book Appointment</a>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>Contact</Link>
        </li>
      </ul>
    </>
  );
};
