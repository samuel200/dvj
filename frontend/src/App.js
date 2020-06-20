import React, { useEffect } from 'react';
import $ from 'jquery';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { NavigationBar } from './components/NavigationBar';
import { LandingView } from './components/LandingView';
import { PortfolioView } from './components/PortfolioView';
import { AboutMeView } from './components/AboutMeView';
import { AboutMyServicesView } from './components/AboutMyServicesView';
import { ContactView } from './components/ContactView';
import { BookingView } from './components/BookingView';
import { Footer } from './components/Footer';
import { ToTop } from './components/ToTop';
import { Loader } from './components/Loader';

export const App = () => {
  useEffect(()=>{
    setTimeout(()=>{
      $("#loader").addClass("loader-exit");
      setTimeout(()=>{
        $("#loader").css({display: "none"})
      }, 500)
    },3000)
  }, [])
  return (
    <Router>
      <Route exact path="/" render={()=>(
        <div id="App">
          <NavigationBar />
          <LandingView />
          <div className="container app">
            <PortfolioView />
            <AboutMeView />
            <AboutMyServicesView />
          </div>
          <a href="#" id="service-footer">We Offer So Much More .......</a>
          <ContactView />
          <Footer />
        </div>
      )}/>
      <ToTop/>
      <Loader />
      <Route path="/booking" component={ BookingView }/>
    </Router>
  )
}
