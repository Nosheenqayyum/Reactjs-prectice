import "./App.css";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Row,
  Col,
  Image,
  Button,
  Card
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
                <NavDropdown title="Link" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#" disabled>
                  Link
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <main>
      <Container>
        <Row className="px-4 my-5">
          <Col sm={7}>
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNW3bxuapyV76XOVhNN4_0UOufPPpkpPGbIg&usqp=CAU"
              fluid
              rounded
              className=""
            />
            
          </Col>
         
          <Col sm={5}>
          <h1 class="font-weight-light">Tagline</h1>
          <p class="mt-4">
            It is one of the most beautiful countries in Europe, delighting avid
            travellers and ski enthusiasts. The name, Switzerland, evokes
            Heidi’s green pastures, the Alps, bewitching hamlets nestled in
            stunning territories, as well as vibrant city life.
          </p>
          <Button variant="outline-primary">Call to action</Button>
          </Col>
        </Row>
      <Row>
      <Card className="text-center bg-secondary text-white my-5 py-4">
      <Card.Body>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
      </Card.Body>
    </Card>
      </Row>
<Row>
  <Col>
  <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRhNXYCt264Ofe1DQVWtfVIJZKFnK6bwHObw&usqp=CAU" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  </Col>
  <Col>
  <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq8l0Sm9f4JgxCv12JN6IZu2xHzfZcJ2y7ug&usqp=CAU" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  </Col>
  <Col>
  <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa3Srp_fGrUGYyZ2QPDZUw2rybwQU-AMyoIw&usqp=CAU" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  </Col>
</Row>
        </Container>
      </main>
      <footer className="py-5 my-5 bg-dark">
        <Container className="px-4">
          <p className="text-center text-white">Copyright &copy: your Website 2023</p>
        </Container>
      </footer>
    </div>
  );
}

export default App;
