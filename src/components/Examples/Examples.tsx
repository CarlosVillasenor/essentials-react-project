/**
 * Examples component for the React Essentials application.
 *
 * This component provides an interactive examples section where users can explore
 * different React concepts through tabbed content. It displays code examples,
 * descriptions, and titles for various React topics like components, JSX, props, and state.
 */

// Import necessary React hooks.
import React, { useState } from 'react';
// Import example data.
import { EXAMPLES } from '../../data';
// Import necessary components.
import TabButton from '../TabButton/TabButton';
import Section from '../Section/Section';
import Tabs from '../Tabs/Tabs';

/**
 * Examples component displaying different React topics with interactive tabs.
 *
 * This component manages the display of React concept examples through a tabbed interface.
 * Users can click on different topic tabs to view code examples, descriptions, and titles
 * for fundamental React concepts including components, JSX, props, and state management.
 *
 * @returns The JSX element representing the examples section with tabs.
 */
function Examples(): React.JSX.Element {
  /**
   * State to track the currently selected topic tab.
   * Empty string means no topic is selected.
   */
  const [selectedTopic, setSelectedTopic] = useState('');

  /**
   * Default content to display when no topic is selected.
   */
  let tab_content = (<p>Please select a Topic.</p>);

  // Update tab_content based on the selected topic.
  if (selectedTopic) {
    tab_content = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic]?.title}</h3>
        <p>{EXAMPLES[selectedTopic]?.description}</p>
        <pre>
          <code>
            {EXAMPLES[selectedTopic]?.code}
          </code>
        </pre>
      </div>
    );
  }

  /**
   * Handles the selection of a topic tab.
   *
   * Updates the selectedTopic state with the chosen topic and logs the selection
   * to the console for debugging purposes.
   *
   * @param selectedButton - The identifier of the selected topic button.
   */
  function handleSelect(selectedButton: string) {
    console.log(selectedButton);
    setSelectedTopic(selectedButton)
  }

  /**
   * JSX fragment containing all the tab buttons for different React topics.
   * Each TabButton is configured with selection state and click handlers.
   */
  const tabButtons = (
    <>
      <TabButton
        isSelected={selectedTopic === "components"}
        onClick={() => handleSelect("components")}>
        Components
      </TabButton>
      <TabButton
        isSelected={selectedTopic === "jsx"}
        onClick={() => handleSelect("jsx")}>
        JSX
      </TabButton>
      <TabButton
        isSelected={selectedTopic === "props"}
        onClick={() => handleSelect("props")}>
        Props
      </TabButton>
      <TabButton
        isSelected={selectedTopic === "state"}
        onClick={() => handleSelect("state")}>
        State
      </TabButton>
    </>
  );

  return (
    <Section title="Examples" id="examples">
      <Tabs butttons={tabButtons}>
        {tab_content}
      </Tabs>
    </Section>
  );
}

export default Examples;
