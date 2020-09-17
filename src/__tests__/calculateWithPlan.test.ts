import { calculateWithPlan } from '../utils';
import calls from '../data/calls.json';
import planCalls from '../data/plans.json';

describe('Calls with FaleMais plans:', () => {
  test('Should return 0 if FaleMais30 plan call is from 011 - 016', () => {
    expect(calculateWithPlan(calls['011']['016'], 20, planCalls[0].value)).toBe(
      0
    );
  });

  test('Should return 37.4 if FaleMais60 plan call is from 011 - 017', () => {
    expect(calculateWithPlan(calls['011']['017'], 80, planCalls[1].value)).toBe(
      37.4
    );
  });

  test('Should return 167.2 if FaleMais120 plan call is from 018 - 011', () => {
    expect(
      calculateWithPlan(calls['018']['011'], 200, planCalls[2].value)
    ).toBe(167.2);
  });

  test('Should return 9.0 if FaleMais60 plan call is from 011 - 018', () => {
    expect(calculateWithPlan(calls['011']['018'], 70, planCalls[1].value)).toBe(
      9.0
    );
  });
});
