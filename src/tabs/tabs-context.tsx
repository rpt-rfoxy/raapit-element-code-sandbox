import React, { createContext, useContext } from "react";

interface TabsContext {
  handleTabOnClick: (tab: string | null) => void
  handleTabOnFocused: (tab: string | null) => void
  activeTab: string | null
  focusedTab: string | null
}

export const TabsContext = createContext<TabsContext>({
  activeTab: null,
  focusedTab: null,
  handleTabOnClick: (tab = null) => void (0),
  handleTabOnFocused: (tab = null) => void (0)
});

export const useTabs = () => useContext(TabsContext)

