import React from 'react';
import { animateScroll as Scroll } from 'react-scroll';

export const ToTop = () => {
    return (
        <div id="to-top" onClick={()=>{
            Scroll.scrollToTop();
        }}>
            <img src={ require("../img/arrow-up.svg")} alt="up-arrow"/>
        </div>
    )
}
