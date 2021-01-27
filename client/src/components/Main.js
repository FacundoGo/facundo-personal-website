
import React, { Component } from 'react'
import Posts from './Posts'
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import './Main.css'

export default class Main extends Component {
  render() {
    return (
            <div id="container-main">
                  <Posts name="Experience" img="../experience1.jpg"></Posts>
                  <Posts name="Education" img="../education1.jpg"></Posts>
                  <Posts name="Software Projects" img="../software1.jpg"></Posts>
                  <Posts name="Services" img="../services1.jpg"></Posts>
                  <Posts name="Contact" img="../contact1.jpg"></Posts>
                  <Posts name="Surprise(!?)" img="../surprise1.jpg"></Posts>
            </div>
    )
  }
}
