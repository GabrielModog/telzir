export type PerMinuteType = (value: number, minutes: number) => string;

export type WithPlanType = (
  value: number,
  currentMinute: number,
  planMinutes: number
) => number;
