import { Card, Button, CardColumns, CardGroup, Container, Row, Col } from "react-bootstrap"
import img from "./../../assets/logo512.png"
import css from "../../App.css"
import img1 from "./../../assets/about.png"
import "./../../css/about.css"

function About() {
    return (
        <Container fluid>
            <br></br> <br></br> <br></br>
            <Row>
                <Col></Col>
                <Col xs={6} className="welcome">ABOUT</Col>
                <Col></Col>
            </Row>
            <br></br>
            <Row>
                <Col sm></Col>
                <Col sm><CardColumns>
                    <Card bg="dark" text="white" className="text-center m-4  "  >
                        <Card>
                            <Card.Img src={img1} id="pic" />
                        </Card>
                        <blockquote className="blockquote mb-0 card-body p-4">
                            <p>
                                Currently, I am pretty much skilled in UI/UX and web development. I am always aware for for modern learning and daily market upgradation so that I can keep my profile and skills updated.
                            </p>
                        </blockquote>
                    </Card>
                </CardColumns></Col>
                <Col sm></Col>
            </Row>
        </Container>
    );
}

export default About;