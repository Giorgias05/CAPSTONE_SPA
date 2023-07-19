import React, { useState, useEffect } from "react";
import { Container, Form, Button, Spinner, Col } from "react-bootstrap";

function Prenotazioni() {
  const [showSpinner, setShowSpinner] = useState(false);

  useEffect(() => {}, []);
  const [prenotazione, setPrenotazione] = useState({
    nome: "",
    email: "",
    data: "",
  });

  let spa = ["/PercorsoBenessere", "/FesteggiaConNoi", "/ContactUs"];
  let benessere = [
    "/TrattamentoCorpo",
    "/Massaggi",
    "/SaunaVista",
    "/PiscinaEsterna",
    "/IngressoSerale",
  ];
  let corpoViso = ["/TrattamentoViso", "/TrattamentoCorpo"];

  const fetchPrenotazione = async () => {
    let url = "";
    spa.forEach((s, index) => {
      if (s === window.location.pathname) {
        url = "Spa";
      }
    });
    benessere.forEach((s, index) => {
      if (s === window.location.pathname) {
        url = "Benessere";
      }
    });
    corpoViso.forEach((s, index) => {
      if (s === window.location.pathname) {
        url = "Corpo";
      }
    });
    try {
      let response = await fetch(`http://localhost:8080/prenotazioni${url}`, {
        method: "POST",
        body: JSON.stringify(prenotazione),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        alert("PRENOTAZIONE EFFETTUATA CON SUCCESSO!");
      }
      if (response.status === 404) {
        alert("ERRORE DI PPRENOTAZIONE!");
      }
    } catch (error) {
      console.log("ERRORE!! +error");
    }
  };
  return (
    <Container>
      <div className=" d-flex justify-content-center">
        {" "}
        <Col
          xs={12}
          sm={6}
          md={4}
          lg={3}
          className="d-flex flex-column text-center"
        >
          <Form>
            <Form.Group controlId="formName">
              <Form.Label className="my-custom-label fw-bold">Nome</Form.Label>
              <Form.Control
                className="my-custom-input text-color-dark"
                type="text"
                placeholder="Inserisci il tuo nome"
                value={prenotazione.nome}
                onChange={(e) => {
                  setPrenotazione({
                    ...prenotazione,
                    nome: e.target.value,
                  });
                }}
                required
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label className="my-custom-label fw-bold">Email</Form.Label>
              <Form.Control
                className="my-custom-input"
                type="email"
                placeholder="Inserisci la tua email"
                value={prenotazione.email}
                onChange={(e) => {
                  setPrenotazione({
                    ...prenotazione,
                    email: e.target.value,
                  });
                }}
                required
              />
            </Form.Group>
            <Form.Group controlId="formDate">
              <Form.Label className="my-custom-label fw-bold">
                Quando?
              </Form.Label>
              <Form.Control
                className="my-custom-input"
                type="date"
                placeholder="Seleziona la data"
                value={prenotazione.data}
                onChange={(e) => {
                  setPrenotazione({
                    ...prenotazione,
                    data: e.target.value,
                  });
                }}
                required
              />
            </Form.Group>
            <Button
              variant="light"
              className="mx-auto mt-5 my-custom-button"
              onClick={() => {
                console.log(prenotazione);
                fetchPrenotazione();
              }}
            >
              {" "}
              Prenotazione
            </Button>
          </Form>
        </Col>
      </div>
    </Container>
  );
}
export default Prenotazioni;
