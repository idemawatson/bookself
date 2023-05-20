import Image from 'next/image'
import { TROPHY_RANKS, TROPHY_RANK_NAME } from '@/constants/trophies'
import { ClientTrophy } from '@/types/ClientTrophy'

type Props = {
  trophy: ClientTrophy
}
const TrophyImage: React.FC<Props> = ({ trophy }) => {
  const getRank = () => {
    switch (trophy.rank) {
      case TROPHY_RANKS.BRONZE:
        return 'bronze'
      case TROPHY_RANKS.SILVER:
        return 'silver'
      case TROPHY_RANKS.GOLD:
        return 'gold'
      case TROPHY_RANKS.PLATINUM:
        return 'platinum'
    }
  }
  return (
    <>
      <Image
        src={`/trophy_${getRank()}.png`}
        alt={`${TROPHY_RANK_NAME[trophy.rank]}トロフィー`}
        width={60}
        height={100}
      />
    </>
  )
}

export default TrophyImage
