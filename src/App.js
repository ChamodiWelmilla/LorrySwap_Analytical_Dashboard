import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from './pages/Home/Home';
import Report from './pages/Report/Report';
import About from './pages/About/About';
import Feature from './pages/Feature/Feature';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <div>
      <Navbar expand="lg" className="position-absolute w-100">
        <Container>
          <span
            className="mx-2 text-light fw-semibold"
            style={{ fontSize: "2.5rem" }}
          >
            LorrySwap
          </span>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="bg-light"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto justify-content-end w-100">
              <Nav.Link href="/" className="text-uppercase">
                Home
              </Nav.Link>
              <Nav.Link href="/report" className="text-uppercase">
                Report & Predict
              </Nav.Link>
              <Nav.Link href="/about" className="text-uppercase">
                About Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/report" element={<Report />} />
        <Route path="/about" element={<About />} />
        <Route path="/feature" element={<Feature />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <footer>
        <div className="container my-5">
          <div className="container">
            <p className="p-3 m-0 text-center">copyright @ LorrySwap</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
