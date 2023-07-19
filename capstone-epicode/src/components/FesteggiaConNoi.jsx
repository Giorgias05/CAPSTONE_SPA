import React from "react";
import { Row, Col, Image, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Festa from "../image/Festa.jpg";
import Prenotazioni from "./Prenotazioni";
import { Link } from "react-router-dom";

function FesteggiaConNoi() {
  return (
    <div className="container my-custom-class fw-bold">
      <h1 className="text-center"> Festeggia Con Noi</h1>
      <br />
      <Row>
        <Col xs={12} sm={6} md={4} lg={3}>
          <Image
            src={Festa}
            alt="Festaggaimento in spa"
            className="img-fluid custom-image"
            style={{ width: "100%", height: "auto" }}
          />
        </Col>
        <p className="text-center">
          <h2>Stai per festeggiare il tuo compleanno?  </h2>
          <hr />
          Abbiamo una sorpresa per te! <br />
           Accedendo ai nostri centri benessere con un accompagnatore pagante nel giorno <br />
           del tuo compleanno o nei 7 giorni successivi, ti regaleremo un ingresso (su due). <br />
            Per usufruirne è necessario prenotare, scegliendo l'ingresso "Wellness Birthday" per minimo due persone e <br />
             inserendo la carta di credito a garanzia della prenotazione. <br />
            Al tuo arrivo in ricevimento ti chiederemo di mostrare un documento d’identità per la convalida. <br />
<br />

            ***La promozione è utilizzabile dal lunedì a venerdì, esclusi weekend, ponti e festività.
        </p>
        <div>
          <br />
          <p className="text-center">
            <br />
            <h1>INFO UTILI</h1>
            E' necessario prenotare il trattamento con almeno 48 ore d'anticipo. Si consiglia di presentarsi <br />
              presso il centro benessere con almeno 10 minuti di anticipo. E' necessario portare con sè solo il costume da bagno, <br />
              noi ti forniamo un accappatoio ed un paio di ciabatte.
            <br />
            Validità: dal lunedì al venerdi.Per conoscere ponti e festività/periodi di esclusione 
             consulta <br />
              la pagina dedicata al seguente <Link to="/Home">  <Button variant="light text-end "> Link </Button>
                </Link> <br />
                <br />
            NON E' CONSENTITO l’ingresso ai minori di 14 anni. <br />
            *Prenota ora e paga comodamente in sede
          </p>
        </div>
      </Row>
      <br />
      <Prenotazioni />
    </div>
  );
}

export default FesteggiaConNoi;