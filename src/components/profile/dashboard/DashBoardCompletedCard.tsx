import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  Skeleton,
  Typography,
} from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import dayjs from "@/lib/importDayjs";
import { Suspense, useState } from "react";
import DashboardBarChart from "@/components/profile/dashboard/DashBoardBarChart";
import DashboardRatioChart from "./DashBoardRatioChart";

const DashboardCompletedCard = () => {
  const [year, setYear] = useState(Number(dayjs().format("YYYY")));

  return (
    <Card sx={{ my: 2 }} elevation={0}>
      <CardContent sx={{ pb: 0 }}>
        <Grid container>
          <Grid
            item
            xs={2}
            sx={{ textAlign: "right" }}
            onClick={() => setYear(year - 1)}
          >
            <ChevronLeft color="primary" />
          </Grid>
          <Grid item xs={8} sx={{ textAlign: "center" }}>
            <Typography color="primary.main">{year}年</Typography>
          </Grid>
          <Grid
            item
            xs={2}
            sx={{ textAlign: "left" }}
            onClick={() => setYear(year + 1)}
          >
            <ChevronRight color="primary" />
          </Grid>
        </Grid>
        <Suspense fallback={<Skeleton height={250} width="100%" />}>
          <DashboardBarChart year={year} />
        </Suspense>
        <Suspense fallback={<Skeleton height={400} width="100%" />}>
          <DashboardRatioChart year={year} />
        </Suspense>
      </CardContent>
    </Card>
  );
};

export default DashboardCompletedCard;
