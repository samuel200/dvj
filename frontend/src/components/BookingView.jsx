import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import $ from 'jquery';
import axios from 'axios';

import { NavigationBar } from './NavigationBar';
import { Footer } from './Footer';

export const BookingView = ()=>{
    const [ loading, setLoading ] = useState(false);
    const [ bookingCode , setBookingCode ] = useState("");
    const [ appointment , setAppointment ] = useState({});
    const bStyle = {
        paddingRight: "15px"
    }
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
    })
];
    const [modal1, modal2] = [useRef(), useRef()]
    useEffect(()=>{
        var elems = document.querySelectorAll('.modal');
        window.M.Modal.init(modal1.current, {});
        window.M.Modal.init(modal2.current, {});
    }, [])

    observers.map(([ref, inView, entry]) =>{
        if(inView){
            $(entry.target).css({
                top: "0px",
                opacity: 1
            });
        }
    })

    const resetForm = form=>{
        form.find("input[name='name']").val("")
        form.find("input[name='phone_number']").val("")
        form.find("input[name='date']").val("")
        form.find("textarea").val("")
    }

    const handleSubmit = e =>{
        e.preventDefault();
        const form = $(e.target);
        const instance = window.M.Modal.getInstance(modal1.current);
        setLoading(true);

        axios.post("/book_appointment/", {
            name: form.find("input[name='name']").val(),
            phone_number: form.find("input[name='phone_number']").val(),
            date: form.find("input[name='date']").val(),
            description: form.find("textarea").val()
        }).then(({data})=>{
            window.M.toast({"html": data.success_message, classes: "green white-text"});
            setLoading(false);
            resetForm(form);
            setBookingCode(data.booking_id);
            instance.open();
        }).catch((error)=>{
            console.log(error);
            window.M.toast({"html": "Error While Booking Appointment", classes: "red white-text darken-3"});
            setLoading(false);
        })
    }

    const handleCheckAppointment = e =>{
        e.preventDefault();
        const form = $(e.target);
        const instance = window.M.Modal.getInstance(modal2.current);
        setLoading(true);

        axios.post("/check_appointment/", {
            booking_id: form.find("input[name='booking_id']").val()
        }).then(({data})=>{
            console.log(data);
            setLoading(false);
            form.find("input [name='booking_id']").val("");
            setAppointment(data);
            instance.open();
        }).catch((error)=>{
            setLoading(false);
            window.M.toast({"html": "Booking Code Is Invalid", classes: "red white-text darken-3"});
        })
    }

    return(
        <div>
            <NavigationBar hide={true} />
            <div id="contact" className="row" style={{position: "relative"}}>
            <div className="col l6 m12 s12">
                <h2>Book An Appointment</h2>
                <div className="contact-section-content">
                    <p>Fill the fields below and book an appointment with DVJ. Make sure to save the booking code to know if your appointment was accepted, declined or changed.</p>
                    <form onSubmit={ handleSubmit }>
                        <div class="input-field" ref={ observers[0][0] }>
                            <input id="icon_prefix" type="text" class="validate" name="name" required/>
                            <label for="icon_prefix">Your Name</label>
                        </div>
                        <div class="input-field" ref={ observers[1][0] }>
                            <input id="icon_telephone" type="tel" class="validate" name="phone_number" required/>
                            <label for="icon_telephone">Phone Number</label>
                        </div>
                        <div class="input-field" ref={ observers[2][0] }>
                            <input id="last_name" type="Date" className="validate" name="date" required/>
                            <label htmlFor="last_name">Schedule Date</label>
                        </div>
                        <div class="input-field" ref={ observers[3][0] }>
                            <textarea id="textarea1" class="materialize-textarea" name="description" required></textarea>
                            <label for="textarea1">Description</label>
                        </div>
                        <div className="right-align" ref={ observers[4][0] }>
                            <button className="flat-btn right-align" type="submit">Book Appointment</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="col l6 m12 s12">
                <h2>Get In Touch With Me</h2>
                <div className="contact-section-content">
                    <p>Enter your booking code to track if your appointment has been registered by DVJ</p>
                    <form onSubmit={ handleCheckAppointment }>
                        <div class="input-field" ref={ observers[5][0] }>
                            <input id="first_name" type="text" className="validate" name="booking_id" required/>
                            <label htmlFor="first_name">Booking Code</label>
                        </div>
                        <div className="right-align" ref={ observers[6][0] }>
                            <button className="flat-btn right-align" type="submit">Check Appointment</button>
                        </div>
                    </form>
                </div>
            </div>
                { loading ? <div id="contact-loader">
                    <img src={ require("../img/loader.gif") } alt="loader"/>
                </div> : <></>}
        </div>
        <div id="modal1" className="modal" ref={ modal1 }>
            <div className="modal-content">
                <h4>Your Appointment Has Been Booked</h4>
                <p>Your booking code is <b>{ bookingCode }</b></p>
                <div>
                    <sub>Save your booking code so as to know when your appointment has been registered.</sub>
                </div>
                <div>
                    <sub>We will get back to you as soo as possible.</sub>
                </div>
            </div>
            <div className="modal-footer">
                <a href="#!" className="modal-close waves-effect waves-green btn-flat">close</a>
            </div>
        </div>
        <div id="modal2" className="modal" ref={ modal2 }>
            <div className="modal-content">
                <h4>Appointment Information</h4>
                <p><b style={ bStyle }>Name:</b> { appointment.name }</p>
                <p><b style={ bStyle }>Phone Number:</b> { appointment.phone_number }</p>
                <p><b style={ bStyle }>Description:</b> { appointment.description }</p>
                <p><b style={ bStyle }>Appointment Registration Status:</b> { appointment.status ? "Registered" : "Pending" }</p>
                <p><b style={ bStyle }>Appointment Date:</b> { appointment.date }</p>
            </div>
            <div className="modal-footer">
                <a href="#!" className="modal-close waves-effect waves-green btn-flat">close</a>
            </div>
        </div>
            <Footer />
        </div>
    )
}