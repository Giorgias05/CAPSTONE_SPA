import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "../App.css";
import Imgtratb from "../image/Imgtratb.jpg";
import Imgj from "../image/Imgj.jpg";

function MyJumbotron() {
  return (
    <Container className="mt-3 my-jumbotron">
      <Row className="position-relative jumbotron-row">
        <Col md={12} className="text-center"> <br />
        <br />
          <h1>Benvenuto nel benessere</h1>
          <p className="text-secondary fs-05 my-5">
            Vieni a scoprire la meraviglia di un luogo dove il tempo sembra
            fermarsi. Il nostro centro ti offre un'oasi di relax e magia, <br />
            dove puoi immergerti completamente e lasciarti trasportare in una
            dimensione di calma e serenità. Esplora la nostra spa e il nostro
            centro termale <br />
            ti regaleranno esperienze indimenticabili in un ambiente
            incantevole. <br />
            Lascia che la cura del corpo e della mente si fondono con l'incanto
            del luogo, consentendoti di rigenerare il tuo spirito e trovare un
            nuovo equilibrio interiore. <br />
            Preparati a vivere un'esperienza straordinaria, dove ogni momento è
            un incanto di benessere..
          </p>
        </Col>
      </Row>
      <br />
      <Row className="mt-3 align-items-center">
        <Col md={4} className="d-flex justify-content-end">
          <Image
            src={Imgtratb}
            alt="Immagine trattamenti"
            className="img-fluid custom-image"
          />
        </Col>
        <Col md={4} className="text-secondary fs-03 my-0">
          <br />
          <p className="text-center">
            <h4> ORARI DI APERTURA </h4> <br />
            <h4>domenica - giovedì 09:00-23:00</h4> <br />
            <hr />
            <br />
            <h4>venerdì- sabato 09:00-24:00 </h4> <br />
          
          </p>
        </Col>
        <Col md={4} className="d-flex justify-content-start">
          <Image
            src={Imgj}
            alt="Immagine luogo"
            className="img-fluid custom-image"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default MyJumbotron;
