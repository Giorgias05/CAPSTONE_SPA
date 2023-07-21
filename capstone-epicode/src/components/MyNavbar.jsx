import Imglogo from "../image/Imglogo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Navbar as BootstrapNavbar } from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";


function MyNavbar() {
  return (
    <BootstrapNavbar collapseOnSelect expand="lg" variant="light">
      <Container fluid>
        <BootstrapNavbar.Brand className="navbar-brand" href="Home">
          <img src={Imglogo} alt="logo spa" style={{ width: "250px" }} fluid />
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="responsive-navbar-nav" />
        <BootstrapNavbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="/home"className="border-0 MyNav" >HOME  </Nav.Link>
            <Nav.Link >CHI SIAMO</Nav.Link>
            <Nav.Link href="/pacchetti"className="border-0 MyNav" >SERVIZI</Nav.Link>
            <Nav.Link > SPECIAL DAYS </Nav.Link>
            <Nav.Link href="/FesteggiaConNoi"className="border-0 MyNav" >FESTEGGIA CON NOI</Nav.Link>
            <Nav.Link > GALLERY</Nav.Link>
            <Nav.Link >REGALA</Nav.Link>
            <NavDropdown title="NOVITA' DEL MESE " id="collasible-nav-dropdown"className="MyNav" >
              <NavDropdown.Item href="/TrattamentoCorpo"className=" border-0 bg-white" >
                Trattamento Corpo
              </NavDropdown.Item>
              <NavDropdown.Item href="/TrattamentoViso"className="border-0 bg-white" >
                Trattamento Viso
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
    
  );
}

export default MyNavbar;
