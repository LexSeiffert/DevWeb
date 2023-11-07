import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Nav_bar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>To-Do List</Navbar.Brand>
          <Nav className="me-auto">
            <div className="">
            <Link to="/">
              <h5>Inicio</h5>
            </Link>
            <Link to="/lista">
              <h5>Lista de Tarefas</h5>
            </Link>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Nav_bar;
