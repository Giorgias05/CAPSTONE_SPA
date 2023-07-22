import React from "react";
import { Card, Button, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Perspa from "../image/perspa.jpeg";
import Cabmas from "../image/cabmas.jpg";
import Saunavista from "../image/saunavista.jpg";
import Piscinaesterna1 from "../image/piscinaesterna1.jpg";
import cibo from "../image/cibo.jpg";
import Piscinasera from "../image/piscinasera.jpg";
import classNames from "classnames";

const MyCard = () => {
  return (
    <Row className="align-items-stretch">
      <Col sm={12} md={6} lg={4} className="mb-5">
        <Card className=" MyCard border-0"  >
          <Card.Body>
            <Card.Title>PERCORSO BENESSERE</Card.Title>
            <Image
              src={Perspa}
              alt="percorso spa"
              className="card-image"
            />
            <Card.Text>
              Il nuovo Percorso benessere pensato per te  <br />
              senza limiti di tempo 
            </Card.Text>
          </Card.Body>
          <Card.Footer className="d-flex justify-content-center border-0 bg-transparent">
            <Link to="/PercorsoBenessere">
              <Button variant="outline-secondary">SCOPRI</Button>
            </Link>
          </Card.Footer>
        </Card>
      </Col>

      <Col sm={12} md={6} lg={4} className="mb-5">
        <Card className="MyCard border-0">
          <Card.Body>
            <Card.Title>MASSAGGI</Card.Title>
            <Image
              src={Cabmas}
              alt="cabina massaggio"
              className="card-image"
            />
            <Card.Text>
              Massaggi tradizionali antistress e <br />
              rivitalizzanti a scelta fra 30 o 75 minuti
            </Card.Text>
          </Card.Body>
          <Card.Footer className="d-flex justify-content-center border-0 bg-transparent">
            <Link to="/Massaggi">
              <Button variant="outline-secondary">SCOPRI</Button>
            </Link>
          </Card.Footer>
        </Card>
      </Col>

      <Col sm={12} md={6} lg={4} className="mb-5">
        <Card className="MyCard border-0">
          <Card.Body>
            <Card.Title>SAUNA CON VISTA</Card.Title>
            <Image
              src={Saunavista}
              alt="Sauna con vista"
              className="card-image"
            />
            <Card.Text>
              La sauna con vista lago offre un'esperienza <br />
              di benessere unica
            </Card.Text>
          </Card.Body>
          <Card.Footer className="d-flex justify-content-center border-0 bg-transparent ">
            <Link to="/SaunaVista">
              <Button variant="outline-secondary">SCOPRI</Button>
            </Link>
          </Card.Footer>
        </Card>
      </Col>

      <Col sm={12} md={6} lg={4} className="mb-5">
        <Card className="MyCard border-0" >
          <Card.Body className=" card-size">
            <Card.Title>PISCINE ESTERNE</Card.Title>
            <Image
              src={Piscinaesterna1}
              alt="piscina giardino"
              className="card-image"
            />
            <Card.Text>
              Un luogo rilassante, <br />
              rigenerante immerso nella natura
            </Card.Text>
          </Card.Body>
          <Card.Footer className="d-flex justify-content-center border-0 bg-transparent ">
            <Link to="/PiscinaEsterna">
              <Button variant="outline-secondary">SCOPRI</Button>
            </Link>
          </Card.Footer>
        </Card>
      </Col>

      <Col sm={12} md={6} lg={4} className="mb-5 ">
        <Card className="MyCard border-0 " >
          <Card.Body>
            <Card.Title>WELLNESS FOOD</Card.Title>
            <Image
              src={cibo}
              alt="Immagine piscina"
              className="card-image"
            />
            <Card.Text>
              Una ricca pausa di gusto durante <br />
              il tuo percorso benessere
            </Card.Text>
          </Card.Body>
          <Card.Footer className="d-flex justify-content-center border-0 bg-transparent ">
            <Link to="/WellnessFood">
              <Button variant="outline-secondary">SCOPRI</Button>
            </Link>
          </Card.Footer>
        </Card>
      </Col>
      <Col sm={12} md={6} lg={4} className="mb-5">
        <Card className="MyCard border-0 ">
          <Card.Body>
            <Card.Title>INGRESSO SERALE</Card.Title>
            <Image
              src={Piscinasera}
              alt="Piscina sera"
              className="card-image"

            />
            <Card.Text>
              L'Ingresso serale e il suo momento magico<br />
              con le stelle riflesse sull'acqua
            </Card.Text>
          </Card.Body>
          <Card.Footer className="d-flex justify-content-center border-0 bg-transparent ">
            <Link to="/IngressoSerale">
              <Button variant="outline-secondary">SCOPRI</Button>
            </Link>
          </Card.Footer>
        </Card>
      </Col>
    </Row>
  );
};
export default MyCard;