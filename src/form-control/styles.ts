import { styled } from '@linaria/react'

export type Variants = "default" | "secondary";

export const ElLabel = styled.label`
  font-family: var(--font-family);
  font-style: normal;
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-sm);
  letter-spacing: var(--letter-spacing-sm);
  display: inline-flex;
  gap: var(--spacing-1);
`

export const ElErrorText = styled.p`
  display: none;
  color: var(--intent-danger);
  text-align: left;
  color: var(--text-error);
  font-family: var(--font-family);
  font-style: normal;
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-xs);
  letter-spacing: var(--letter-spacing-xs);

`

export const ElFormControl = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
  &:has(input[data-required='true']){
    label{
      &::after{
        content: "*";
      }
    }
  }
  &:has(input[data-size='medium']), &:has(input[data-size='small']) {
    [role='alert'], [role='article'], label {
      font-size: var(--font-size-xs);
    }
    svg {
      width: var(--icon-sm) !important;
      height: var(--icon-sm) !important;
    }
  }

  &:has([data-size='large']) {
    [role='alert'], [role='article'], label{
      font-size: var(--font-size-sm);
    }
    svg {
      width: var(--icon-md) !important;
      height: var(--icon-md) !important;
    }
  }

  &:has([data-is-error='true']) {
      &:not(:has(input:disabled)) {
        & + [role='alert'], & + [role='article'] + [role='alert']{
          display: inline-flex;
        }
        & + [role='article'], & + [role='alert'] + [role='article']{
          display: none;
        }
      }
    }


`

export const ElHelperText = styled.p`
  font-family: var(--font-family);
  font-style: normal;
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-sm);
  letter-spacing: var(--letter-spacing-sm);
  display: inline-flex;
  gap: var(--spacing-1);
  color: var(--text-primary);
  
`
