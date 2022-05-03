export const parseConsumablesToHours = (
  starshipConsumables: string
): number | null => {
  const HOURS_IN_A_DAY = 24;
  const HOURS_IN_A_WEEK = HOURS_IN_A_DAY * 7;
  const HOURS_IN_A_MONTH = HOURS_IN_A_DAY * 30;
  const HOURS_IN_A_YEAR = HOURS_IN_A_MONTH * 12;

  const [time, unit] = starshipConsumables.split(" ");

  if (unit.includes("day")) {
    return Number(time) * HOURS_IN_A_DAY;
  }

  if (unit.includes("week")) {
    return Number(time) * HOURS_IN_A_WEEK;
  }

  if (unit.includes("month")) {
    return Number(time) * HOURS_IN_A_MONTH;
  }

  if (unit.includes("year")) {
    return Number(time) * HOURS_IN_A_YEAR;
  }

  return null;
};

export const stopsPerMGLTDistance = (
  distance: number | null,
  mglt: number | null,
  consumablesTime: number | null
) => {
  console.table({ distance, mglt, consumablesTime });
  if (distance === null || mglt === null || consumablesTime === null)
    return null;

  const distanceTraveledPerTime = mglt * consumablesTime;

  return Math.floor(distance / distanceTraveledPerTime);
};
