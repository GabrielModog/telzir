import React from 'react';
import { Row, Form, Col } from 'react-bootstrap';

interface ICallsRecord {
  calls: any;
  plans: any;
  origin: number;
  destination: number;
  minutes: number;
  planCheck?: string;
  onChangeForms: (event: any) => void;
}

const CallsRecord = ({
  calls,
  plans,
  origin,
  destination,
  minutes,
  onChangeForms,
}: ICallsRecord) => {
  return (
    <Row>
      <Form className="w-100">
        <Row className="justify-content-md-center">
          <Col md>
            <Form.Group>
              <Form.Label>Origem</Form.Label>
              <Form.Control
                as="select"
                name="origin"
                size="lg"
                onChange={(evt: any) => onChangeForms(evt)}
                custom
              >
                <option value="">Selecione o DDD</option>
                {Object.keys(calls).map(originCall => (
                  <option value={originCall} key={originCall}>
                    {originCall}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Col>
          <Col md>
            <Form.Group>
              <Form.Label>Destino</Form.Label>
              <Form.Control
                as="select"
                name="destination"
                size="lg"
                disabled={Boolean(!origin)}
                onChange={(evt: any) => onChangeForms(evt)}
                custom
              >
                <option value="">
                  {origin
                    ? 'Selecione o DDD do destinado'
                    : 'Aguardando DDD de origem'}
                </option>
                {origin &&
                  Object.keys(calls[origin]).map(item => (
                    <option value={item} key={item}>
                      {item}
                    </option>
                  ))}
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col md>
            <Form.Group>
              <Form.Label>Minutos</Form.Label>
              <Form.Control
                type="number"
                name="minutes"
                defaultValue={minutes}
                disabled={Boolean(!destination)}
                onChange={(evt: any) => onChangeForms(evt)}
                min={1}
              />
            </Form.Group>
          </Col>

          <Col md>
            <Form.Group className="align-items-center justify-content-center h-100">
              <Form.Label>Planos</Form.Label>
              <Row className="align-items-center justify-content-around">
                {plans.map((plan: any) => (
                  <Form.Check
                    inline
                    label={plan.name}
                    type="radio"
                    name="planCheck"
                    value={plan.value}
                    onChange={(evt: any) => onChangeForms(evt)}
                    disabled={Boolean(!destination)}
                  />
                ))}
              </Row>
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </Row>
  );
};

export default CallsRecord;
