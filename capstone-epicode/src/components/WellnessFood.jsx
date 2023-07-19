import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import cibo from "../image/cibo.jpg";

function WellnessFood() {
  return (
    <div className="container my-custom-class fw-bold">
      <h1 className="text-center"> WELLNESS FOOD </h1>
      <br />
      <Row>
        <Col xs={12} sm={6} md={4} lg={3}>
          <Image
            src={cibo}
            alt="Piscina esterna"
            className="img-fluid custom-image"
            style={{ width: "100%", height: "auto" }}
          />
        </Col>
        <h2 className="text-center">Tante Gustose Novità</h2>
        <br />
        <br />
        <hr />
        <br />

        <p className="text-center">
          Nella nostra filosofia di benessere crediamo che, oltre allo spirito,
          debba essere appagato anche il palato. Le nostre deliziose proposte,
          <br /> risultato di un ricercato abbinamento di ingredienti genuini e
          freschi (tutto a km 0 ), arricchiranno la tua giornata, <br />{" "}
          regalandoti piacevoli momenti di socialità. Un delizioso appuntamento
          con il gusto durante il percorso benessere. <br />
          A seconda della tua prenotazione troverai il nostro WellNess Food.{" "}
          <br />
          <ul className="text-start">
            {" "}
            <br />
            <li>
              FORUMLA BREAK: L’ideale per un pranzo leggero ma senza rinunciare
              al gusto. Una proposta a buffet di insalate, <br />
              affettati e formaggi nostrani, da abbinare a contorni sfiziosi,
              frutta fresca di stagione e dessert golosi.
            </li>
            <br />
            <li>
              FORMULA LUNCH: Appetito da relax? Abbiamo pensato a una formula
              ancora più ricca, con una proposta a buffet che spazia <br />
              da una ricercata selezione di primi e secondi piatti caldi a una
              linea di contorni da assaporare e abbinare, senza rinunciare alla
              frutta fresca <br />
              di stagione e a un dessert per tutti i gusti.
            </li>{" "}
            <br />
            <li>
              FORMULA APERITERME: Concludi alla grande la tua giornata di relax,
              concediti l’unico aperitivo in accappatoio, a base di bollicine{" "}
              <br />e prelibatezze da gustare. L'aperiterme è su prenotazione al
              ricevimento al momento dell'accesso in struttura.{" "}
            </li>
          </ul>
          <br />
          <h1>INFO UTILI</h1>
          FORMULE INCLUSE NELL'INGRESSO tutti i giorni dalle 12 alle 15 e
          dalle 17 alle 20.<br />
          Validità: dal lunedì alla domenica compresi festivi prefestivi e
          ponti.
          <br />
        </p>
      </Row>
    </div>
  );
}

export default WellnessFood;
