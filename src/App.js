import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useHistory } from "react-router-dom";

import Home from "./components/home/home"
import Weather from "./components/weather/weather"
import About from "./components/about/about"
import Contact from "./components/contact/contact"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';

function App() {
  let history = useHistory();
  return (
    <>
      {/* <nav>
        <ul>
          <Button onClick={() => {
            history.push("/");
          }}>
            Home
          </Button>
          <li>
            <Button onClick={() => {
              history.push("/weather");
            }}>
              Weather
            </Button>
          </li>
          <li>
            <Button onClick={() => {
              history.push("/about");
            }}>
              About
            </Button>
          </li>
          <li>
            <Button onClick={() => {
              history.goBack()
            }}>
              Go back
            </Button>
          </li>
        </ul>
      </nav> */}

      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Portfolio | Shahzaib Ansari</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={() => { history.push("/") }}>Home</Nav.Link>
              <Nav.Link onClick={() => { history.push("/about") }}>About</Nav.Link>
              <Nav.Link onClick={() => { history.push("/contact") }}>Contact</Nav.Link>
              <Nav.Link onClick={() => { history.push("/weather") }}>Weather</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/weather">
          <Weather />
        </Route>
      </Switch>
    </>
  );
}

export default App;
