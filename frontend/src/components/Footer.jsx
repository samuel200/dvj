import React from 'react';

export const Footer = ()=>{
    return(
        <footer className="row">
            <div className="col l6 m6 s12">
                <a href="#"><img src={ require("../img/mail.svg") } alt="icon"/></a>
                <a href="#"><img src={ require("../img/twitter.svg") } alt="icon"/></a>
                <a href="#"><img src={ require("../img/instagram.svg") } alt="icon"/></a>
                <a href="#"><img src={ require("../img/facebook.svg") } alt="icon"/></a>
                <a href="#"><img src={ require("../img/whatsapp.svg") } alt="icon"/></a>
            </div>
            <div className="col l6 m6 s12 right-align">
                <span>DVJ PHOTOGRAPHY</span> &copy;Copyright 2020
            </div>
        </footer>
    )
}