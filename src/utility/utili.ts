import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

export const getDaysShort = (givenDate: string): string => {
  const today = dayjs().startOf("day");
  const target = dayjs(givenDate).startOf("day");

  const diff = today.diff(target, "day");

  return Math.abs(diff).toString();
};


export const formatTo12Hour = (time: string): string => {
  return dayjs(time, "HH:mm:ss").format("hh A");
};


export const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${(bytes / Math.pow(k, i)).toFixed(2)} ${sizes[i]}`;
  };


