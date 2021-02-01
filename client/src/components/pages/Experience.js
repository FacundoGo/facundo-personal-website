import React, { Component } from 'react'
import Navbar from '../Navbar';
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'

export default class Experience extends Component {
  render() {
    return (
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Navbar></Navbar>
        <h1 style={{marginTop: '3%'}}>Experience</h1>
        <Accordion style={{width: '50vw', marginTop: '3%'}}defaultActiveKey="0">
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        <h3>Chief Operating Officer at Leonyte Biosystems</h3>
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body><ul style={{textAlign: 'left', width: '40vw'}}>
        <li>Fundraised over €3.4 million in 3 rounds</li>
        <li>Defined and implemented scalable processes for a high performing technical team of over 17 scientists and engineers</li>
        <li>Developed and managed entire B2B accounts in the US and Europe</li>
      </ul>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
        Click me!
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>Hello! I'm another body</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
      </div>
    )
  }
}
