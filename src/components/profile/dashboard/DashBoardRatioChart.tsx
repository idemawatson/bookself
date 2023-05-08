import {
  PieChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Pie,
  Cell,
  Legend,
  ResponsiveContainer,
  PieLabelRenderProps,
} from "recharts";
import { useStatistics } from "@/hooks/useStatistics";
import { FC } from "react";
import { useBookRatio } from "@/hooks/useBookRatio";
import { BOOK_STATUSES_NAME, BookStatuses } from "@/types/IBookForm";
import { Typography } from "@mui/material";

type Props = {
  year: number;
};

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const DashboardRatioChart: FC<Props> = ({ year }) => {
  const { data } = useBookRatio(year);

  const displayData = data.map((data) => {
    return { ...data, name: BOOK_STATUSES_NAME[data.status as BookStatuses] };
  });

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = (props: PieLabelRenderProps) => {
    const innerRadius = props.innerRadius as number;
    const outerRadius = props.outerRadius as number;
    const cx = props.cx as number;
    const cy = props.cy as number;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = (cx as number) + radius * Math.cos(-props.midAngle * RADIAN);
    const y = (cy as number) + radius * Math.sin(-props.midAngle * RADIAN);
    const percent = props.percent as number;

    if (percent == 0) {
      return <></>;
    }
    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
        fontSize={"15px"}
      >
        {`${(percent * 100).toFixed(1)}%`}
      </text>
    );
  };
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
        本棚の割合
      </Typography>
      <div style={{ height: "300px", width: "100%" }}>
        <ResponsiveContainer height="100%" width="100%">
          <PieChart>
            <Pie
              data={displayData}
              dataKey="count"
              nameKey="status"
              cx="50%"
              cy="50%"
              label={renderCustomizedLabel}
              labelLine={false}
              outerRadius={100}
              startAngle={90}
              endAngle={-270}
            >
              {data.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend verticalAlign="bottom"></Legend>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default DashboardRatioChart;
