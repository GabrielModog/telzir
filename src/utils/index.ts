import { PerMinuteType, WithPlanType } from "../@types";

export const calculatePerMinute: PerMinuteType = (
  value: number,
  minutes: number
) => {
  return value * minutes;
};

export const calculateWithPlan: WithPlanType = (
  value,
  currentMinutes,
  planMinutes
) => {
  if (currentMinutes > planMinutes)
    return Number(
      Math.max(0, value * (currentMinutes - planMinutes) * 1.1).toFixed(1)
    );

  return 0;
};