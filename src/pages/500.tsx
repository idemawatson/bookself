import Error500 from '@/components/parts/common/500'
import { BaseButton } from '@/components/parts/common/BaseButton'

export default function Custom500() {
  const back = () => history.back()
  return (
    <Error500>
      <BaseButton sx={{ my: 1 }} color='negative' onClick={back}>
        戻る
      </BaseButton>
    </Error500>
  )
}
