import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGoogle,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#275A53", color: "white" }} className="mt-5">
      <Container className="py-5">
        <Row>
          <Col sm={4} md={4} xs={12}>
            <h7 className="pt-4">
              H#340 (4th Floor), Road #24, <br />
              New DOHS, Mohakhali, Dhaka, Bangladesh <br />
              Phone: 016XXXXXXXX <br />
              E-mail: info@company.com
            </h7>
          </Col>
          <Col sm={8} md={8} xs={12}>
            <Row>
              <Col>
                <h4 className="mb-4">Company</h4>
                <span>About</span> <br />
                <span>Site Map</span> <br />
                <span>Support Center</span> <br />
                <span>Terms Conditions</span> <br />
                <span>Submit Listing</span>
              </Col>
              <Col>
                <h4 className="mb-4">Quick Links</h4>
                <span>Quick Links</span> <br />
                <span>Rentals</span> <br />
                <span>Sales</span> <br />
                <span>Contact</span> <br />
                <span>Terms Conditions</span> <br />
                <span>Our Blog</span>
              </Col>
              <Col>
                <h4 className="mb-4">About Us</h4>
                <span>
                  We are the top real estate agency in Sydney, with agents
                  available to answer any question 24/7.
                </span>
                <ul className="social-media list-inline pt-3">
                  <li className="list-inline-item">
                    <a target="blank" href="//facebook.com ">
                      <FontAwesomeIcon
                        className="icon active-icon"
                        icon={faFacebook}
                      />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a target="blank" href="//google.com ">
                      <FontAwesomeIcon className="icon" icon={faGoogle} />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a target="blank" href="//instagram.com ">
                      <FontAwesomeIcon className="icon" icon={faInstagram} />
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
        <div className="copyRight text-center pt-5">
          <p>Copyright {new Date().getFullYear()} All Rights Reserved</p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;