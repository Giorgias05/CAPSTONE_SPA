import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-modal";
import { Link } from "react-router-dom";

const Newsletter = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [compleanno, setCompleanno] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false); // Stato per il controllo del modale

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dati inviati:", { email, nome, compleanno });
    setModalIsOpen(true); // Apri il modale dopo l'invio del modulo
  };

  return (
    <Container className="text-center">
      <div>
        <h2> Here Free Voucher! </h2>
        <hr />
        <h1>
        ISCRIVITI ALLA NOSTRA NEWSLETTER
        </h1>
        <br />
      <h5> Per restare sempre aggiornato e non perdere l’occasione di vivere il benessere in tutte le sue espressioni. <br />
<br />

        Scrivi la tua email, il tuo nome e la tua data di nascita, <br />
        <br />
        riceverai subito un VOUCHER dal valore di 10 euro per il tuo prossimo
        acquisto in sede. </h5>
        <br />
        <br />
        <Form onSubmit={handleSubmit} className="news.letter-form text-start">
          <Form.Group controlId="formEmail">
            <Form.Label>Indirizzo Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Inserisci il tuo indirizzo email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <br />

          <Form.Group controlId="formNome">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              type="text"
              placeholder="Inserisci il tuo nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </Form.Group>
          <br />
          <Form.Group controlId="formCompleanno">
            <Form.Label>Il tuo compleanno</Form.Label>
            <Form.Control
              type="text"
              placeholder="DD/MM"
              value={compleanno}
              onChange={(e) => setCompleanno(e.target.value)}
            />
          </Form.Group>
          <br />
          <br />
          <p className="text-center">
            <h6>
              **Dai il tuo Consenso al trattamento dei dati e tuoi diritti,
              iscrivendoti.
            </h6>
            <Button variant="light" type="submit" className="mt-5">
              Iscriviti
            </Button>
          </p>
        </Form>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          contentLabel="Email confermata"
          style={{
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            },
            content: {
              width: "400px",
              height: "200px",
              margin: "auto",
              borderRadius: "8px",
              border: "none",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            },
          }}
        >
          <h2>Email Inviata!</h2>
          <p>Controlla la tua email e salva il tuo Voucher!</p>
          <Link to="/home" className="btn btn-light">
            Chiudi
          </Link>
        </Modal>
      </div>
    </Container>
  );
};
export default Newsletter;
