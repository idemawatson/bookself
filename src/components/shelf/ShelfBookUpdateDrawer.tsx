import BookCard from "@/components/parts/books/BookCard";
import { ClientBook } from "@/types/BooksResponse";
import {
  BookUpdateSchema,
  bookUpdateSchema,
  BOOK_STATUSES,
} from "@/types/IBookForm";
import { Box, Button, Grid, SwipeableDrawer } from "@mui/material";
import { useForm } from "react-hook-form";
import ShelfBookUpdateForm from "@/components/shelf/ShelfBookUpdateForm";
import { BaseButton } from "@/components/parts/common/BaseButton";
import { useLoading } from "@/hooks/useLoading";
import { useNotification } from "@/hooks/useNotification";
import dayjs from "@/lib/importDayjs";
import { KeyedMutator } from "swr";
import { useSelectedBook } from "@/hooks/useSelectedBook";
import { yupResolver } from "@hookform/resolvers/yup";

import { client } from "@/providers/AxiosClientProvider";

type Props = {
  drawer: boolean;
  setOpen: (value: boolean) => void;
  mutate: KeyedMutator<ClientBook[][]>;
};

const ShelfBookUpdateDrawer: React.FC<Props> = ({
  drawer,
  setOpen,
  mutate,
}) => {
  const { showLoading, hideLoading } = useLoading();
  const { showSuccess, showError } = useNotification();
  const { selectedBook: book } = useSelectedBook();
  const formMethods = useForm<BookUpdateSchema>({
    mode: "onChange",
    resolver: yupResolver(bookUpdateSchema),
    defaultValues: {
      comment: book.comment || "",
      status: book.status,
      completedAt: dayjs(book?.completedAt).toDate(),
    },
  });

  const close = () => {
    setOpen(false);
    formMethods.reset();
  };

  const update = async (form: BookUpdateSchema) => {
    try {
      if (!book) return;
      showLoading();
      const req = {
        ...form,
        completedAt:
          form.status === BOOK_STATUSES.COMPLETED
            ? dayjs(form.completedAt).toDate()
            : undefined,
      };
      await client.patch<BookUpdateSchema, any>(`/books/${book.book_id}`, req);
      showSuccess("更新しました");
      mutate();
      close();
    } catch (err) {
      console.error(err);
      showError("エラーが発生しました");
    } finally {
      hideLoading();
    }
  };

  return (
    <>
      <SwipeableDrawer
        anchor="bottom"
        open={drawer}
        onOpen={() => setOpen(true)}
        onClose={close}
        sx={{ zIndex: 1000 }}
      >
        <Box sx={{ p: 1 }}>
          {book && (
            <>
              <BookCard book={book} />
              <form onSubmit={formMethods.handleSubmit(update)}>
                <Box sx={{ p: 1, mt: 2 }}>
                  <ShelfBookUpdateForm
                    control={formMethods.control}
                    watch={formMethods.watch}
                    setValue={formMethods.setValue}
                  />
                </Box>
                <Grid container>
                  <Grid item xs={6} sx={{ textAlign: "left" }}>
                    <Button disableElevation onClick={close}>
                      閉じる
                    </Button>
                  </Grid>
                  <Grid item xs={6} sx={{ textAlign: "right" }}>
                    <BaseButton
                      submit={true}
                      color="secondary"
                      disabled={!formMethods.formState.isValid}
                    >
                      更新
                    </BaseButton>
                  </Grid>
                </Grid>
              </form>
            </>
          )}
        </Box>
      </SwipeableDrawer>
    </>
  );
};

export default ShelfBookUpdateDrawer;
