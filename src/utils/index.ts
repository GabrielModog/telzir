import { PerMinuteType, WithPlanType } from '../@types';

export const calculatePerMinute: PerMinuteType = (
  value: number,
  minutes: number
) => {
  return Number(value * minutes).toFixed(1);
};

export const calculateWithPlan: WithPlanType = (
  value,
  currentMinutes,
  planMinutes
) => {
  if (currentMinutes > planMinutes)
    return Number(
      Math.max(0, value * (currentMinutes - planMinutes)).toFixed(1)
    );

  return 0;
};
