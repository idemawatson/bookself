import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material'
import { FC, ReactNode } from 'react'
import { BaseButton } from '@/components/parts/common/BaseButton'

type Props = {
  open: boolean
  title: string
  handleClose: () => void
  handleAgree: () => void
  disableCancel?: boolean
  children: ReactNode
}
const BaseConfirmationDialog: FC<Props> = ({
  open,
  title,
  children,
  handleClose,
  handleAgree,
  disableCancel = false,
}) => {
  return (
    <Dialog open={open} onClose={handleClose} fullWidth>
      <DialogTitle id='alert-dialog-title'>{title}</DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
      <DialogActions>
        {disableCancel || (
          <Button onClick={handleClose} color='negative'>
            キャンセル
          </Button>
        )}
        <BaseButton color='secondary' onClick={handleAgree}>
          OK
        </BaseButton>
      </DialogActions>
    </Dialog>
  )
}

export default BaseConfirmationDialog
