import React, { Component } from 'react'
import Navbar from '../Navbar';
import './Education.css';

export default function Education() {
  return (
<div className="main">
        <Navbar></Navbar>
        <h1 className="header">Education</h1>
        <div className="entries">
        <div className="entry">
        <h3><a href="www.ironhack.com" target="_blank" className="companyLink">Ironhack - </a><span className="role">Web Development Bootcamp</span></h3>
        <h5 className="dates">Oct/2017 - Jan/2021</h5>
        <h5 className="location">Berlin, Germany</h5>
        <p>Javascript ES6+, ReactJS, HTML & CSS, NodeJS, ExpressJS, MongoDB, HTTP requests & REST APIs</p>
        </div>
        <div className="entry">
        <h3><a href="www.esade.com" target="_blank" className="companyLink">Esade Business School - </a><span className="role">MSc Innovation & Entrepreneurship</span></h3>
        <h5 className="dates">Sep/2015 - Sep/2016</h5>
        <h5 className="location">Barcelona, Spain</h5>
        <p>Apart from the core content which included the design thinking process, financial analyis and digital marketing, I took the opportunity to experiment with Hackathons (winning 2), social entrepreneurship, and bein a class representative, among other things.</p>
        </div>
        <div className="entry">
        <h3><a href="https://www.unibocconi.eu/wps/wcm/connect/Bocconi/SitoPubblico_EN/Navigation+Tree/Home/" target="_blank" className="companyLink">Università Bocconi - </a><span className="role">BSc International Finance</span></h3>
        <h5 className="dates">Sep/2010 - Sep/2013</h5>
        <h5 className="location">Milan, Italy</h5>
        <p>Apart from the core content which included the design thinking process, financial analyis and digital marketing, I took the opportunity to experiment with Hackathons (winning 2), social entrepreneurship, and bein a class representative, among other things.</p>
        </div>
        <div className="entry">
        <h3>Languages</h3>
        <ul>
          <li>Spanish - Native</li>
          <li>English - Fluent</li>
          <li>Italian - Fluent</li>
          <li>German - B2 (Advanced)</li>
        </ul></div>
      </div>
      </div>
  )
}
