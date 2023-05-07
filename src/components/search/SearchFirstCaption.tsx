import { Alert, AlertTitle } from "@mui/material";

const SearchFirstCaption = () => {
  return (
    <Alert severity="info" sx={{ mt: 2 }}>
      <AlertTitle>Info</AlertTitle>
      <div>書籍のタイトルや作者名で検索してみましょう！</div>
    </Alert>
  );
};

export default SearchFirstCaption;
