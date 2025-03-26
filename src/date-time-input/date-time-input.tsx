import React, { forwardRef } from 'react'
import { useFormContext } from 'react-hook-form'
import {
  ElInputField,
  ElInputSizesEnum,
  ElDateTimeInput,
} from './styles'
import { LabelText } from '../label-text'
import { ErrorText } from '../error-text'

export interface DateTimeInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  name: string
  size?: ElInputSizesEnum
  label?: string
  isRequired?: boolean
  helperText?: string
  type?: 'time' | 'date' | 'datetime-local' | 'week' | 'month'
}

export const DateTimeInput = forwardRef<HTMLInputElement, DateTimeInputProps>(
  ({ name, isRequired, label, size, helperText, type = 'date', ...rest }, ref) => {
    const {
      register,
      formState: { errors },
    } = useFormContext()

    const textSize: ElInputSizesEnum = size == 'large' ? 'medium' : 'small'
    const placeholder: string | undefined = isRequired && !label ? `${rest.placeholder} *` : rest.placeholder
    const errorMessage = errors[name]?.message as string | undefined

    return (
      <ElDateTimeInput>
        {label && (
          <LabelText size={textSize} isRequired={isRequired}>
            {label}
          </LabelText>
        )}
        <ElInputField
          {...rest}
          {...register(name, { required: isRequired ? 'This field is required' : false })}
          type={type}
          data-is-error={!!errorMessage}
          data-size={size}
          required={isRequired}
          placeholder={placeholder}
          aria-label={`Input type ${type}`}
          ref={ref}
        />
        <ErrorText isError={!!errorMessage} data-size={textSize}>
          {errorMessage}
        </ErrorText>
        {!errorMessage && helperText && <LabelText size={textSize}>{helperText}</LabelText>}
      </ElDateTimeInput>
    )
  }
)
