import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import $ from 'jquery';
import axios from 'axios';

export const ContactView = ()=>{
    const [ loading, setLoading ] = useState(false);
    const observers = [
        useInView({
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
    }),useInView({
        threshold: .35,
        triggerOnce: true
    }),useInView({
        threshold: .35,
        triggerOnce: true
    })
];
    
    observers.map(([ref, inView, entry]) =>{
        if(inView){
            $(entry.target).css({
                top: "0px",
                opacity: 1
            });
        }
    })

    const resetForm = form=>{
        form.find("input[name='full_name']").val("");
        form.find("input[name='subject']").val("");
        form.find("input[name='email']").val("");
        form.find("textarea").val("");
    }

    const handleSubmit = e =>{
        e.preventDefault();
        const form = $(e.target);
        setLoading(true);

        axios.post("/contact/", {
            name: form.find("input[name='full_name']").val(),
            subject: form.find("input[name='subject']").val(),
            email: form.find("input[name='email']").val(),
            message: form.find("textarea").val()
        }).then(({data})=>{
            window.M.toast({"html": data.success_message, classes: "green white-text"});
            setLoading(false);
            resetForm(form);
        }).catch((error)=>{
            window.M.toast({"html": "Invalid Email Provided", classes: "red white-text darken-3"});
            setLoading(false);
            resetForm(form);
        })
    }

    return (
        <div id="contact" className="row" style={{position: "relative"}}>
            <div className="col l6 m12 s12">
                <h2>Contact Details</h2>
                <div className="contact-section-content">
                    <p>If you have any questions, just fill in the contact form, and I will answer you shortly. If you are living nearby, come visit my office.</p>
                    <div className="contact-item" ref={ observers[0][0] }>
                        <span><img src={ require("../img/phone.svg")} alt=""/></span>
                        <span>1-800-1234-567</span>
                    </div>
                    <div className="contact-item" ref={ observers[1][0] }>
                        <span><img src={ require("../img/mail.svg")} alt=""/></span>
                        <span>info@demolink.org</span>
                    </div>
                    <div className="contact-item" ref={ observers[2][0] }>
                        <span><img src={ require("../img/instagram.svg")} alt=""/></span>
                        <span>instagram.com/dvj_ng/</span>
                    </div>
                </div>
            </div>
            <div className="col l6 m12 s12">
                <h2>Get In Touch With Me</h2>
                <form onSubmit={ handleSubmit }>
                    <div className="contact-section-content">
                        <div className="input-field" ref={ observers[3][0] }>
                            <input id="full_name" name="full_name" type="text" className="validate" required/>
                            <label htmlFor="full_name">Full Name</label>
                        </div>
                        <div className="input-field" ref={ observers[4][0] }>
                            <input id="subject" name="subject" type="text" className="validate" required/>
                            <label htmlFor="subject">Subject</label>
                        </div>
                        <div className="row">
                            <div className="input-field col s12" ref={ observers[5][0] }>
                                <input id="email" type="email" className="validate" name="email" required/>
                                <label htmlFor="email">Email</label>
                                <span className="helper-text" data-error="invalid email" data-success="valid email">Please enter a valid email that we can contact you with.</span>
                            </div>
                        </div>
                        <div className="input-field" ref={ observers[6][0] }>
                            <textarea id="textarea1" className="materialize-textarea" required></textarea>
                            <label htmlFor="textarea1">Message</label>
                        </div>
                        <div className="right-align">
                            <button className="flat-btn right-align" ref={ observers[7][0] } type="submit">SEND MESSAGE</button>
                        </div>
                    </div>
                </form>
            </div>
                { loading ? <div id="contact-loader">
                    <img src={ require("../img/loader.gif") } alt="loader"/>
                </div> : <></>}
        </div>
    )
}