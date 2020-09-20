import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

import calls from './data/calls.json';
import plans from './data/plans.json';

import Prices from './components/Prices';
import CallsRecord from './components/CallsRecord';

const App: React.FC = () => {
  const [callInputs, setCallInputs] = useState<any>({
    minutes: 1,
  });

  const onChangeForms = (event: any): void => {
    const { value, name } = event.target;
    setCallInputs({ ...callInputs, [name]: value });
  };

  return (
    <Container className="w-50" fluid="sm">
      <h1 className="text-center py-4">FaleMais</h1>
      <CallsRecord
        calls={calls}
        plans={plans}
        origin={callInputs?.origin}
        destination={callInputs?.destination}
        minutes={callInputs?.minutes}
        planCheck={callInputs?.planCheck}
        onChangeForms={onChangeForms}
      />
      <Prices />
      <h6 className="text-center font-weight-light pt-4">Telzir</h6>
    </Container>
  );
};

export default App;
