import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Piscinasera from "../image/piscinasera.jpg";
import Prenotazioni from "./Prenotazioni";

function IngressoSerale() {
  return (
    <div className="container my-custom-class fw-bold">
      <h1 className="text-center">INGRESSO SERALE</h1>
      <br />
      <Row>
        <Col xs={12} sm={6} md={4} lg={3}>
          <Image
            src={Piscinasera}
            alt="Piscina sera"
            className="img-fluid custom-image"
            style={{ width: "100%", height: "auto" }}
          />
        </Col>
        <br />
        <h2 className="text-center">Piscina Sotto Le Stelle</h2>
        <br />
        <hr />
        <p className="text-center">
          Questo è il momento ideale per lasciarvi alle spalle lo stress della
          giornata e rigenerare mente e corpo. <br />
          La nostra spa offre un'incantevole PISCINA SERALE, dove potrete
          immergervi in un'atmosfera magica e rilassante. <br />
           Le candele a bordo piscina,
          le luci soffuse e l'acqua calda creano una sensazione di tranquillità
          mentre vi godete il bagno notturno con il nostro <br /> fantastico
          "Aperi-Terme" sotto il cielo stellato.
        </p>
        <div>
          <p className="text-start">
            <br />
            <br />
            <h1>INFO UTILI</h1>
            E' necessario portare con sé solo il costume da bagno, noi ti
            forniamo un accappatoio, un telo ed un paio di ciabatte. <br />
            E' necessario effettuare la prenotazione con almeno 48 ore
            d'anticipo. <br />
            Si consiglia di presentarsi presso il centro benessere con almeno 15
            minuti di anticipo. <br />
            VALIDITA': da lunedì alla domenica compresi festivi, prefestivi e
            ponti dalle ore 19:00 alle ore 23:00. <br />
            <br />
            NON E' CONSENTITO l’ingresso ai minori di 14 anni. <br /> *Prenota
            ora e paga comodamente in sede
          </p>
        </div>
      </Row>
      <br />
 
    </div>
  );
}

export default IngressoSerale;
