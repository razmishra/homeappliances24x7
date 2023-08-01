import React, { useState } from "react";
import { Container, Row, Col, Form, FormGroup, Label, Input } from "reactstrap";
import "./Registration.css";

const Registration = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const [errorName, setNameError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/registration/mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phone, message }),
      });
      if (response.ok) {
        console.log(response);
        console.log("Email sent.. successfully");
        // Reset form fields
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setNameError("");
        setResponseMessage(`Response sent!`);
      } else {
        const errorData = await response.json();
        console.log(errorData.message);
        setNameError(errorData.message);
        setResponseMessage("");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <h1 className="form-text">Fill this form, we'll contact you</h1>
      <div className="response-container ">
        <div className="response-message">{responseMessage}</div>
      </div>

      <div className="error-container ">
        <div className="error-message">{errorName}</div>
      </div>
      <Container className="registration">
        <Row className="justify-content-center">
          <Col xs="12" sm="8" md="6">
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label for="name">Name</Label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </FormGroup>

              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormGroup>

              <FormGroup>
                <Label for="phone">Phone Number</Label>
                <Input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="Enter your phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </FormGroup>
              
              <FormGroup>
                <Label for="message">Message</Label>
                <Input
                  type="text"
                  name="message"
                  id="message"
                  placeholder="Let us know what services you want us to serve"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </FormGroup>

              <button className="submitBtn">
                Submit
                <svg
                  fill="white"
                  viewBox="0 0 448 512"
                  height="1em"
                  className="arrow"
                >
                  <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path>
                </svg>
              </button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Registration;
