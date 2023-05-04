import dayjs from "@/lib/importDayjs";
import * as yup from "yup";

export const BOOK_STATUSES = {
  WANT: 0,
  TSUNDOKU: 1,
  READING: 2,
  COMPLETED: 3,
} as const;

export type BookStatuses = (typeof BOOK_STATUSES)[keyof typeof BOOK_STATUSES];

type BookUpdateModel = {
  comment?: string;
  status: BookStatuses;
  completedAt?: Date;
};

type BookCreateModel = {
  status: BookStatuses;
  completedAt?: Date;
};

const status = yup
  .mixed()
  .oneOf(BOOK_STATUSES)
  .required("ステータスを指定してください");
const completedAt = yup.date().max(dayjs().add(1, "d"), "不正な日付です");

export const bookUpdateSchema: yup.SchemaOf<BookUpdateModel> = yup
  .object()
  .shape({
    comment: yup.string().max(1000, "1000文字以下で入力してください"),
    status,
    completedAt,
  });

export const bookCreateSchema: yup.SchemaOf<BookCreateModel> = yup
  .object()
  .shape({
    status,
    completedAt,
  });

export type IBookUpdateForm = yup.InferType<typeof bookUpdateSchema>;
export type IBookCreateForm = yup.InferType<typeof bookCreateSchema>;
