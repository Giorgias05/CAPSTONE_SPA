import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import TratCorpo from "../image/TratCorpo.jpg";
import Prenotazioni from "./Prenotazioni";

function TrattamentoCorpo() {
  return (
    <div className="container my-custom-class fw-bold">
      <h1 className="text-center">TRATTAMENTO CORPO</h1>
      <br />
      <Row>
        <Col xs={12} sm={6} md={4} lg={3}>
          <Image
            src={TratCorpo}
            alt="percorso spa"
            className="img-fluid custom-image"
            style={{ width: "100%", height: "auto" }}
          />
        </Col>
        <p className="text-center">
          <br />
          <h2> Trattamento Completo Hammam</h2> <br />
          <hr />
          Trattamento, proveniente dalla tradizione orientale. Il rituale inizia
          con un bagno di vapore attraverso il calore umido dell'hammam si
          favorisce la dilatazione dei pori, l'eliminazione delle tossine e si
          distendono le tensioni muscolari. Si prosegue con un savonage al
          sapone nero del Marocco massaggiato con l'originale guanto di Kassa,
          secondo la tradizione del Maghreb: un'antica gestualità immancabile
          nella cura di bellezza marocchina. Conclude il rituale un massaggio a
          base di olio caldo caratterizzato da sfioramenti lenti e profondi.{" "}
          <br />
          <br />
          BENEFICI: si raggiunge uno stato di completo benessere con il
          rilassamento del corpo e della mente. La pelle risulterà elastica e
          levigata. <br />
          DURATA 100 minuti.
        </p>
        <div>
          <br />
          <p className="text-center">
            <br />
            <h1>INFO UTILI</h1>
            E' necessario prenotare il trattamento con almeno 48 ore d'anticipo.{" "}
            <br /> Si consiglia di presentarsi presso il centro benessere con
            almeno 15 minuti di anticipo. <br /> E' necessario portare con sé
            solo il costume da bagno, noi ti forniamo un accappatoio ed un paio
            di ciabatte.
            <br />
            <br />
            Validità: dal lunedì al venerdi.
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

export default TrattamentoCorpo;
