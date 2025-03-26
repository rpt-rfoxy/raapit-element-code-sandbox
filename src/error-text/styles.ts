import { styled } from '@linaria/react'

export type ElSizesEnum = 'small' | 'medium' | 'large'

export interface ElErrorTextProps {
  'data-size'?: ElSizesEnum
}

export const ElErrorText = styled.p<ElErrorTextProps>`
  color: var(--intent-danger);
  font-size: var(--font-size-small);
  text-align: left;
  color: var(--text-error);
  font-family: var(--font-family);
  font-size: var(--font-size-xs);
  font-style: normal;
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-xs);
  letter-spacing: var(--letter-spacing-xs);

  &[data-size='small'] {
    font-size: var(--font-size-xs);
  }
  &[data-size='medium'] {
    font-size: var(--font-size-sm);
  }
`
