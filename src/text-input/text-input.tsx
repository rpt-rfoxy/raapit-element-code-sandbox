import React, { forwardRef, LegacyRef, ReactNode } from 'react'
import {
  ElInputField,
  ElInputSizesEnum,
  ElInputVariantEnum,
  ElTextInput,
} from './styles'

export interface TextInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | "prefix" | "suffix"> {
  isError?: boolean
  variant?: ElInputVariantEnum
  size?: ElInputSizesEnum
  isRequired?: boolean

  leadingIcon?: ReactNode
  prefix?: ReactNode
  suffix?: ReactNode
  trailingIcon?: ReactNode
  type: 'text'
  | 'password'
  | 'email'
  | 'number'
  | 'tel'
  | 'url'
  | 'hidden'

}

export const TextInput: React.ForwardRefExoticComponent<TextInputProps> = forwardRef(
  (
    { isError, isRequired, size = "medium", variant, prefix, suffix, ...rest },
    ref: React.ForwardedRef<React.InputHTMLAttributes<HTMLInputElement>>,
  ) => {
    return (
      <ElTextInput data-is-error={isError}>
        {prefix && prefix}
        <ElInputField
          {...rest}
          data-variant={variant}
          data-size={size}
          data-required={isRequired}
          placeholder={rest.placeholder}
          aria-label={`Input type ${rest.type}`}
          ref={ref as unknown as LegacyRef<HTMLInputElement>}
        />
        {suffix && suffix}
      </ElTextInput>
    )
  },
)
