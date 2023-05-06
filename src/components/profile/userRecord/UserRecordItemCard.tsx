import { Paper, Typography } from "@mui/material";
import { ReactElement } from "react";

const UserRecordItemCard: React.FC<{
  title: string;
  text: string;
  append?: string;
  children?: ReactElement;
}> = ({ title, text, append, children }) => {
  return (
    <Paper elevation={0} sx={{ py: 1, px: 2, my: 2 }}>
      <Typography
        sx={{
          fontSize: "1.5rem",
          fontWeight: 500,
          color: "gray",
        }}
      >
        {title}
      </Typography>
      <UserRecordItemValueText text={text} append={append} />
      {children}
    </Paper>
  );
};

const UserRecordItemValueText = ({
  text,
  append,
}: {
  text: string;
  append?: string;
}) => {
  return (
    <Typography
      sx={{
        textAlign: "right",
        fontSize: "3rem",
        fontWeight: "bold",
        color: "primary.main",
      }}
    >
      {text}
      {append && (
        <Typography
          component="span"
          sx={{
            pl: 1,
            fontSize: "1rem",
            color: "gray",
          }}
        >
          {append}
        </Typography>
      )}
    </Typography>
  );
};

export default UserRecordItemCard;
