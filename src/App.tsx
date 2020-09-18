import React from 'react';
import { Col, Row, Container, Form, Card } from 'react-bootstrap';

const App: React.FC = () => (
  <Container fluid="sm">
    <h1 className="text-center py-4">FaleMais</h1>
    <Row>
      <Form className="w-100">
        <Row className="justify-content-md-center">
          <Col md>
            <Form.Group>
              <Form.Label>Origem</Form.Label>
              <Form.Control as="select" size="lg" custom>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col md>
            <Form.Group>
              <Form.Label>Destino</Form.Label>
              <Form.Control as="select" size="lg" custom>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col md>
            <Form.Group>
              <Form.Label>Minutos</Form.Label>
              <Form.Control type="number" />
            </Form.Group>
          </Col>
          <Col md>
            <Row className="align-items-center justify-content-center h-100">
              <Form.Check inline label="FaleMais30" type="radio" />
              <Form.Check inline label="FaleMais60" type="radio" />
              <Form.Check inline label="FaleMais120" type="radio" />
            </Row>
          </Col>
        </Row>
      </Form>
    </Row>
    <Row className="align-items-center justify-content-center pt-4 mt-2">
      <Card className="w-50">
        <Card.Body>
          <Card.Subtitle>Plano Selecionado</Card.Subtitle>
          <Card.Title>FaleMais30</Card.Title>

          <Row className="justify-content-between px-4 pt-2">
            <Card.Text>Sem plano $30</Card.Text>
            <Card.Text>Com plano $30</Card.Text>
          </Row>
        </Card.Body>
      </Card>
    </Row>
    <h6 className="text-center font-weight-light pt-4">Telzir</h6>
  </Container>
);

export default App;
