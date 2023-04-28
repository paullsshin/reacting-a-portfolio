import React from "react";
import { Row, Col } from "react-bootstrap";
import '../../App.scss'

const contactConfig = {
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate amet cumque quia ducimus. Error dolores exercitationem ipsam dignissimos amet iste tempora, facere laudantium odit adipisci, perferendis earum sed voluptatum dolorum!",
};

export default function Contact() {
  return (
    <div className="contact-container">
      <Row className="mb-5 mt-3">
        <Col lg="8" l>
          <h1 className="display-4 mb-4">Contact Me</h1>
        </Col>
      </Row>

      <Row className="sec_sp">
        <Col lg="5" className="mb-5">
          <h3 className="color sec py-4">Get in Touch</h3>
          <address>
            <strong> Email: sample@gmail.com</strong>
            <br />
            <br />
            <p>
              <strong>Phone: 123-456-7890</strong>
            </p>
          </address>
          <p>{contactConfig.description}</p>
        </Col>
        <Col lg="7" className="d-flex align-items-center">
          <form className="contact_form w-100">
            <Row>
              <Col lg="6" className="form-group">
                <input
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Name"
                  type="text"
                />
              </Col>
              <Col lg="6" className="form-group">
                <input
                  className="form-control rounded-0"
                  id="email"
                  name="email"
                  placeholder="Email"
                  type="email"
                />
              </Col>
            </Row>
            <textarea
              className="form-control rounded--0"
              id="message"
              name="message"
              placeholder="Message"
              rows="5"
            ></textarea>
            <br />
            <Row>
                <Col lg='12' className="form-group">
                    <button className="btn ac_btn" id="send"
                    type="submit">Send</button>
                </Col>
            </Row>
          </form>
        </Col>
      </Row>
    </div>
  );
}
