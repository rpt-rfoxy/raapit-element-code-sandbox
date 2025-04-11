import React, { forwardRef } from 'react'
import { UseFormRegister, FieldErrors } from 'react-hook-form'
import {
  ElInputField,
  ElInputSizesEnum,
  ElDateTimeInput,
} from './styles'

export interface DateTimeInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  name: string
  // register: UseFormRegister<any> // Accept register prop
  // errors: FieldErrors<any> // Accept errors prop
  size?: ElInputSizesEnum
  isRequired?: boolean
  type?: 'time' | 'date' | 'datetime-local' | 'week' | 'month'
  isError?: boolean
}

export const DateTimeInput = forwardRef<HTMLInputElement, DateTimeInputProps>(
  ({ name, isRequired, isError, size, type = 'date', ...rest }, ref) => {
    console.log(name, rest);

    return (
      <ElDateTimeInput data-is-error={isError}>
        <ElInputField
          {...rest}
          type={type}
          data-size={size}
          placeholder={rest.placeholder}
          aria-label={`Input type ${type}`}
          ref={ref}
        />
      </ElDateTimeInput>
    )
  }
)
