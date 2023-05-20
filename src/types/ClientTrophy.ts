import { TrophyRanks } from '@/constants/trophies'

export type ClientTrophy = {
  trophy_id: string
  name: string
  description: string
  rank: TrophyRanks
  createdAt: string
  isNew: boolean
}
