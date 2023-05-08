import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Bar,
  LabelList,
  ResponsiveContainer,
} from "recharts";
import { useStatistics } from "@/hooks/useStatistics";
import { FC } from "react";
import { Typography } from "@mui/material";

type Props = {
  year: number;
};
const DashboardBarChart: FC<Props> = ({ year }) => {
  const { data } = useStatistics(year);

  return (
    <>
      <Typography
        sx={{
          py: 1,
          textAlign: "center",
          fontSize: "1.2rem",
          fontWeight: "500",
          color: "gray",
        }}
      >
        読み終えた本
      </Typography>
      <div style={{ height: "250px", width: "100%" }}>
        <ResponsiveContainer height="100%" width="100%">
          <BarChart
            width={100}
            height={230}
            margin={{ top: 25, left: 5 }}
            data={data}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              interval={0}
              unit="月"
              tick={{ fontSize: "0.75rem" }}
            />
            <YAxis
              label={{ value: "冊", position: "top", offset: 10 }}
              width={10}
              allowDecimals={false}
              tick={{ fontSize: "0.75rem" }}
            />
            <Bar dataKey="count" fill="#82ca9d">
              <LabelList dataKey="count" position="top" />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default DashboardBarChart;
