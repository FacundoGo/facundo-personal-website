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
        <h4>Chief Operating Officer</h4>
        <h4>Leonyte Biosystems - Berlin, Germany</h4>
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
        <h4>Entrepreneur-in-Residence</h4>
        <h4>MCB Labs - Berlin, Germany</h4>
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body><ul style={{textAlign: 'left', width: '40vw'}}>
        <li>Defined and built the initial customer pipeline for novel AI based sales training technology</li>
        <li>Created business case for novel pathogen-detection technology, including commercialisation and licensing over 13 patents</li>
      </ul>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="2">
        <h4>Trading and Sales Operations Analyst</h4>
        <h4>JP Morgan Chase - Buenos Aires, Argentina</h4>
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="2">
      <Card.Body><ul style={{textAlign: 'left', width: '40vw'}}>
        <li>Defined and built the initial customer pipeline for novel AI based sales training technology</li>
        <li>Created business case for novel pathogen-detection technology, including commercialisation and licensing over 13 patents</li>
      </ul>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="3">
        <h4>Strategy Consultant</h4>
        <h4>Paradigma - Buenos Aires, Argentina</h4>
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="3">
      <Card.Body><ul style={{textAlign: 'left', width: '40vw'}}>
        <li>Quantified the potential improvements available in the commercial banking operations in Banco Industrial</li>
        <li>Analysed and redesigned the Procurement and Accounts Payable operations of Monsanto benchmarking against other clients, advised on over 25 points of improvement</li>
      </ul>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
      </div>
    )
  }
}
