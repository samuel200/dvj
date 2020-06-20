import React from 'react';
import { useInView } from 'react-intersection-observer';
import $ from 'jquery';

export const PortfolioView = ()=>{
    const observers = [useInView({
        threshold: .35,
        triggerOnce: true
    }),useInView({
        threshold: .35,
        triggerOnce: true
    }),useInView({
        threshold: .35,
        triggerOnce: true
    }),useInView({
        threshold: .35,
        triggerOnce: true
    }),useInView({
        threshold: .35,
        triggerOnce: true
    }),useInView({
        threshold: .35,
        triggerOnce: true
    })];
    
    observers.map(([ref, inView, entry]) =>{
        if(inView){
            $(entry.target).css({
                top: "0px",
                opacity: 1
            });
        }
    })

    return (
        <div id="portfolio">
            <div>
                <span className="section-header">Portfolio</span>
            </div>
            <div className="row">
                <div className="col l4 m6 s12">
                    <img src={require("../img/pi1.jpg")} alt="pi1" ref={ observers[0][0]}/>
                </div>
                <div className="col l4 m6 s12">
                    <img src={require("../img/pi2.jpg")} alt="pi2" ref={ observers[1][0] }/>
                </div>
                <div className="col l4 m6 s12">
                    <img src={require("../img/pi3.jpg")} alt="pi3" ref={ observers[2][0] }/>
                </div>
                <div className="col l4 m6 s12">
                    <img src={require("../img/pi4.jpg")} alt="pi4" ref={ observers[3][0] }/>
                </div>
                <div className="col l4 m6 s12">
                    <img src={require("../img/pi5.jpg")} alt="pi5" ref={ observers[4][0] }/>
                </div>
                <div className="col l4 m6 s12">
                    <img src={require("../img/pi6.jpg")} alt="pi6" ref={ observers[5][0] }/>
                </div>
            </div>
            <div style={{textAlign: "center"}}>
                <a id="portfolio-instalink" href="https://instagram.com/dvj_ng/"><span>view more of my work on my instagram at #dvj_ng</span><img src={require("../img/arrow-right.svg")} alt="arrow-right"/></a>
            </div>
        </div>
    )
}