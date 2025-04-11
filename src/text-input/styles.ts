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
`