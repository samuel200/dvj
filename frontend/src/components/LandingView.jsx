import React, { useEffect, useRef } from "react";

export const LandingView = () => {
  const imgStyle = {
    width: "70%",
    height: "400px",
  };
  const landingViewStyle = {
    background: "#111111",
    padding: "60px 40px",
  };

  const imgSideStyle = { textAlign: "center" };

  let persona1 = useRef();
  let persona2 = useRef();
  
  useEffect(()=>{
      let flipped = false
      setInterval(()=>{
      if(!flipped){
        persona1.current.style.animation = "1s ease-out rotateOut1 forwards";
        persona2.current.style.animation = "1s ease-in rotateIn2 forwards";
      }else{
        persona1.current.style.animation = "1s ease-in rotateIn1 forwards";
        persona2.current.style.animation = "1s ease-out rotateOut2 forwards";
      }
      setTimeout(()=>{
        flipped = !flipped;
      }, 5000);
    }, 5000)
  }, [])


  return (
    <div className="row" style={landingViewStyle} id="home">
      <div className="col l6" style={imgSideStyle}>
        <img
          src={require("../img/main_screen_image.jpg")}
          alt="landing image"
          style={imgStyle}
        />
      </div>
      <div className="col l6 center-align" id="landing-comment-side">
        <h3 className="white-text">I</h3>
        <h3 className="white-text">AM</h3>
        <div id="what-i-am">
          <h1 className="white-text" id="bigger" ref={ persona1 }>A PHOTOGRAPHER</h1>
          <h1 className="white-text" id="bigger" ref={ persona2 }>DVJ</h1>
        </div>
      </div>
    </div>
  );
};
