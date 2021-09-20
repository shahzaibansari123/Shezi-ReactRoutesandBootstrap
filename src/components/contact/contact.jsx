import { Card, Button, CardColumns, CardGroup, Container, Row, Col } from "react-bootstrap"
import "./../../css/home.css"
import "./../../css/contact.css"
import css from "../../App.css"
import img1 from "./../../assets/about.png"
import wa from "./../../assets/whatsapp.png"
import gh from "./../../assets/github.png"
import lnk from "./../../assets/linkedin.png"

function Contact() {
    return (
        <Container fluid>
            <br></br><br></br><br></br>
            <Row>
                <Col></Col>
                <Col xs={6} className="welcome">Contact</Col>
                <Col></Col>
            </Row>
            <br></br><br></br><br></br>
            <Row>
                <Col sm className="text-center m-1  "><a href="https://github.com/shahzaibansari123"><img src={gh} height="100px" width="100px" /></a></Col>
                <Col sm className="text-center m-1  "><a href="https://wa.me/+923322891939"><img src={wa} height="100px" width="100px" /></a></Col>
                <Col sm className="text-center m-8  "><a href="https://www.linkedin.com/in/shahzaib-ansari-218240215"><img class="lnkin" src={lnk} height="100px" width="100px" /></a></Col>
            </Row>
        </Container>
    );
}

export default Contact;