import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav';

export default class Navbar extends Component {
  render() {
    return (
      <Nav className="justify-content-center" activeKey="/home">
            <Nav.Item>
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/Experience">Experience</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/Education">Education</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/Contact">Contact</Nav.Link>
      </Nav.Item>
    </Nav>
    )
  }
}
