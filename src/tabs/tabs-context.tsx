import React, { createContext, MutableRefObject, useContext } from "react";

interface TabsContext {
  handleTabOnFocused: (tab: string | null) => void
  activeTab: string | null
  focusedTab: string | null,
  activeTabRef?: MutableRefObject<HTMLAnchorElement | null>
}

export const TabsContext = createContext<TabsContext>({
  activeTab: null,
  focusedTab: null,
  handleTabOnFocused: (tab = null) => void (0)
});

export const useTabs = (activeTab?: string) => {
  if (activeTab) {
    useContext(TabsContext).activeTab = activeTab
  }
  return useContext(TabsContext)
}

