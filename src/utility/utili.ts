import dayjs from "dayjs";

export const getDaysShort = (givenDate: string): string => {
  const today = dayjs().startOf("day");
  const target = dayjs(givenDate).startOf("day");

  const diff = today.diff(target, "day");

  return Math.abs(diff).toString();
};


