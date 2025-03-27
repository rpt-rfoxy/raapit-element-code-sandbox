import React, { forwardRef } from 'react'
import { UseFormRegister, FieldErrors } from 'react-hook-form'
import {
  ElInputField,
  ElInputSizesEnum,
  ElDateTimeInput,
} from './styles'
import { LabelText } from '../label-text'
import { ErrorText } from '../error-text'

export interface DateTimeInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  name: string
  register: UseFormRegister<any> // Accept register prop
  errors: FieldErrors<any> // Accept errors prop
  size?: ElInputSizesEnum
  label?: string
  isRequired?: boolean
  helperText?: string
  type?: 'time' | 'date' | 'datetime-local' | 'week' | 'month'
  errorMessage?: string
}

export const DateTimeInput = forwardRef<HTMLInputElement, DateTimeInputProps>(
  ({ name, errorMessage, register, errors, isRequired, label, size, helperText, type = 'date', ...rest }, ref) => {
    const textSize: ElInputSizesEnum = size === 'large' ? 'medium' : 'small'
    const placeholder = isRequired && !label ? `${rest.placeholder} *` : rest.placeholder

    const isError = errors[name]?.message ? true : false
    console.log(errors);


    return (
      <ElDateTimeInput>
        {label && (
          <LabelText size={textSize} isRequired={isRequired}>
            {label}
          </LabelText>
        )}
        <ElInputField
          {...rest}
          {...register(name, { required: isRequired ? errorMessage : false })}
          type={type}
          data-is-error={isError}
          data-size={size}
          placeholder={placeholder}
          aria-label={`Input type ${type}`}
          ref={ref}
        />
        <ErrorText isError={isError} size={size}>
          {errorMessage}
        </ErrorText>
        {(!isError && helperText) && (
          <LabelText size={textSize}>{helperText}</LabelText>
        )}
      </ElDateTimeInput>
    )
  }
)
