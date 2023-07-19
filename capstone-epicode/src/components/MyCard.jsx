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
        <Card className="border-0 h-100" style={{ width: "300px" }}>
          <Card.Body>
            <Card.Title>Percorso Benessere</Card.Title>
            <Image
              src={Perspa}
              alt="percorso spa"
              className={classNames(
                "img-fluid",
                "custom-image",
                "equal-height"
              )}
            />
            <Card.Text>
              Percorso benessere senza limiti di tempo lunedì - domenica
            </Card.Text>
          </Card.Body>
          <Card.Footer className="d-flex justify-content-end border-0">
            <Link to="/PercorsoBenessere">
              <Button variant="outline-secondary">SCOPRI</Button>
            </Link>
          </Card.Footer>
        </Card>
      </Col>

      <Col sm={12} md={6} lg={4} className="mb-5">
        <Card className="border-0 h-100" style={{ width: "300px" }}>
          <Card.Body>
            <Card.Title>Massaggi</Card.Title>
            <Image
              src={Cabmas}
              alt="cabina massaggio"
              className={classNames(
                "img-fluid",
                "custom-image",
                "equal-height"
              )}
            />
            <Card.Text>
              Massaggi tradizionali, antistress, rivitalizzanti a scelta fra 30
              o 75 minuti
            </Card.Text>
          </Card.Body>
          <Card.Footer className="d-flex justify-content-end border-0">
            <Link to="/Massaggi">
              <Button variant="outline-secondary">SCOPRI</Button>
            </Link>
          </Card.Footer>
        </Card>
      </Col>

      <Col sm={12} md={6} lg={4} className="mb-5">
        <Card className="border-0 h-100" style={{ width: "300px" }}>
          <Card.Body>
            <Card.Title>Sauna con vista</Card.Title>
            <Image
              src={Saunavista}
              alt="Sauna con vista"
              className={classNames(
                "img-fluid",
                "custom-image",
                "equal-height"
              )}
            />
            <Card.Text>
              La sauna con vista lago offre un'esperienza di benessere unica
            </Card.Text>
          </Card.Body>
          <Card.Footer className="d-flex justify-content-end border-0">
            <Link to="/SaunaVista">
              <Button variant="outline-secondary">SCOPRI</Button>
            </Link>
          </Card.Footer>
        </Card>
      </Col>

      <Col sm={12} md={6} lg={4} className="mb-5">
        <Card className="border-0 h-100" style={{ width: "300px" }}>
          <Card.Body>
            <Card.Title>Piscine esterne</Card.Title>
            <Image
              src={Piscinaesterna1}
              alt="piscina giardino"
              className={classNames(
                "img-fluid",
                "custom-image",
                "equal-height"
              )}
            />
            <Card.Text>
              Un luogo rilassante e rigenerante immerso nella natura
            </Card.Text>
          </Card.Body>
          <Card.Footer className="d-flex justify-content-end border-0">
            <Link to="/PiscinaEsterna">
              <Button variant="outline-secondary">SCOPRI</Button>
            </Link>
          </Card.Footer>
        </Card>
      </Col>

      <Col sm={12} md={6} lg={4} className="mb-5">
        <Card className="border-0 h-100" style={{ width: "300px" }}>
          <Card.Body>
            <Card.Title>Wellness Food</Card.Title>
            <Image
              src={cibo}
              alt="Immagine piscina"
              className={classNames(
                "img-fluid",
                "custom-image",
                "equal-height"
              )}
            />
            <Card.Text>
              Una ricca pausa di gusto durante il tuo percorso benessere
            </Card.Text>
          </Card.Body>
          <Card.Footer className="d-flex justify-content-end border-0">
            <Link to="/WellnessFood">
              <Button variant="outline-secondary">SCOPRI</Button>
            </Link>
          </Card.Footer>
        </Card>
      </Col>
      <Col sm={12} md={6} lg={4} className="mb-5">
        <Card className="border-0 h-100" style={{ width: "300px" }}>
          <Card.Body>
            <Card.Title>Ingresso serale</Card.Title>
            <Image
              src={Piscinasera}
              alt="Piscina sera"
              className={classNames(
                "img-fluid",
                "custom-image",
                "equal-height"
              )}
            />
            <Card.Text>
              Ingresso serale, da lunedì a domenica compresi ponti e festività
            </Card.Text>
          </Card.Body>
          <Card.Footer className="d-flex justify-content-end border-0">
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
