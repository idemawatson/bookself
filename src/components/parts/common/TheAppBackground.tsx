import { Box } from "@mui/material";
import { grey } from "@mui/material/colors";
import { ReactNode, FC } from "react";

const TheAppBackground: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        overflow: "auto",
        bgcolor: grey[200],
      }}
    >
      {children}
    </Box>
  );
};

export default TheAppBackground;