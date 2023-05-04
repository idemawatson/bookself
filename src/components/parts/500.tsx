import { Paper, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { BaseButton } from "@/components/parts/BaseButton";

const Error500: React.FC = () => {
  const router = useRouter();
  const toHome = () => {
    router.push("/shelf");
  };
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
      <BaseButton sx={{ my: 1 }} color="secondary" onClick={toHome}>
        ホームに戻る
      </BaseButton>
    </Paper>
  );
};

export default Error500;
