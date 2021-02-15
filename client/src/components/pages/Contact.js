import React, { useState } from 'react'
import Navbar from '../Navbar';
import './Contact.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import InputGroup from 'react-bootstrap/InputGroup'
import emailjs from 'emailjs-com'
import{ init } from 'emailjs-com';
init("user_b4p7ysVMsSXdv4dPZOrV5");

export default function Contact() {
  const [validated, setValidated] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('' );
  const [message, setMessage] = useState('')

  const handleName = (event) => {
    setFirstName(event.target.value)
  }
  const handleLastName = (event) => {
    setLastName(event.target.value)
  }
  const handleEmail = (event) => {
    setEmail(event.target.value)
  }
  const handleMessage = (event) => {
    setMessage(event.target.value)
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    if (form.checkValidity() === true){
      console.log(firstName, lastName, email, message)
      sendEmail()
    }

    setValidated(true);
    
    
  };

  var templateParams = {
    from_name: `${firstName + lastName}`,
    lastName,
    reply_to: email,
    message
};
 
const sendEmail = () => {
  emailjs.send(`service_pb88ogc`, `template_2xds8yh`, templateParams)
  .then(function(response) {
      alert('you message was successfully sent!')
      window.location.reload(false);
     console.log('SUCCESS!', response.status, response.text);
  }, function(error) {
     console.log('FAILED...', error);
  });

}

  return (
    <div>
  <Navbar></Navbar>
  <h1 className="header">Contact</h1>
  <div className="form-container">
    <Form className="form-content" noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Row className="email-form">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            value={firstName}
            onChange={handleName}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
              Your name please :)
            </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            value={lastName}
            onChange={handleLastName}
          />
              <Form.Control.Feedback type="invalid">
              Your last name please :O
            </Form.Control.Feedback>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        </Form.Row>
        <Form.Row className="email-form">
        <Form.Group as={Col} md="8" controlId="validationCustomUsername">
          <Form.Label>Email</Form.Label>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              type="text"
              placeholder="Username"
              aria-describedby="inputGroupPrepend"
              required
              value={email}
              onChange={handleEmail}
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        </Form.Row>
      <Form.Row className="message-form">
        <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control
         as="textarea" 
         rows={3} 
         cols={48} 
         value={message}
         required
        onChange={handleMessage}
         />
        <Form.Control.Feedback type="invalid">
          Don't be shy now!
        </Form.Control.Feedback>
    </Form.Group>
      </Form.Row>
      <Form.Group>
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
        />
      </Form.Group>
      <div>
      <Button type="submit">Submit form</Button>
      </div>
    </Form>
    </div> 
    </div>
    
  );
}

// render(<Contact />);
