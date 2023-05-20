import { useRouter } from 'next/router'
import { useSession as useNextAuthSession } from 'next-auth/react'
import { useEffect } from 'react'
import { useLoading } from '@/hooks/useLoading'

const useSession = () => {
  const router = useRouter()
  const session = useNextAuthSession({
    required: true,
    onUnauthenticated() {
      router.push('/')
    },
  })
  const { showLoading, hideLoading } = useLoading()

  useEffect(() => {
    if (session.status !== 'authenticated') {
      showLoading()
    } else {
      hideLoading()
    }
  }, [session.status, showLoading, hideLoading])

  return session.data
}

export default useSession
