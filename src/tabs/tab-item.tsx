import React, { AnchorHTMLAttributes, FC } from 'react'
import { ElTabItem, ElTabItemWrapper } from './styles'
import { useTabs } from './tabs-context'

interface TabItemProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  isDisabled?: boolean
}

export const TabItem: FC<TabItemProps> = ({ children, isDisabled, href, ...restProps }) => {
  const { focusedTab, activeTab, activeTabRef } = useTabs()

  const isTabsActive = (targetTab: string | null): boolean => href.match(targetTab as string) ? true : false

  return (
    <ElTabItemWrapper>
      <ElTabItem
        {...restProps}
        ref={isTabsActive(focusedTab) ? activeTabRef : null}
        href={isDisabled ? undefined : href}
        aria-disabled={isDisabled}
        aria-selected={isTabsActive(activeTab)}
        data-is-focused={isTabsActive(focusedTab)}
        role="tab" >
        {children}
      </ElTabItem>
    </ElTabItemWrapper>
  )
}
