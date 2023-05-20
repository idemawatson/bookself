import * as yup from 'yup'

export const userUpdateForm = yup.object().shape({
  name: yup
    .string()
    .required('ユーザー名は必須です')
    .max(50, '50文字以下で入力してください'),
})

export type UserUpdateSchema = yup.InferType<typeof userUpdateForm>
