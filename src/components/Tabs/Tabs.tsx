/**
 * Tabs component for organizing content with interactive buttons.
 *
 * This component provides a flexible tabbed interface where buttons are displayed
 * in a configurable container element, followed by the associated content.
 * It's commonly used for organizing related content sections that users can
 * navigate through by clicking different tab buttons.
 */

import React from 'react';

/**
 * Props for the Tabs component.
 */
type TabsProps = {
  /** The content to display below the tab buttons */
  children: React.ReactNode;
  /** The tab buttons to display (note: there's a typo in the prop name) */
  butttons: React.ReactNode;
  /** The HTML element to use as the container for buttons. Defaults to "menu" */
  buttonsContainer?: string;
}

/**
 * Tabs component that displays a set of buttons and associated content.
 *
 * Renders tab buttons in a configurable container element (like "menu", "div", etc.)
 * followed by the content passed as children. The buttons container element type
 * can be customized via the buttonsContainer prop.
 *
 * @param props - The component props
 * @param props.children - The content to display below the buttons
 * @param props.butttons - The tab buttons to render (note: typo in prop name)
 * @param props.buttonsContainer - HTML element for button container (default: "menu")
 * @returns The JSX element representing the tabs layout
 */
function Tabs({ children, butttons, buttonsContainer = "menu" }: TabsProps): React.JSX.Element {
  // Use the buttonsContainer prop to determine which HTML element to use for the buttons container.
  // Then assign the value of buttonsContainer to a variable named ButtonsContainer which will be used as a component.

  /** Component that displays buttons in the buttons container **/
  const ButtonsContainer: any = buttonsContainer;
  return (
    <>
      <ButtonsContainer>
        {butttons}
      </ButtonsContainer>
      {children}
    </>
  );
}

export default Tabs;
