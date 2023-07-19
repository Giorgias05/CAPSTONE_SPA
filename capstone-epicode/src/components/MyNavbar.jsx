import Imglogo from "../image/Imglogo.jpg";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Navbar as BootstrapNavbar } from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";


function MyNavbar() {
  return (
    <BootstrapNavbar collapseOnSelect expand="lg" variant="light">
      <Container fluid>
        <BootstrapNavbar.Brand className="navbar-brand" href="Home">
          <img src={Imglogo} alt="logo spa" style={{ width: "100px" }} fluid />
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="responsive-navbar-nav" />
        <BootstrapNavbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="/home">HOME </Nav.Link>
            <Nav.Link href="/pacchetti">SERVIZI</Nav.Link>
            <Nav.Link >SPECIAL DAYS</Nav.Link>
            <NavDropdown title="NOVITA' DEL MESE" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/TrattamentoCorpo">
                Trattamento Corpo
              </NavDropdown.Item>
              <NavDropdown.Item href="/TrattamentoViso">
                Trattamenti Viso
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/FesteggiaConNoi">FESTEGGIA CON NOI</Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
    
  );
}

export default MyNavbar;
