import { AppBar, Box, Toolbar, Typography } from "@mui/material";

const TheAppBar: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        elevation={1}
        position="fixed"
        sx={{ backgroundColor: "primary" }}
      >
        <Toolbar variant="dense" sx={{ textAlign: "center" }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Bookself
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default TheAppBar;
