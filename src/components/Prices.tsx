import React from 'react';
import { Row, Card } from 'react-bootstrap';
import { calculatePerMinute, calculateWithPlan } from '../utils';

interface IPrices {
  origin: number;
  destination: number;
  minutes: number;
  planCheck: string;
  calls: any;
  plans: any;
}

const Prices = ({
  origin,
  destination,
  minutes,
  planCheck,
  calls,
  plans,
}: IPrices) => {
  // eslint-disable-next-line
  const plan = plans?.find((item: any) => item.value == planCheck);

  return (
    <Row className="align-items-center justify-content-center pt-4 mt-2">
      <Card className="w-75">
        <Card.Body>
          <Card.Subtitle>Plano Selecionado</Card.Subtitle>
          {plan ? (
            <Card.Title className="text-primary">{plan?.name}</Card.Title>
          ) : (
            <i>Selecione um plano</i>
          )}

          <Row className="justify-content-around px-4 pt-2">
            <Card.Text className="h3 text-primary">
              Com plano $
              <u>
                {origin && destination
                  ? calculateWithPlan(
                      calls[origin][destination],
                      minutes,
                      plan?.value
                    )
                  : 0}
              </u>
            </Card.Text>
            <Card.Text className="h3 text-secondary">
              Sem plano $
              <u className="text-">
                {origin && destination
                  ? calculatePerMinute(calls[origin][destination], minutes)
                  : 0}
              </u>
            </Card.Text>
          </Row>
        </Card.Body>
      </Card>
    </Row>
  );
};

export default Prices;
