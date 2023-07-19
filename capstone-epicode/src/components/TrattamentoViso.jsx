import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import TratViso from "../image/TratViso.png";
import Prenotazioni from "./Prenotazioni";

function TrattamentoCorpo() {
  return (
    <div className="container my-custom-class fw-bold">
      <h1 className="text-center">TRATTAMENTO VISO</h1>
      <br />
      <Row>
        <Col xs={12} sm={6} md={4} lg={3}>
          <Image
            src={TratViso}
            alt="percorso spa"
            className="img-fluid custom-image"
            style={{ width: "100%", height: "auto" }}
          />
        </Col>
        <p className="text-center">
          <br />
          <h2 className="text-center">Thai Viso </h2>
          <hr />
          E' un trattamento nato in Thailandia moltissimi anni fa. E' molto
          rilassante ed effettua un lavoro profondo su linee energetiche <br />
          del viso per attenuare i segni della stanchezza, dell'invecchiamento e
          per rendere più luminoso il viso. <br />
          Questo tipo di massaggio combina movimenti specifici, digitopressioni
          e stretching per rilassare <br />
          i muscoli del viso, migliorare la circolazione sanguigna, ridurre le
          tensioni e promuovere una sensazione di benessere generale. <br />
          Il Thai Viso può includere anche l'utilizzo di oli o creme per
          idratare la pelle e favorire una maggiore elasticità. <br />
          BENEFICI: i benefici di questo massaggio includono il rilassamento
          muscolare, il miglioramento della circolazione sanguigna, <br />
          la riduzione dello stress e dell'ansia, nonché il miglioramento
          dell'elasticità della pelle. <br />
          Inoltre contribuisce a promuovere il benessere generale del viso e a
          dona luminosità alla pelle. <br />
          DURATA 50 minuti.
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
