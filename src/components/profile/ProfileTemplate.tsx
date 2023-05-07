import { Divider, Paper, Tab, Tabs } from "@mui/material";
import { FC, SyntheticEvent, useState } from "react";
import UserRecordTemplate from "@/components/profile/userRecord/UserRecordTemplate";
import DashboardTemplate from "@/components/profile/dashboard/DashboardTemplate";

type Props = {};
const ProfileTemplate: FC<Props> = () => {
  const [tab, setTab] = useState(0);
  const handleChange = (_: SyntheticEvent<Element, Event>, value: number) => {
    setTab(value);
  };
  const renderContent = () => {
    if (tab === 0) return <UserRecordTemplate />;
    if (tab === 1) return <DashboardTemplate />;
  };
  return (
    <>
      <Paper elevation={0} sx={{ mx: 2 }}>
        <Tabs
          value={tab}
          onChange={handleChange}
          variant="fullWidth"
          TabIndicatorProps={{
            style: {
              backgroundColor: "#101010",
              height: "0",
            },
          }}
        >
          <Tab label="レベル" />
          <Tab label="読書記録" />
        </Tabs>
        <Divider />
      </Paper>
      {renderContent()}
    </>
  );
};

export default ProfileTemplate;
