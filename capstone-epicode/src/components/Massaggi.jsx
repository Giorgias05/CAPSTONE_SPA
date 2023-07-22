import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import MasRelax from "../image/masrelax.jpg";
import { ListGroup } from "react-bootstrap";
import Prenotazioni from "./Prenotazioni";

function Massaggi() {
  return (
    <div className="container my-custom-class fw-bold">
      <h1 className="text-center">MASSAGGI</h1>
      <br />
      <Row>
      <Col xs={12} sm={6} md={4} lg={3}>
          <Image
            src={MasRelax}
            alt=" cabina massaggio "
            className="img-fluid custom-image"
            style={{ width: "100%", height: "auto" }}
            />
        </Col> 
        <h2 className="text-center"> Il Massaggio Pensato Per Te</h2>
          <br />
        <br />
        <hr />
          <p className="text-center"> <br />
            La nostra EPIC SPA ha il piacere di proporre ai propri ospiti una selezione di
            trattamenti unici ed esclusivi. <br /> Immergetevi in un'esperienza unica
            dove potrete scegliere tra una varietà di massaggi. Affidatevi ai
            nostri “specialisti”, <br /> chiedete consiglio sul trattamento più adatto
            alle vostre esigenze.<br />
          <br />
          <ul className="text-start" >
  <li>
    <ListGroup.Item>
      Massaggi rigeneranti di 25 minuti a scelta tra cervicale, schiena, gambe o viso
    </ListGroup.Item>
  </li>
  <li>
    <ListGroup.Item>
      Massaggi di 50 minuti tra aromasoul, energia, tradizionale o antistress
    </ListGroup.Item>
  </li>
  <li>
    <ListGroup.Item>
      Massaggio di coppia di 25 minuti tra cervicale, schiena o gambe
    </ListGroup.Item>
  </li>
</ul>
          </p> 
          <br />
          <br />
          <div>
            <p className="text-center"> <hr />
              <br />
              <h1>INFO UTILI</h1>
              E' necessario prenotare il trattamento con almeno 48 ore
              d'anticipo. Si consiglia di presentarsi presso il centro benessere
              con almeno 30 minuti di anticipo rispetto all'orario del
              massaggio. E' necessario portare con sé solo il costume da bagno,
              noi ti forniamo un accappatoio, un telo ed un paio di ciabatte.{" "}
              <br />
              <br />
              Validità: dal lunedì alla domenica compresi festivi e prefestivi.{" "}
              <br />
              NON E' CONSENTITO l’ingresso ai minori di 14 anni. <br />
              <hr /> *Prenota
              ora e paga comodamente in sede
            </p>
          </div>
      </Row>
      <br />
    </div>
  );
}
export default Massaggi;
