import React from "react";
import "./cart.scss";
import { Container, Row, Col, Badge } from "react-bootstrap";
function Carte(props) {
  function ffff() {
    console.log("gggg");
  }
  return (
    <div>
      <Container className="mt-4">
        <Row>
          <Col>
            <h2>Special Item</h2>
            <p>
              <del>$20.00</del> <Badge variant="danger">$18.00</Badge>
            </p>
            <button onClick={props.addnum}> Add to cart </button>
          </Col>
          <Col>
            <h2>Special Item</h2>
            <p>
              <del>$20.00</del> <Badge variant="danger">$18.00</Badge>
            </p>
            <button onClick={props.addnum}> Add to cart </button>
          </Col>{" "}
          <Col>
            <h2>Special Item</h2>
            <p>
              <del>$20.00</del> <Badge variant="danger">$18.00</Badge>
            </p>
            <button onClick={props.addnum}> Add to cart </button>
          </Col>{" "}
          <Col>
            <h2>Special Item</h2>
            <p>
              <del>$20.00</del> <Badge variant="danger">$18.00</Badge>
            </p>
            <button onClick={props.addnum}> Add to cart </button>
          </Col>{" "}
          <Col>
            <h2>Special Item</h2>
            <p>
              <del>$20.00</del> <Badge variant="danger">$18.00</Badge>
            </p>
            <button onClick={props.addnum}> Add to cart </button>
          </Col>{" "}
          <Col>
            <h2>Special Item</h2>
            <p>
              <del>$20.00</del> <Badge variant="danger">$18.00</Badge>
            </p>
            <button onClick={props.addnum}> Add to cart </button>
          </Col>{" "}
          <Col>
            <h2>Special Item</h2>
            <p>
              <del>$20.00</del> <Badge variant="danger">$18.00</Badge>
            </p>
            <button onClick={props.addnum}> Add to cart </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Carte;
