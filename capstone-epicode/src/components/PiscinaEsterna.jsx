import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Piscinaesterna1 from "../image/piscinaesterna1.jpg";
import Prenotazioni from "./Prenotazioni";

function PiscinaEsterna() {
  return (
    <div className="container my-custom-class fw-bold">
      <h1 className="text-center">PISCINE ESTERNE </h1>
      <br />
      <Row>
        <Col xs={12} sm={6} md={4} lg={3}>
          <Image
            src={Piscinaesterna1}
            alt="Piscina esterna"
            className="img-fluid custom-image"
            style={{ width: "100%", height: "auto" }}
          />
        </Col>
        <br />
       
        <h2 className="text-center"> <br />
          {" "}
          Piscine, Vasche e Cascate Immerse Nella Natura
        </h2>
        <hr />

        <p className="text-center">
          Qui potrete godere di un'esperienza rigenerante e rilassante. Nel
          nostro centro sono presenti piscine idromassaggio, grandi vasche,{" "}
          <br /> solarium e cascate immerse in un maestoso giardino secolare. Le
          nostre piscine idromassaggio offrono un massaggio piacevole e benefico{" "}
          <br /> grazie alle bolle d'aria e ai getti d'acqua. Nel solarium,
          potrete rilassarvi al sole e rigenerare mente e corpo. Le cascate
          creano un'atmosfera magica e rilassante. La nostra struttura è pensata
          per offrire un'esperienza di totale benessere, perfetta per chi cerca
          relax e coccole immerse nella natura.
        </p>
        <br />
        <p className="text-center">
          <br />
          <h1>INFO UTILI</h1>
          E' necessario prenotare per le piscine esterne con almeno 24 ore
          d'anticipo.  <br />Si consiglia, inoltre, di presentarsi  <br />
          presso il centro  benessere con almeno 30 minuti di anticipo rispetto all'orario scelto. <br />
          E' necessario portare con sé solo il costume da bagno,
          noi ti forniamo un accappatoio,<br />
           un telo ed un paio di ciabatte.
          <br />
          Validità: da lunedì a domenica compresi festivi e ponti.
          <br />
          NON E' CONSENTITO l’ingresso ai minori di 14 anni.
          <hr /> *Prenota ora e paga
          comodamente in sede
        </p>
      </Row>
     
    </div>
  );
}

export default PiscinaEsterna;
