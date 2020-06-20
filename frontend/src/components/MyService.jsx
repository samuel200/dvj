import React from 'react';
import { useInView } from 'react-intersection-observer';
import $ from 'jquery';

const options = {
    threshold: .35,
    triggerOnce: true
}

export const MyService = ({imgURL, headingList, content, swap})=>{
    const [ref, inView, entry] = useInView(options);
    const inViewStyle = {
        left: "0px",
        opacity: 1
    }

    const leftShiftStyle = {
        position: "relative",
        transition: "all 1s",
        left: "-100px",
        opacity: ".25"
    }

    const rightShiftStyle = { ...leftShiftStyle, left: "100px"}

    if(inView){
        $(entry.target).find(".content-side").css(inViewStyle);
        $(entry.target).find(".image-side").css(inViewStyle);
    }
    return( swap ?
        (
        <div className="service-section row center-align" ref={ ref }>
            <div className="image-side col l5 m7 s12" style={ leftShiftStyle }>
                <img src={ imgURL } alt={ imgURL }/>
            </div>
            <div className="content-side col l7 m7 s12" style={ rightShiftStyle }>
                <div className="service-heading right-align">
                    <h4>{ headingList[0] }</h4>
                    <h4>{ headingList[1] }</h4>
                    <h4>{ headingList[2] }</h4>
                    <h2>{ headingList[3] }</h2>
                </div>
                <div className="service-content left-align">{ content }</div>
            </div>
        </div>
        ) :
        (
        <div className="service-section row center-align" ref={ ref }>
            <div className="content-side col l7 m7 s12" style={ leftShiftStyle }>
                <div className="service-heading left-align">
                    <h4>{ headingList[0] }</h4>
                    <h4>{ headingList[1] }</h4>
                    <h4>{ headingList[2] }</h4>
                    <h2>{ headingList[3] }</h2>
                </div>
                <div className="service-content left-align">{ content }</div>
            </div>
            <div className="image-side col l5 m7 s12" style={ rightShiftStyle }>
                <img src={ imgURL } alt={ imgURL }/>
            </div>
        </div>
        )
    )
}