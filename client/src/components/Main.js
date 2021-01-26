
import React, { Component } from 'react'
import Posts from './Posts'
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import './Main.css'

export default class Main extends Component {
  render() {
    return (
            <div id="container-main">
                  <Posts name="Experience"></Posts>
                  <Posts name="Education"></Posts>
                  <Posts name="Software Projects"></Posts>
                  <Posts name="Services"></Posts>
                  <Posts name="Contact"></Posts>
                  <Posts name="Surprise"></Posts>
            </div>
    )
  }
}
