import React from 'react';
import { Col, Row, Container, Form } from 'react-bootstrap';
import Prices from './components/Prices';

const App: React.FC = () => (
  <Container className="w-50" fluid="sm">
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
            <Row className="align-items-center justify-content-around h-100">
              <Form.Check inline label="FaleMais30" type="radio" />
              <Form.Check inline label="FaleMais60" type="radio" />
              <Form.Check inline label="FaleMais120" type="radio" />
            </Row>
          </Col>
        </Row>
      </Form>
    </Row>
    <Prices />
    <h6 className="text-center font-weight-light pt-4">Telzir</h6>
  </Container>
);

export default App;
