import { FC, useEffect } from "react";
import { Grid, Rating, Typography } from "@mui/material";
import { RhfDatePicker } from "@/components/parts/forms/DatePicker";
import { RhfTextField } from "@/components/parts/forms/TextField";
import BookStatusSelectField from "@/components/parts/books/BookStatusSelectField";
import { BOOK_STATUSES, BookUpdateSchema } from "@/types/IBookForm";
import {
  Control,
  Controller,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";

type Props = {
  control: Control<BookUpdateSchema, any>;
  watch: UseFormWatch<BookUpdateSchema>;
  setValue: UseFormSetValue<BookUpdateSchema>;
};

const ShelfBookUpdateForm: FC<Props> = ({ control, watch, setValue }) => {
  const isCompleted =
    watch("status", BOOK_STATUSES.WANT) === BOOK_STATUSES.COMPLETED;
  useEffect(() => {
    if (!isCompleted) {
      setValue("completedAt", undefined);
    }
  }, [isCompleted]);
  return (
    <>
      <Grid container columnSpacing={1}>
        <Grid item xs={6}>
          <BookStatusSelectField name="status" control={control} />
        </Grid>
        <Grid item xs={6}>
          {isCompleted && (
            <RhfDatePicker
              label="読んだ日付"
              name="completedAt"
              disableFuture
              control={control}
            />
          )}
        </Grid>
        {isCompleted && (
          <Grid xs={12} sx={{ my: 1 }} item>
            <Controller
              control={control}
              name={"rating"}
              defaultValue={-1}
              render={({ field: { onChange, value } }) => (
                <>
                  <Typography component="legend">評価</Typography>
                  <Rating
                    name={"rating"}
                    onChange={onChange}
                    value={Number(value)}
                  />
                </>
              )}
            />
          </Grid>
        )}
        <Grid xs={12} sx={{ my: 1 }} item>
          <RhfTextField
            label="メモ"
            name="comment"
            type="number"
            multiline
            rows={8}
            control={control}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default ShelfBookUpdateForm;
