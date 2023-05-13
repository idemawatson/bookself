import { TROPHY_RANK_NAME } from "@/constants/trophies";
import { useTrophies } from "@/hooks/useTrophies";
import { Grid, Paper, Typography } from "@mui/material";

import dayjs from "@/lib/importDayjs";
import TrophyImage from "@/components/profile/trophy/TrophyImage";
import TrophyArchivedDialog from "./TrophyArchivedDialog";
import { useEffect, useState } from "react";
import { ClientTrophy } from "@/types/ClientTrophy";

const TrophyList = () => {
  const { data } = useTrophies();
  const [newTrophies, setNewTrophies] = useState<ClientTrophy[]>([]);

  useEffect(() => {
    const newTrophies = data.filter((trophy) => trophy.isNew);
    setNewTrophies(newTrophies);
  }, [data]);

  const close = () => setNewTrophies([]);

  return (
    <>
      {data.map((trophy) => (
        <Paper sx={{ mx: 2, my: 1 }} elevation={0} key={trophy.trophy_id}>
          <Grid container>
            <Grid item xs={3} sx={{ textAlign: "center" }}>
              <TrophyImage trophy={trophy} />
            </Grid>
            <Grid item xs={9} sx={{ py: 1, position: "relative" }}>
              <Typography
                sx={{
                  fontWeight: "bold",
                  color: "primary.main",
                  fontSize: "1.5rem",
                }}
              >
                {trophy.name}
              </Typography>
              <Typography sx={{ fontSize: "0.8rem" }}>
                {trophy.description}
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.8rem",
                  position: "absolute",
                  bottom: "0.5rem",
                }}
              >
                {TROPHY_RANK_NAME[trophy.rank]}
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.8rem",
                  position: "absolute",
                  bottom: "0.5rem",
                  right: "0.5rem",
                }}
              >
                {dayjs(trophy.createdAt).format("YYYY/MM/DD")}
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      ))}
      <TrophyArchivedDialog
        newTrophies={newTrophies}
        dialog={!!newTrophies.length}
        close={close}
      />
    </>
  );
};

export default TrophyList;
