import "regenerator-runtime/runtime";
import "./assets/global.css";
import "./styles/App.scss";

import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function App({ isSignedIn, contract, wallet }) {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>BlockVIEW</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link
                onClick={async () =>
                  !isSignedIn ? await wallet.signIn() : await wallet.signOut()
                }
              >
                {!isSignedIn ? "Login" : wallet.accountId}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {isSignedIn ? (
        <Container>
          <Row className="d-flex justify-content-center">Meta Data</Row>
          <Row className="d-flex justify-content-center">Send Token Out</Row>
          <Row className="d-flex justify-content-center">Active Keys</Row>
        </Container>
      ) : (
        <Card>
          <Card.Header as="h5">Hello User!</Card.Header>
          <Card.Body>
            <Card.Title>Please Login</Card.Title>
            <Card.Text>This Application Will Not Work Otherwise.</Card.Text>
            <Button onClick={async() => await wallet.signIn()}>Login HERE</Button>
          </Card.Body>
        </Card>
      )}
    </>
  );
}