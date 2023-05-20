import { useLoading } from '@/hooks/useLoading'
import { useNotification } from '@/hooks/useNotification'
import { client } from '@/providers/AxiosClientProvider'
import { ClientUser } from '@/types/ClientUser'
import { UserUpdateSchema } from '@/types/IUserForm'

const useUpdateUser = () => {
  const { showLoading, hideLoading } = useLoading()
  const { showSuccess, showError } = useNotification()
  const updateUser = async (data: UserUpdateSchema) => {
    try {
      showLoading()
      const res = await client.patch<UserUpdateSchema, ClientUser>('/user', {
        name: data.name,
      })
      showSuccess('更新しました')
      return res.data
    } catch (err) {
      console.error(err)
      showError('エラーが発生しました')
    } finally {
      hideLoading()
    }
  }
  return { updateUser }
}

export default useUpdateUser
