import React, { FC, HTMLAttributes } from 'react'
import { ElErrorText, ElSizesEnum } from './styles'

interface ErrorTextProps extends HTMLAttributes<HTMLParagraphElement> {
  isError?: boolean
  size?: ElSizesEnum
}

/**
 * ErrorText Component
 *
 * A utility component for displaying error messages conditionally.
 * 
 * @component
 * @example
 * // Basic usage
 * <ErrorText isError={true}>This is an error message.</ErrorText>
 *
 * @example
 * // Conditional rendering (won't render)
 * <ErrorText isError={false}>This won't be shown.</ErrorText>
 *
 * @example
 * // Using size prop (Large text will default to "medium")
 * <ErrorText isError={true} size="large">Large Error Text</ErrorText>
 *
 * @param {Object} props - Component props
 * @param {boolean} [props.isError=false] - Determines if the error message should be displayed
 * @param {ElSizesEnum} [props.size="small"] - Controls the text size; "large" defaults to "medium"
 * @param {React.ReactNode} props.children - The error message content to be displayed
 * @returns {JSX.Element | null} - The rendered error message or null if `isError` is false
 */
export const ErrorText: FC<ErrorTextProps> = ({ children, isError, size, ...restProps }) => {
  const textSize: ElSizesEnum = size == 'large' ? 'medium' : 'small'
  if (isError && children)
    return (
      <ElErrorText {...restProps} data-size={textSize}>{children}</ElErrorText>
    )
  return null
}
