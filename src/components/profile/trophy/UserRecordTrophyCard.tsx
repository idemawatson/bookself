import { useTrophies } from "@/hooks/useTrophies";
import { Typography } from "@mui/material";

const UserRecordTrophyCard = () => {
  const { data } = useTrophies();
  return (
    <>
      {data.map((trophy) => (
        <>
          <Typography>{trophy.name}</Typography>
          <Typography>{trophy.description}</Typography>
          <Typography>{trophy.rank}</Typography>
        </>
      ))}
    </>
  );
};

export default UserRecordTrophyCard;
