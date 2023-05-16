import { Button } from "@mui/material";
import { FC, ReactNode } from "react";

type Props = {
  onClick?: () => void;
  submit?: boolean;
  color:
    | "inherit"
    | "primary"
    | "secondary"
    | "error"
    | "success"
    | "info"
    | "warning"
    | "negative";
  disabled?: boolean;
  size?: "large" | "medium" | "small";
  variant?: "contained" | "outlined" | "text";
  sx?: any;
  className?: string;
  children: ReactNode;
};

export const BaseButton: FC<Props> = ({
  onClick,
  submit = false,
  color,
  disabled,
  size,
  variant = "contained",
  sx,
  className,
  children,
}) => {
  return (
    <Button
      type={submit ? "submit" : undefined}
      disableElevation
      color={color}
      disabled={disabled}
      size={size}
      variant={variant}
      sx={sx}
      className={className}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};
