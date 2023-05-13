import { TrophyRanks } from "@/constants/trophies";

export type ClientTrophy = {
  id: string;
  name: string;
  description: string;
  rank: TrophyRanks;
};
