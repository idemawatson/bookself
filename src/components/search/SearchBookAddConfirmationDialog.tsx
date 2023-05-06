import { Box, Typography } from "@mui/material";
import { useState } from "react";
import BaseConfirmationDialog from "@/components/parts/common/BaseConfirmationDialog";
import { SearchBook } from "@/types/BooksResponse";
import { SelectField } from "@/components/parts/forms/SelectField/presenter";
import { BOOK_STATUSES, BookStatuses } from "@/types/IBookForm";
import useCreateBook from "@/hooks/search/useCreateBook";
import UserLevelUpDialog from "../parts/user/UserLevelUpDialog";

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

const BookAddConfirmationDialog: React.FC<Props> = ({ close, book }) => {
  const [status, setStatus] = useState<BookStatuses>(BOOK_STATUSES.WANT);
  const [newLevel, setNewLevel] = useState<number | null>(null);
  const { createBook } = useCreateBook();

  const handleAgree = async () => {
    const res = await createBook(book, status);
    if (res && !!res.newLevel) {
      setNewLevel(res.newLevel);
    }
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
      <UserLevelUpDialog
        dialog={!!newLevel}
        level={newLevel}
        close={() => setNewLevel(null)}
      />
    </>
  );
};

export default BookAddConfirmationDialog;
