import { Container, Navbar } from 'react-bootstrap';

export function Header() {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home">Швидка перевірка авто</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
    </Navbar>
  );
}