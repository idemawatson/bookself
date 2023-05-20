import {
  DeepMap,
  FieldError,
  FieldValues,
  useController,
  UseControllerProps,
} from 'react-hook-form'

import {
  TextField,
  TextFieldProps,
} from '@/components/parts/forms/TextField/presenter'

export type RhfTextFieldProps<T extends FieldValues> = TextFieldProps &
  UseControllerProps<T>

/**
 * react-hook-formラッパー
 */
export const RhfTextField = <T extends FieldValues>(
  props: RhfTextFieldProps<T>,
) => {
  const {
    name,
    control,
    placeholder,
    className,
    type,
    label,
    endAdornment,
    multiline,
    rows,
  } = props
  const {
    field: { ref, ...rest },
    formState: { errors },
  } = useController<T>({ name, control })

  return (
    <TextField
      inputRef={ref}
      className={className}
      placeholder={placeholder}
      label={label}
      type={type}
      endAdornment={endAdornment}
      multiline={multiline}
      rows={rows}
      {...rest}
      error={
        errors[name] &&
        `${(errors[name] as DeepMap<FieldValues, FieldError>).message}`
      }
    />
  )
}
