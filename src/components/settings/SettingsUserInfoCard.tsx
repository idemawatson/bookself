import { yupResolver } from "@hookform/resolvers/yup";
import { Card, CardActions, CardContent, CardHeader } from "@mui/material";
import { useForm } from "react-hook-form";
import { BaseButton } from "@/components/parts/common/BaseButton";
import { RhfTextField } from "@/components/parts/forms/TextField";
import { useUser } from "@/hooks/useUser";
import { UserUpdateSchema, userUpdateForm } from "@/types/IUserForm";
import useUpdateUser from "@/hooks/user/useUpdateUser";

const SettingsUserInfoCard: React.FC = () => {
  const { data, mutate } = useUser();
  const { updateUser } = useUpdateUser();
  const formMethods = useForm<UserUpdateSchema>({
    mode: "onChange",
    resolver: yupResolver(userUpdateForm),
    defaultValues: { name: data?.name },
  });

  const submitForm = async (form: UserUpdateSchema) => {
    const user = await updateUser(form);
    mutate(user);
  };

  return (
    <>
      <form onSubmit={formMethods.handleSubmit(submitForm)}>
        <Card elevation={0}>
          <CardHeader title="ユーザー設定"></CardHeader>
          <CardContent>
            <RhfTextField
              label="ユーザー名"
              name="name"
              control={formMethods.control}
            ></RhfTextField>
          </CardContent>
          <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
            <BaseButton
              color="secondary"
              submit
              disabled={!formMethods.formState.isValid}
            >
              保存
            </BaseButton>
          </CardActions>
        </Card>
      </form>
    </>
  );
};

export default SettingsUserInfoCard;
