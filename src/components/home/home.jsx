import { Container, Row, Col } from "react-bootstrap";
import "./../../css/home.css"
import css from "../../App.css"

function Home() {
  return (
    <Container>
      <br></br><br></br><br></br>
      <Row>
        <Col></Col>
        <Col xs={6} className="welcome">WELCOME TO MY PORTFOLIO</Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default Home;