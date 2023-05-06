import { FC, Suspense } from "react";
import ShelfPage from "@/components/shelf/ShelfContent";
import SkeletonShelfPage from "@/components/shelf/ShelfSkeletonPage";
import ShelfFilterTabs from "@/components/shelf/ShelfFilterTabs";
import ShelfHeader from "@/components/shelf/ShelfHeader";
import { Container } from "@mui/material";

type Props = {};

const ShelfTemplate: FC<Props> = ({}) => {
  return (
    <Container sx={{ pb: 10 }}>
      <ShelfFilterTabs />
      <ShelfHeader />
      <Suspense fallback={<SkeletonShelfPage />}>
        <ShelfPage />
      </Suspense>
    </Container>
  );
};

export default ShelfTemplate;
