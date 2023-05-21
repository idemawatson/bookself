import { Typography } from '@mui/material'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import Error404 from '@/components/parts/common/404'
import { BaseButton } from '@/components/parts/common/BaseButton'

export default function Custom404() {
  const router = useRouter()
  const session = useSession()

  return (
    <Error404>
      {session.status == 'authenticated' && (
        <>
          <Typography
            sx={{ my: 1, color: 'black', textAlign: 'center', lineHeight: 2 }}
          >
            データが見つかりませんでした
          </Typography>
          <BaseButton
            sx={{ my: 1 }}
            color='negative'
            onClick={() => router.push('/shelf')}
          >
            本棚に戻る
          </BaseButton>
        </>
      )}
    </Error404>
  )
}
