import dayjs from "@/lib/importDayjs";
import * as yup from "yup";

export const BOOK_STATUSES = {
  WANT: 0,
  TSUNDOKU: 1,
  READING: 2,
  COMPLETED: 3,
} as const;

export type BookStatuses = (typeof BOOK_STATUSES)[keyof typeof BOOK_STATUSES];

export const bookUpdateSchema = yup.object().shape({
  comment: yup.string().max(1000, "1000文字以下で入力してください"),
  status: yup.mixed().oneOf(Object.values(BOOK_STATUSES)).required(),
  completedAt: yup.date().max(dayjs().add(1, "d"), "不正な日付です"),
});

export type BookUpdateSchema = yup.InferType<typeof bookUpdateSchema>;
