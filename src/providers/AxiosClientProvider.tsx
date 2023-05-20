import { useRouter } from 'next/router'
import { ReactNode, useEffect } from 'react'
import BackendApiClient from '@/lib/BackendApiClient'

type Props = {
  children: ReactNode
}

export const client = new BackendApiClient()
const AxiosClientProvider: React.FC<Props> = ({ children }) => {
  const router = useRouter() // Hooksが使用できる！！

  useEffect(() => {
    client.interceptors().response.use(
      (response) => response,
      (error) => {
        switch (error.response?.status) {
          case 404:
            router.push('/404')
          case 500:
            router.push('/500')
        }
        throw error
      },
    )
  }, [router])

  return <>{children}</>
}

export default AxiosClientProvider
