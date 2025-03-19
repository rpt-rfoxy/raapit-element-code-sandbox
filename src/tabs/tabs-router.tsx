import React, { createContext, FC, HTMLAttributes, useContext } from "react";
import { useLocation, useNavigate } from "react-router";

interface TabsRouterContext {
  handleNavigate: (link: string | null) => void,
  activeRoute: string | null
}

export const TabsRouterContext = createContext<TabsRouterContext>({
  handleNavigate: (link = null) => void (0),
  activeRoute: null
});

export const useTabsRouter = () => useContext(TabsRouterContext)


interface TabsRouterProps extends HTMLAttributes<HTMLElement> { }

export const TabsRouter: FC<TabsRouterProps> = ({ children }) => {
  const navigate = useNavigate()
  const location = useLocation()

  const handleNavigate = (link: string | null) => {
    navigate(link as string)
  }

  const getActiveRouteAsPanel = (): string => location.pathname.replace("/", "")

  return (
    <TabsRouterContext.Provider value={{ handleNavigate, activeRoute: getActiveRouteAsPanel() }}>
      {children}
    </TabsRouterContext.Provider>
  )
}