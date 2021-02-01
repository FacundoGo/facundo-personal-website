import logo from '../logo.svg';
import React, { Component } from 'react'
import Posts from './Posts'
// import CardDeck from 'react-bootstrap/CardDeck'
// import Card from 'react-bootstrap/Card'
import './Main.css'

export default class Main extends Component {
  render() {
    return (
            <div>
        <h1 style={{ marginTop: '30px' }}>Hi! I'm Facundo.</h1>
        <div style={{display: 'flex', justifyContent: 'center'}}><h4 style={{width: '50%', textAlign: 'center'}}>
        Freelance Fullstack Developer and Accelerator Development Consultant at eWorks.</h4></div>
        {/* <Main></Main> */}
            <div id="container-main">
                  <Posts name="Experience" img="../experience1.jpg"></Posts>
                  <Posts name="Education" img="../education1.jpg"></Posts>
                  <Posts name="Software Projects" img="../software1.jpg"></Posts>
                  <Posts name="Services" img="../services1.jpg"></Posts>
                  <Posts name="Contact" img="../contact1.jpg"></Posts>
                  <Posts name="Surprise(!?)" img="../surprise1.jpg"></Posts>
            </div>
        <footer style={{height: '20px'}}>
        Made with <img src={logo} className="App-logo" alt="logo" width="50px"/> in Berlin
        </footer>
        </div>
    )
  }
}
