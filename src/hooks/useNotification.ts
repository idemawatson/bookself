// eslint-disable-next-line
import { AlertColor } from '@mui/material/Alert'
import useSWR from 'swr'

type Props = {
  visible: boolean
  severity: AlertColor | undefined
  message: string | undefined
}

const useNotificationSWR = (
  initialData: Props,
): [Props, (state: Props) => void] => {
  const { data: state, mutate: setState } = useSWR('notification', null, {
    fallbackData: initialData,
    revalidateIfStale: true,
  })
  return [state as Props, setState]
}

export const useNotification = () => {
  const initialState = {
    visible: false,
    severity: undefined,
    message: undefined,
  }
  const [notification, setNotification] = useNotificationSWR(initialState)

  const showError = (message: string) => {
    showNotification('error', message)
  }
  const showWarning = (message: string) => {
    showNotification('warning', message)
  }
  const showInfo = (message: string) => {
    showNotification('info', message)
  }
  const showSuccess = (message: string) => {
    showNotification('success', message)
  }
  const showNotification = (
    severity: AlertColor | undefined,
    message: string,
  ) => {
    setNotification({ visible: true, severity, message })
    setTimeout(hideNotification, 3000)
  }
  const hideNotification = () => {
    setNotification(initialState)
  }

  return {
    notification,
    showError,
    showWarning,
    showInfo,
    showSuccess,
    hideNotification,
    useNotification,
  }
}
