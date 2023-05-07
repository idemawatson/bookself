import { Box, Container } from "@mui/material";
import { FC, useState } from "react";

import { useSearchBook } from "@/hooks/useSearchBook";
import BookCard from "@/components/parts/books/BookCard";
import { SearchBook } from "@/types/BooksResponse";
import BookAddConfirmationDialog from "@/components/search/SearchBookAddConfirmationDialog";
import SearchBookForm from "@/components/search/SearchBookForm";
import BaseCircularProgress from "@/components/parts/common/BaseCircularProgress";
import SearchFirstCaption from "./SearchFirstCaption";
import SearchNotFoundCaption from "./SearchNotFoundCaption";

const INDICATOR_SIZE = 40;

const SearchTemplate: FC = () => {
  const [userInput, setUserInput] = useState("");
  const [searchWord, setSearchWord] = useState("");
  const [selectedBook, setSelectedBook] = useState<SearchBook | undefined>(
    undefined
  );
  const [isNotSearched, setIsNotSearched] = useState(true);

  const { data } = useSearchBook(searchWord);

  const search = ($event: React.FormEvent<HTMLFormElement>) => {
    $event.preventDefault();
    setIsNotSearched(false);
    setSearchWord(userInput);
  };

  const openConfirm = (book: SearchBook) => {
    setSelectedBook(book);
  };

  return (
    <>
      <Container sx={{ height: "100%" }}>
        <SearchBookForm search={search} setUserInput={setUserInput} />
        <Box sx={{ overflowY: "auto", maxHeight: "80%", mt: 2 }}>
          {isNotSearched && <SearchFirstCaption />}
          {!!searchWord && data?.length == 0 && <SearchNotFoundCaption />}
          {!data && <BaseCircularProgress indicator_size={INDICATOR_SIZE} />}
          {data?.map((book) => (
            <Box sx={{ my: 1 }} key={book.id}>
              <BookCard book={book} handleOnClick={() => openConfirm(book)} />
            </Box>
          ))}
        </Box>
      </Container>
      <BookAddConfirmationDialog
        close={() => setSelectedBook(undefined)}
        book={selectedBook}
      />
    </>
  );
};

export default SearchTemplate;
