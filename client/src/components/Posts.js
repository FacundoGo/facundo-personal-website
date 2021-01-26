import React, { Component } from 'react'
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'

export default class Posts extends Component {
  render() {
    return (
<Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>{this.props.name}</Card.Title>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Go here!</small>
    </Card.Footer>
  </Card>
    )
  }
}
