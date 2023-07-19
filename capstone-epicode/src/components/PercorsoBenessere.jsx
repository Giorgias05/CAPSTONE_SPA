import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Perspa from "../image/perspa.jpeg";
import Prenotazioni from "./Prenotazioni";

function PercorsoBenessere() {
  return (
    <div className="container my-custom-class fw-bold">
      <h1 className="text-center">PERCORSO BENESSERE</h1>
      <br />
      <Row>
        <Col xs={12} sm={6} md={4} lg={3}>
          <Image
            src={Perspa}
            alt="percorso spa"
            className="img-fluid custom-image"
            style={{ width: "100%", height: "auto" }}
          />
        </Col>
          <br />
          <h2 className="text-center"> Il Percorso Benessere Pensato Per Te</h2> <br />
          <hr /> <p className="text-center">
          Il PERCORSO BENESSERE offre una piscina spaziosa e luminosa con
          idromassaggio e diverse sedute per ottenere appieno il rilassamento. <br />
          L'acqua cristallina e i getti d'acqua delicati ti regalano un meraviglioso
          sollievo muscolare. <br />
          Un'atmosfera tranquilla con illuminazione soffusa e musica ambientale
          favorisce il rilassamento completo.
        </p>
        <div>
          <br />
          <p className="text-start">
            <h1>INFO UTILI</h1>
            E' necessario prenotare il trattamento con almeno 48 ore d'anticipo. <br />
            Si consiglia di presentarsi presso il centro benessere con almeno 30
            minuti di anticipo. <br /> E' necessario portare con sé solo il costume da
            bagno, noi ti forniamo un accappatoio, un telo ed un paio di
            ciabatte. <br />
            <br />
            Validità: dal lunedì alla domenica compresi festivi e ponti
            <br />
            *Prenota ora e paga comodamente in sede</p>
        </div>
      </Row>
      <br />
    </div>
  );
}
export default PercorsoBenessere;