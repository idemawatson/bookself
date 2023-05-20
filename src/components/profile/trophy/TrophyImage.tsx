import Image from 'next/image'
import { TROPHY_RANKS, TROPHY_RANK_NAME } from '@/constants/trophies'
import { ClientTrophy } from '@/types/ClientTrophy'

type Props = {
  trophy: ClientTrophy
}
const TrophyImage: React.FC<Props> = ({ trophy }) => {
  const getTrophyImg = () => {
    switch (trophy.rank) {
      case TROPHY_RANKS.BRONZE:
        return '/trophy_bronze.png'
      case TROPHY_RANKS.SILVER:
        return '/trophy_silver.png'
      case TROPHY_RANKS.GOLD:
        return '/trophy_gold.png'
      case TROPHY_RANKS.PLATINUM:
        return '/trophy_platinum.png'
    }
  }
  return (
    <>
      <Image
        src={getTrophyImg()}
        alt={`${TROPHY_RANK_NAME[trophy.rank]}トロフィー`}
        width={60}
        height={100}
      />
    </>
  )
}

export default TrophyImage
