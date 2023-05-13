import SignInButton from "@/components/parts/common/SignInButton";
import { Grid, Paper, Typography } from "@mui/material";

const Home = () => {
  return (
    <Paper
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        bgcolor: "primary.main",
      }}
    >
      <Grid container>
        <Grid item textAlign={"center"} xs={12}>
          <Typography
            sx={{
              fontSize: "4rem",
              fontWeight: 400,
              letterSpacing: "0.2rem",
              borderRadius: 10,
            }}
            color={"primary.contrastText"}
          >
            BookSelf
          </Typography>
        </Grid>
        <Grid item textAlign="center" xs={12} sx={{ pt: 4 }}>
          <SignInButton />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Home;
