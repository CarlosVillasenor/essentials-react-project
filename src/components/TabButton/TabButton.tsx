/**
 * TabButton component for individual tab navigation buttons.
 *
 * This component represents a single interactive tab button within a tabbed interface.
 * It renders as a list item containing a button that can be styled as active/inactive
 * based on the isSelected prop, and supports additional props for event handlers.
 */

import React from 'react';

/**
 * Props for the TabButton component.
 */
type TabButtonProps = {
  /** The content to display inside the button */
  children: React.ReactNode;
  /** Whether this tab button is currently selected/active */
  isSelected: boolean;
  /** Additional props that will be spread to the button element */
  [key: string]: any;
}

/**
 * TabButton component representing a single tab button.
 *
 * Renders a list item containing a button element. The button's class is conditionally
 * set to 'active' when isSelected is true. All additional props (like onClick handlers)
 * are spread to the button element for full interactivity.
 *
 * @param props - The component props
 * @param props.children - The button content (usually text)
 * @param props.isSelected - Whether the tab is currently active
 * @param props - Additional props spread to the button element
 * @returns The JSX element representing the tab button
 */
function TabButton({ children, isSelected, ...props }: TabButtonProps): React.JSX.Element {
  // ...props has all the props passed to the button element except children and isSelected.
  return (
    <li>
      {/* Apply 'active' class if isSelected is true, used the ternary operator for this conditional logic. */}
      <button className={isSelected ? 'active' : undefined} {...props}>
        {children}
      </button>
    </li>
  );
}

export default TabButton;
