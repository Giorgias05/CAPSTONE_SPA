import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Saunavista from "../image/saunavista.jpg";
import Prenotazioni from "./Prenotazioni";

function SaunaVista() {
  return (
    <div className="container my-custom-class fw-bold">
      <h1 className="text-center">SAUNA CON VISTA</h1>
      <br />
      <Row>
        <Col xs={12} sm={6} md={4} lg={3}>
          <Image
            src={Saunavista}
            alt="Sauna vista"
            className="img-fluid custom-image"
            style={{ width: "100%", height: "auto" }}
          />
        </Col>
        <br />
        <h2 className="text-center"> Sauna Vista Lago</h2>
        <br />
        <br />
        <hr />
        <br />
        <p className="text-start">
          Un'oasi di calma e relax con una vista mozzafiato. Immergetevi in
          un'atmosfera di benessere mentre ammirate la maestosità del lago
          circostante. <br /> La sauna, con le sue calde temperature e il legno
          profumato, vi avvolgerà in una sensazione di profondo rilassamento.{" "}
          <br /> Godetevi il tepore rigenerante e lasciatevi trasportare dalla
          tranquillità del paesaggio lacustre che si estende di fronte a voi.{" "}
          <br /> Un'esperienza unica che combina i benefici della sauna con la
          serenità offerta dalla bellezza naturale del lago.
        </p>
        <br />
        <div>
          <p className="text-start">
            <br />
            <br />
            <h1>INFO UTILI</h1>
            PRENOTA SUBITO! <br />
            E' necessario portare con sé solo il costume da bagno, noi ti
            forniamo un accappatoio, un telo ed un paio di ciabatte. <br />
            Validità: dal lunedì alla domenica compresi festivi, prefestivi e
            ponti.
            <br />
            NON E' CONSENTITO l’ingresso ai minori di 14 anni. <br />
            *Prenota ora e paga comodamente in sede
          </p>
        </div>
      </Row>
      <br />

    </div>
  );
}

export default SaunaVista;
