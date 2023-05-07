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

type Props = {
  year: number;
  setYear: (year: number) => void;
};
const DashboardBarChart: FC<Props> = ({ year, setYear }) => {
  const { data } = useStatistics(year);

  //   const data = [
  //     { month: "1", count: 2 },
  //     { month: "2", count: 2 },
  //     { month: "3", count: 2 },
  //     { month: "4", count: 1 },
  //     { month: "5", count: 2 },
  //     { month: "6", count: 0 },
  //     { month: "7", count: 2 },
  //     { month: "8", count: 2 },
  //     { month: "9", count: 0 },
  //     { month: "10", count: 1 },
  //     { month: "11", count: 2 },
  //     { month: "12", count: 2 },
  //   ];

  return (
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
  );
};

export default DashboardBarChart;
