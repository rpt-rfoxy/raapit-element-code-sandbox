import React, { ButtonHTMLAttributes, FC } from 'react'
import { ElTabMenu } from './styles'
import { useTabs } from './tabs-context'

interface TabMenuProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  "aria-controls": string
  isDisabled?: boolean
}

export const TabMenu: FC<TabMenuProps> = ({ children, isDisabled, ...restProps }) => {
  const { focusedTab, activeTab, handleTabOnClick, handleTabOnFocused } = useTabs()
  const targetPanel: string = restProps['aria-controls'];

  const handleTabMenuOnClick = () => {
    if (!isDisabled) {
      handleTabOnClick(targetPanel)
      handleTabOnFocused(targetPanel)
    }
  }

  return (
    <ElTabMenu {...restProps} disabled={isDisabled} aria-selected={activeTab == targetPanel} data-is-focused={focusedTab == targetPanel} role="tab" onClick={handleTabMenuOnClick}>
      {children}
    </ElTabMenu>
  )
}
