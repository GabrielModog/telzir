import { calculateWithPlan } from '../utils';
import calls from '../data/calls.json';
import planCalls from '../data/plans.json';

describe('Calls with FaleMais plans:', () => {
  test('Should return 0 if FaleMais30 plan call is from 011 - 016 past 20 minutes', () => {
    expect(calculateWithPlan(calls['011']['016'], 20, planCalls[0].value)).toBe(
      0
    );
  });

  test('Should return 37.4 if FaleMais60 plan call is from 011 - 017 past 80 minutes', () => {
    expect(calculateWithPlan(calls['011']['017'], 80, planCalls[1].value)).toBe(
      34
    );
  });

  test('Should return 167.2 if FaleMais120 plan call is from 018 - 011 past 200 minutes', () => {
    expect(
      calculateWithPlan(calls['018']['011'], 200, planCalls[2].value)
    ).toBe(152);
  });

  test('Should return 9.9 if FaleMais60 plan call is from 011 - 018 past 70 minutes', () => {
    expect(calculateWithPlan(calls['011']['018'], 70, planCalls[1].value)).toBe(
      9
    );
  });

  test('Should return 39.6 if FaleMais120 plan call is from 011 - 018 past 160 minutes', () => {
    expect(
      calculateWithPlan(calls['011']['018'], 160, planCalls[2].value)
    ).toBe(36);
  });

  test('Should return 29.7 if FaleMais120 plan call is from 011 - 018 past 130 minutes', () => {
    expect(
      calculateWithPlan(calls['011']['018'], 130, planCalls[2].value)
    ).toBe(9);
  });
});
