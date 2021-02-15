import React, { Component } from 'react'
import Posts from './Posts'
import './Main.css'

export default class Main extends Component {
  render() {
    return (
        <div>
        <h1 style={{ marginTop: '30px' }}>Hi! I'm Facundo.</h1>
        <div style={{display: 'flex', justifyContent: 'center'}}><h4 style={{fontWeight:"300", width: '50%', textAlign: 'center'}}>
        Freelance Fullstack Developer and Accelerator Development Consultant at eWorks.</h4></div>
        {/* <Main></Main> */}
            <div id="container-main">
                  <Posts name="Experience" img="../experience1.jpg"></Posts>
                  <Posts name="Education" img="../education1.jpg"></Posts>
                  {/* <Posts name="Software Projects" img="../software1.jpg"></Posts> */}
                  {/* <Posts name="Services" img="../services1.jpg"></Posts> */}
                  <Posts name="Contact" img="../contact1.jpg"></Posts>
                  {/* <Posts name="Surprise" img="../surprise1.jpg"></Posts> */}
            </div>

        </div>
    )
  }
}
