import { Container, LinearProgress, styled, Typography } from '@mui/material'
import UserRecordItemCard from './UserRecordItemCard'
import { useUserRecord } from '@/hooks/useUserRecord'

const UserRecordResumePaper: React.FC = () => {
  const { data: userRecord } = useUserRecord()

  const StyledLinearProgress = styled(LinearProgress)({
    height: 15,
  })

  return (
    <>
      <Container>
        <UserRecordItemCard
          title='読書レベル'
          text={String(userRecord.level)}
          append='Lv.'
        >
          <>
            <StyledLinearProgress
              variant='determinate'
              value={userRecord.progress}
            />
            <Typography sx={{ textAlign: 'right', color: 'gray', pt: 1 }}>
              次のレベルまで{userRecord.restPages}ページ
            </Typography>
          </>
        </UserRecordItemCard>
        <UserRecordItemCard
          title='読んだ本'
          text={String(userRecord.bookCount)}
          append='冊'
        />
        <UserRecordItemCard
          title='総読書量'
          text={String(userRecord.pageCount)}
          append='ページ'
        />
      </Container>
    </>
  )
}

export default UserRecordResumePaper
