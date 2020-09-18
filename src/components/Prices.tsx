import React from 'react';
import { Row, Card } from 'react-bootstrap';

const Prices: React.FC = () => {
  return (
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
  );
};

export default Prices;
