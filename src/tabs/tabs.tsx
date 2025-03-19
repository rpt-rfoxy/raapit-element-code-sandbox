import React, { FC, HTMLAttributes, useState } from 'react'
import { ElTabs, Variants } from './styles'
import { TabsContext } from './tabs-context'
import { TabsRouter, useTabsRouter } from './tabs-router'
import { TabNavigation } from './tab-navigation'
import { TabContent } from './tab-content'
import { TabPanel } from './tab-panel'
import { TabMenu } from './tab-menu'

interface TabsProps extends HTMLAttributes<HTMLElement> {
  variant?: Variants
}

export const TabsComponent: FC<TabsProps> = ({ children, variant, ...restProps }) => {
  const { handleNavigate } = useTabsRouter()
  const [focusedTab, setFocusedTab] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<string | null>(null)


  const handleTabOnClick = (tab: string | null) => {
    setActiveTab(tab)
    handleNavigate(tab)
  }

  const handleTabOnFocused = (tab: string | null) => {
    setFocusedTab(tab)
  }

  return (
    <TabsContext.Provider value={{ activeTab, focusedTab, handleTabOnClick, handleTabOnFocused }}>
      <ElTabs {...restProps} data-variant={variant}>
        {children}
      </ElTabs>
    </TabsContext.Provider>
  )
}



export const Tabs = Object.assign(TabsComponent, {
  Router: TabsRouter,
  Menu: TabMenu,
  Navigation: TabNavigation,
  Content: TabContent,
  Panel: TabPanel
});
