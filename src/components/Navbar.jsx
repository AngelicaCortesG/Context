import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <>
      <Navbar bg="success" variant="success">
        <Container className="justify-content-start">
          <Link to="/" className="text-white ms-3 text-decoration-none">
          🏡 Home
          </Link>
          <Link to="/favoritos" className="text-white ms-3 text-decoration-none">
          💚 Favoritos
          </Link>
          <Navbar.Brand className="ms-auto text-white">Natural Pic </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}
