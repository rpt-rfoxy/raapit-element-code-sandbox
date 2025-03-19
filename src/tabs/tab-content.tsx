import React, { FC, HTMLAttributes } from 'react'
import { ElTabContent } from './styles'

interface TabContentProps extends HTMLAttributes<HTMLElement> {

}
export const TabContent: FC<TabContentProps> = ({ children, ...restProps }) => {
  return (
    <ElTabContent {...restProps} >
      {children}
    </ElTabContent>
  )
}
