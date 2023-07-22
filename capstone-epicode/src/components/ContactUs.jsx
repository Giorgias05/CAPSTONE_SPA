import React from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaParking } from "react-icons/fa";

export default function App() {
  return (
    <div className="mt-5">
      <Container className="text-center mb-4"> <br />
      
        <h3 className="mb-4">CONTATTACI</h3>
        <Row>
          <Col lg={5} xs={12}>
            <h5>DOVE SIAMO</h5>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.384456051425!2d12.496365315239405!3d41.902783579219454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13258910538c2f8f%3A0x3e7b4c32a001af53!2sRome%2C%20Italy!5e0!3m2!1sen!2sca!4v1626444029895!5m2!1sen!2sca"
              className="img-fluid custom-image"
              style={{ width: "80%", height: "80%" }}
              loading="lazy"
              title="Mappa di Roma, Italia"
            ></iframe>
          </Col>
          <Col xs={12} sm={12} md={8} lg={6}>
            <Row>
              <Col md={8}>
                <Form>
                  <Form.Group as={Row} className="mb-2">
                    <Form.Label column sm={12}>
                      Nome*
                    </Form.Label>
                    <Col sm={12}>
                      <Form.Control type="text" id="form3FirstName" />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-4">
                    <Form.Label column sm={12}>
                      Email*
                    </Form.Label>
                    <Col sm={12}>
                      <Form.Control type="email" id="form3Email" />
                    </Col>
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Label>Inserisci un messaggio*</Form.Label>
                    <Form.Control as="textarea" id="form3Textarea" rows={3} />
                  </Form.Group>
                  <Button variant="light" className="mb-4">
                    INVIA
                  </Button>
                </Form>
              </Col>
              <Col md={3} className=" text-center">
                <ul className="list-unstyled">
                  <li>
                    <FaMapMarkerAlt size={35} className="text-dark" />
                    <p>
                      <small>Roma, RM, Italy</small>
                    </p>
                  </li>
                  <li>
                    <FaParking size={35} className="text-dark" />
                    <p>
                      <small>Free Park in Loco</small>
                    </p>
                  </li>

                  <li>
                    <FaPhone size={35} className="text-dark" />
                    <p>
                      <small>+39061234567</small>
                    </p>
                  </li>
                  <li>
                    <FaEnvelope size={35} className="text-dark" />
                    <p>
                      <small>epicspa@io.com</small>
                    </p>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
