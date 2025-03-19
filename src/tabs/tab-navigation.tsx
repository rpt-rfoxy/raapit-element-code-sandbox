import React, { FC, HTMLAttributes, ReactNode, useEffect } from 'react'
import { ElTabNavigation } from './styles'
import { useTabs } from './tabs-context'
import { useTabsRouter } from './tabs-router'

interface TabPosition {
  lastTab: string | null,
  firstTab: string | null,
  currentTab: string | null
}

interface ChildControl {
  targetPanel: string,
  isDisabled?: boolean
}

/**
 * Extracts an array of child element Controls from the `aria-controls` attribute.
 *
 * @param {ReactNode | ReactNode[]} children - The child elements of the component.
 * @returns {ChildControl[]} An array of string Controls from the `aria-controls` attribute.
 */
const getChildComtrols = (children: ReactNode | ReactNode[]): ChildControl[] => React.Children.toArray(children)
  .filter((child): child is React.ReactElement => React.isValidElement(child))
  .map((child) => ({
    targetPanel: child.props["aria-controls"],
    isDisabled: child.props.isDisabled,
  }));


/**
 * Retrieves the index position of the active tab within the tab menu.
 *
 * @param {ChildControl[]} childControls - An array of tab Controls.
 * @param {string | null} activeTab - The currently active tab panel.
 * @returns {number} - The index of the active tab, or `-1` if not found.
 */
const getActiveIndex = (childControls: ChildControl[], activeTab: string | null): number => childControls.findIndex(childControl => childControl.targetPanel === activeTab)


interface TabNavigationProps extends HTMLAttributes<HTMLElement> { }

export const TabNavigation: FC<TabNavigationProps> = ({ children, ...restProps }) => {
  const { activeRoute } = useTabsRouter()
  const childControls = getChildComtrols(children)

  const { handleTabOnFocused, handleTabOnClick, focusedTab, activeTab } = useTabs()


  /**
  * To set active tab in intial render,
  */
  const setInitialActiveTab = () => {
    if (activeRoute) {
      handleTabOnClick(activeRoute)
    } else {
      setActiveTab("Home")
    }
  }

  useEffect(setInitialActiveTab, [])


  /**
 * Determines the new tab position based on keyboard navigation,
 * ensuring that disabled tabs are skipped.
 *
 * @param {string} [keyboardKey] - The key pressed (e.g., "ArrowLeft", "ArrowRight").
 * @returns {TabPosition} - An object containing the first, last, and current active tab.
 */
  const getTabMenuPosition = (keyboardKey?: string): TabPosition => {
    let tabIndex = getActiveIndex(childControls, focusedTab || activeTab);
    const totalTabs = childControls.length;

    const getNextValidTab = (startIndex: number, direction: 1 | -1) => {
      for (let i = 0; i < totalTabs; i++) {
        const newIndex = (startIndex + direction + totalTabs) % totalTabs;
        if (!childControls[newIndex]?.isDisabled) return newIndex;
        startIndex = newIndex;
      }
      return startIndex;
    };

    if (keyboardKey === "ArrowLeft") tabIndex = getNextValidTab(tabIndex, -1);
    else if (keyboardKey === "ArrowRight") tabIndex = getNextValidTab(tabIndex, 1);

    return {
      firstTab: childControls.find(tab => !tab.isDisabled)?.targetPanel ?? null,
      lastTab: [...childControls].reverse().find(tab => !tab.isDisabled)?.targetPanel ?? null,
      currentTab: childControls[tabIndex]?.targetPanel,
    };
  };

  /**
    * Handles keyboard navigation for tab elements for onKeyDown .
    *
    * @param {React.KeyboardEvent<HTMLDivElement>.key} as string - The keydown event triggered by the user.
    */
  const setActiveTab = (key: string) => {
    let activeTab: string | null = focusedTab;

    switch (key) {
      case 'ArrowLeft':
      case 'ArrowRight':
        activeTab = getTabMenuPosition(key).currentTab
        break;

      case 'Home':
      case 'PageUp':
        activeTab = getTabMenuPosition().firstTab
        handleTabOnClick(activeTab)
        break;

      case 'End':
      case 'PageDown':
        activeTab = getTabMenuPosition().lastTab
        handleTabOnClick(activeTab)
        break;

      case 'Spacebar':
      case ' ':
      case 'Enter':
        handleTabOnClick(focusedTab as string)
        break;

      default:
        activeTab = focusedTab
        break;
    }

    handleTabOnFocused(activeTab)
  }

  /**
  * Handles keyboard navigation for tab elements for onKeyDown .
  *
  * @param {React.KeyboardEvent<HTMLDivElement>} event - The keydown event triggered by the user.
  */
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    setActiveTab(event.key)
    event.stopPropagation();
    event.preventDefault();
  }

  /**
    * Handles onBlur event for reseting focused tab .
    *
    * @param {React.FocusEvent<HTMLDivElement>} event - The keydown event triggered by the user.
    */
  const handleOnFocusBlur = (event: React.FocusEvent<HTMLDivElement>) => {
    handleTabOnFocused(null)
    event.stopPropagation();
    event.preventDefault();
  }

  return (
    <ElTabNavigation {...restProps} role="tablist" onKeyDown={handleKeyDown} onBlur={handleOnFocusBlur}>
      {children}
    </ElTabNavigation>
  )
}
