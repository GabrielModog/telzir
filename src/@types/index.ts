export type PerMinuteType = (value: number, minutes: number) => number;

export type WithPlanType = (
  value: number,
  currentMinute: number,
  planMinutes: number
) => number;
