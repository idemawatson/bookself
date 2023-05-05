import { Paper, Typography } from "@mui/material";
import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};
const Error500: React.FC<Props> = ({ children }) => {
  return (
    <Paper
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "#eee",
      }}
    >
      <Typography
        variant="h5"
        sx={{ my: 1, color: "primary.main", fontWeight: "bold" }}
      >
        本棚に異変が生じたようです
      </Typography>
      <Typography
        sx={{ my: 1, color: "black", textAlign: "center", lineHeight: 2 }}
      >
        <div>司書が頑張って直しています...</div>
        <div>しばらく待ってお試しください</div>
      </Typography>
      {children}
    </Paper>
  );
};

export default Error500;
