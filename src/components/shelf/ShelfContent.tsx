import BaseCircularProgress from "@/components/parts/common/BaseCircularProgress";
import { useIntersection } from "@/hooks/useIntersection";
import { useSelectedBook } from "@/hooks/useSelectedBook";
import { useShelfFilterTab } from "@/hooks/shelf/useShelfFilterTab";
import { useBooks } from "@/hooks/useBooks";
import { ClientBook } from "@/types/BooksResponse";
import { Alert, AlertTitle, Box } from "@mui/material";
import { FC, useEffect, useRef, useState } from "react";
import ShelfStage from "@/components/shelf/ShelfStage";
import ShelfBookUpdateDrawer from "@/components/shelf/ShelfBookUpdateDrawer";
import Link from "next/link";

type Props = {};
const PER_PAGE_LIMIT = 12;

const ShelfContent: FC<Props> = () => {
  const ref = useRef<HTMLDivElement>(
    null
  ) as React.MutableRefObject<HTMLDivElement>;
  const intersection = useIntersection(ref);

  const { shelfFilterTab: tab } = useShelfFilterTab();
  const [drawer, setDrawer] = useState(false);
  const { selectedBook, setSelectedBook } = useSelectedBook();
  const { data, mutate, size, setSize } = useBooks(
    tab > 0 ? tab - 1 : undefined
  );
  const [openCount, setOpenCount] = useState(0);

  const isEmpty = data && data[0]?.length === 0;
  const isReachingEnd =
    isEmpty || (data && data[data.length - 1]?.length < PER_PAGE_LIMIT);

  useEffect(() => {
    if (intersection && !isReachingEnd) {
      getBooks();
    }
  }, [intersection, isReachingEnd]);

  const open = (book: ClientBook) => {
    setOpenCount(openCount + 1);
    setSelectedBook({ ...book });
    setDrawer(true);
  };
  if (!data) return <></>;

  // 次のデータの取得
  const getBooks = async () => {
    setSize(size + 1);
  };

  const books = data.flat();

  const PER_ROW = 3;
  const rowSize = Math.floor(
    books.length % PER_ROW === 0
      ? books.length / PER_ROW
      : books.length / PER_ROW + 1
  );

  return (
    <>
      {[...Array(rowSize)].map((_, i) => (
        <ShelfStage
          onClickBook={open}
          books={books.slice(i * PER_ROW, (i + 1) * PER_ROW)}
          key={i}
        />
      ))}
      <Box ref={ref} sx={{ position: "relative" }}>
        {!isReachingEnd && (
          <BaseCircularProgress indicator_size={40} sx={{ mt: 4 }} />
        )}
        {isEmpty && (
          <Alert severity="info" sx={{ mt: 2 }}>
            <AlertTitle>Info</AlertTitle>
            <div>書籍が登録されていません。</div>
            <div>
              <Link href="/search">
                <span
                  style={{
                    textDecoration: "underline",
                    fontWeight: "bold",
                    color: "primary.main",
                  }}
                >
                  検索画面
                </span>
              </Link>
              から追加してみましょう！
            </div>
          </Alert>
        )}
      </Box>
      {selectedBook && (
        <ShelfBookUpdateDrawer
          key={openCount}
          drawer={drawer}
          setOpen={setDrawer}
          mutate={mutate}
        />
      )}
    </>
  );
};

export default ShelfContent;
