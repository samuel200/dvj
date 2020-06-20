import React from 'react';
import { useInView } from 'react-intersection-observer';
import $ from 'jquery';

export const AboutMeView = ()=>{
    const observers = [useInView({
        threshold: .35,
        triggerOnce: true
    }),useInView({
        threshold: .35,
        triggerOnce: true
    })];
    
    observers.map(([ref, inView, entry]) =>{
        if(inView){
            $(entry.target).css({
                opacity: 1,
                left: "0px"
            });
        }
    })
    return (
        <div className="row" id="about-me">
            <div className="col l5 m6 s12 image-side" ref={ observers[0][0] }>
                <img src={ require("../img/a_me.jpg")} alt="abbout me"/>
            </div>
            <div className="col l7 m6 s12 content-side" ref={ observers[1][0] }>
                <div className="about-heading">
                    <h4>Get To Know</h4>
                    <h2>About Me</h2>
                </div>
                <p className="about-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras in turpis dictum, varius odio a, placerat nulla. 
                    Mauris ac rhoncus elit. Nulla quis feugiat neque. 
                    Vivamus nec orci sit amet ipsum lobortis laoreet. 
                    Donec gravida lectus id felis condimentum volutpat. 
                    Duis arcu lacus, consectetur ac consequat vitae
                </p>
            </div>
        </div>
    )
}