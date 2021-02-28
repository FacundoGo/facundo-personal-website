import React, { Component } from 'react'
import Navbar from '../Navbar';
import './Experience.css';

export default class Experience extends Component {
  render() {
    return (
      <div className="main">
        <Navbar></Navbar>
        <h1 className="header">Experience</h1>
        <div className="entries">
        <div className="entry">
        <h3><a href="https://facundo-gomez.herokuapp.com/Experience" className="companyLink"> </a><span className="role">COO & Head of Product</span></h3>
        <h5 className="dates">Nov/2020 - Present</h5>
        <h5 className="location">Remote</h5>
        <ul>
        <li>Assess and improve the Digital Health accelerator program of a large pharmaceutical</li>
        <li>Building web based prototypes for startups</li>
        <li>Interim Product Manager for clean tech start ups</li>
      </ul>
        </div>
        <div className="entry">
        <h3><a href="www.leonyte.com" target="_blank" className="companyLink">Leonyte Biosystems - </a><span className="role">COO & Head of Product</span></h3>
        <h5 className="dates">Jan/2017 - Nov/2020</h5>
        <h5 className="location">Berlin, Germany</h5>
        <ul>
        <li>Led product development strategy for a high-performing technical of over 17 scientists and engineers</li>
        <li>Fundraised over €3.4 million in 3 rounds</li>
        <li>Developed and managed entire B2B accounts in the US and Europe</li>
      </ul>
        </div>
        <div className="entry">
        <h3><a href="www.mcblabs.com" target="_blank" className="companyLink">MCB Labs - </a><span className="role">Entrepreneur-in-Residence</span></h3>
        <h5 className="dates">Jul/2016 - Dec/2016</h5>
        <h5 className="location">Berlin, Germany</h5>
        <ul>
        <li>Defined and built the initial customer pipeline for novel AI based sales training technology</li>
        <li>Created business case for novel pathogen-detection technology, including commercialisation and licensing over 13 patents</li>
      </ul>
      </div>
      <div className="entry">
      <h3><a href="www.jpmorgan.com" target="_blank" className="companyLink">JP Morgan Chase - </a><span className="role">Trading and Sales Operations Analyst</span></h3>
        <h5 className="dates">May/2014 - Jul/2015</h5>
        <h5 className="location">Buenos Aires, Argentina</h5>
        <ul>
        <li>Defined and built the initial customer pipeline for novel AI based sales training technology</li>
        <li>Created business case for novel pathogen-detection technology, including commercialisation and licensing over 13 patents</li>
      </ul>
      </div>
      <div className="entry">
      <h3><a href="www.paradigma.com" target="_blank" className="companyLink">Paradigma - </a><span className="role">Strategy Consultant</span></h3>
        <h5 className="dates">Oct/2013 - May/2014</h5>
        <h5 className="location">Buenos Aires, Argentina</h5>
        <ul>
        <li>Quantified the potential improvements available in the commercial banking operations in Banco Industrial</li>
        <li>Analysed and redesigned the Procurement and Accounts Payable operations of Monsanto benchmarking against other clients, advised on over 25 points of improvement</li>
      </ul>
      </div>
      </div>
      </div>
      
    )
  }
}
