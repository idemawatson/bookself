import { Box, Typography } from "@mui/material";
import { FC, useState } from "react";
import BaseConfirmationDialog from "@/components/parts/common/BaseConfirmationDialog";
import { useLoading } from "@/hooks/useLoading";
import { client } from "@/providers/AxiosClientProvider";
import { SearchBook } from "@/types/BooksResponse";
import { useNotification } from "@/hooks/useNotification";
import { SelectField } from "@/components/parts/forms/SelectField/presenter";
import { BOOK_STATUSES, BookStatuses } from "@/types/IBookForm";
import { CreateBookRequest } from "@/types/CreateBookRequest";
import { isAxiosError } from "axios";
import { CREATE_BOOK_DUPLICATE } from "@/helpers/errorCodes";

export const STATUS_SELECTIONS = [
  { text: "読みたい", value: 0 },
  { text: "積読", value: 1 },
  { text: "読んでる", value: 2 },
  { text: "読んだ！", value: 3 },
];

type Props = {
  close: () => void;
  book?: SearchBook;
};

const BookAddConfirmationDialog: FC<Props> = ({ close, book }) => {
  const { showLoading, hideLoading } = useLoading();
  const { showSuccess, showError } = useNotification();
  const [status, setStatus] = useState<BookStatuses>(BOOK_STATUSES.WANT);

  const addBookToShelf = async () => {
    try {
      if (!book) return;
      showLoading();
      await client.put<CreateBookRequest, any>("/books", {
        ...book,
        book_id: book.id,
        status,
      });
      showSuccess("本棚に追加しました");
    } catch (err) {
      console.error(err);
      if (
        isAxiosError(err) &&
        err.response?.data?.code === CREATE_BOOK_DUPLICATE
      ) {
        showError("すでに登録済みです");
      } else {
        showError("エラーが発生しました");
      }
    } finally {
      hideLoading();
    }
  };
  const handleAgree = () => {
    addBookToShelf();
    close();
  };
  return (
    <>
      <BaseConfirmationDialog
        open={!!book}
        title="本棚に追加"
        handleClose={close}
        handleAgree={handleAgree}
      >
        <Typography variant="body1">
          <span style={{ fontWeight: "bold" }}>{book?.title}</span>
        </Typography>
        <Box sx={{ py: 2 }}>
          <SelectField
            name="status"
            label="今どんな感じ？"
            selectedValue={status}
            selectPropsList={STATUS_SELECTIONS}
            onChange={(event) => {
              setStatus(event.target.value as BookStatuses);
            }}
          />
        </Box>
      </BaseConfirmationDialog>
    </>
  );
};

export default BookAddConfirmationDialog;
