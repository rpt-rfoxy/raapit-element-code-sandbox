import { styled } from '@linaria/react'

export type ElInputSizesEnum = 'small' | 'medium' | 'large'
export type ElInputVariantEnum = 'default' | 'with-prefix' | 'with-suffix'

interface ElInputFieldProps {
  'data-size'?: ElInputSizesEnum
  'data-variant'?: ElInputVariantEnum
}

interface ElInputFieldWrapperProps {
  'data-is-error'?: boolean
}


export const ElTextInput = styled.div<ElInputFieldWrapperProps>`
  width: auto;
  display: inline-flex;
  padding: var(--spacing-2) var(--spacing-3);
  align-items: center;
  gap: var(--spacing-2);
  border-radius: var(--corner-sm);
  border: var(--border-default) solid var(--outline-text_input-default);
  background: var(--fill-white);

  &:has(input:focus) {
    border-color: var(--outline-text_input-focus);
  }

  &:has(input:disabled) {
    background-color: var(--fill-default-light);
    border-color: var(--fill-default-light);
    cursor: not-allowed;
    * {
      cursor: not-allowed;
    }
  }

  &:has(input:read-only) {
    background-color: var(--fill-default-lightest);
    border-color: var(--fill-default-lightest);
    
  }

  &[data-is-error='true'] {
    &:not(:has(input:disabled)) {
      border-color: var(--outline-error);
      background-color: var(--fill-error-light);
    }
  }

  &:has(input[type="time"]),
  &:has(input[type="date"]),
  &:has(input[type="datetime-local"]),
  &:has(input[type="week"]),
  &:has(input[type="month"]) {
    padding-right: 32px !important;
  }

  
`

export const ElInputField = styled.input<ElInputFieldProps>`
  display: flex;
  flex: 1;
  text-align: left;
  color: var(--text-primary);
  background: inherit;
  font-family: var(--font-family);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-xs);
  letter-spacing: var(--letter-spacing-xs);
  outline: none;
  border: none;
  margin: 0;

  &[data-size='small'] {
    font-size: var(--font-size-xs);
    line-height: var(--line-height-xs);
    letter-spacing: var(--letter-spacing-xs);
  }
  &[data-size='medium'] {
    font-size: var(--font-size-sm);
    line-height: var(--line-height-sm);
    letter-spacing: var(--letter-spacing-sm);
  }
  &[data-size='large'] {
    font-size: var(--font-size-base);
    line-height: var(--line-height-base);
    letter-spacing: var(--letter-spacing-base);
  }

  &[data-variant='with-suffix'] {
    text-align: right;
  }

  &::placeholder {
    color: var(--text-placeholder);
    font-family: var(--font-sans-serif);
    font-size: var(--font-size-small);
  }
  &[type='number']::-webkit-outer-spin-button,
  &[type='number']::-webkit-inner-spin-button,
  &[type='number'] {
    -webkit-appearance: none;
    -moz-appearance: textfield;
    appearance: none;
    margin: 0;
  }

  &::placeholder {
    color: var(--text-placeholder);
    font-family: var(--font-sans-serif);
    font-size: var(--font-size-small);
  }

  &:focus {
    border-color: var(--outline-text_input-focus);
  }

  &:disabled {
    cursor: not-allowed;
    * {
      cursor: not-allowed;
    }
    &::-webkit-calendar-picker-indicator {
      opacity: 1 !important;
      pointer-events: auto; /* Allow interaction */
    }
  }

  &::-webkit-calendar-picker-indicator {
    border-radius: var(--corner-default);
    position: absolute;
    right: var(--spacing-4);
    width: var(--icon-sm);
    height: var(--icon-sm);
    cursor: pointer;
    opacity: 0.6;
    outline: none;
    &:focus {
      box-shadow: 0px 0px 0px 1px #FFF, 0px 0px 0px 4px var(--purple-300);
    }
  }
  
  &::-webkit-datetime-edit-ampm-field,
  &::-webkit-datetime-edit-day-field,
  &::-webkit-datetime-edit-hour-field,
  &::-webkit-datetime-edit-millisecond-field,
  &::-webkit-datetime-edit-minute-field,
  &::-webkit-datetime-edit-month-field,
  &::-webkit-datetime-edit-second-field,
  &::-webkit-datetime-edit-week-field,
  &::-webkit-datetime-edit-year-field,
  &::-webkit-datetime-edit-text { 
    &:focus{
      background-color: var(--fill-action-light);
      outline: red;
    }
  }
`