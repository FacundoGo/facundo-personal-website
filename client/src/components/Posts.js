import React, { Component } from 'react'
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'

export default class Posts extends Component {
  render() {
    return (
<Card style={{ width: '20rem' }}>
    <Card.Img variant="top" src={this.props.img} />
    <Card.Footer>
    <Card.Title>{this.props.name}</Card.Title>
    </Card.Footer>
  </Card>
    )
  }
}
