import React, { FC, HTMLAttributes } from 'react'
import { ElTabPanel } from './styles'
import { useTabs } from './tabs-context'

interface TabPanelProps extends HTMLAttributes<HTMLElement> {
}

export const TabPanel: FC<TabPanelProps> = ({ children, ...restProps }) => {
  const { activeTab } = useTabs()

  if (activeTab !== restProps.id) return null

  return (
    <ElTabPanel {...restProps} role="tabpanel">
      {children}
    </ElTabPanel>
  )
}
