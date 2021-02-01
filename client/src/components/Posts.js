import React, { Component } from 'react'
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

export default class Posts extends Component {
  render() {
    return (
<Card style={{ width: '13rem' }}>
    <Card.Img variant="top" src={this.props.img} />
    <Card.Footer>
    <Card.Title><Link to={`/${this.props.name}`}>{this.props.name}</Link></Card.Title>
    </Card.Footer>
  </Card>
    )
  }
}
