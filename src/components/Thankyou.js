import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

export default class Thankyou extends Component {
  render() {
    return (
      <Container>
        <Col xs={12} className="text-center">
          <Row>
            <Col xs={12}>
              <h1 className="heading">THANK YOU!</h1>
              <p>
                <i className="fas fa-check icon text-success" />
              </p>
              <p>Your coupon is on its way to your email. But first...</p>
              <p>
                <a href="javascript:void(0)">
                  Click here to book your appointment online instantly. It only
                  takes a minute.
                </a>
              </p>
              <p>We can't wait to meet you and your'do!</p>
              <p className="copy">&copy; 2015</p>
            </Col>
          </Row>
        </Col>
      </Container>
    );
  }
}
