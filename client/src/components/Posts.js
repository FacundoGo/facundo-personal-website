import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import './Posts.css'

export default class Posts extends Component {
  render() {
    return (
<Card style={{ width: '13rem' }}>
<Link to={`/${this.props.name}`}></Link>
    <Card.Footer >
    <Link className="card-label" to={`/${this.props.name}`}>{this.props.name}</Link>
    </Card.Footer>
  </Card>
    )
  }
}
