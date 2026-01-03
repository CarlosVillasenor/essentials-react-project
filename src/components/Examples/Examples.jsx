// Import necessary React hooks.
import { useState } from 'react';
// Import example data.
import { EXAMPLES } from '../../data';
// Import necessary components.
import TabButton from '../TabButton/TabButton';
import Section from '../Section/Section';
import Tabs from '../Tabs/Tabs';

/** Examples component displaying different React topics **/
function Examples() {
  const [selectedTopic, setSelectedTopic] = useState('');

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

  // Function to handle tab selection.
  function handleSelect(selectedButton) {
    console.log(selectedButton);
    setSelectedTopic(selectedButton)
  }

  // Define the tab buttons with their respective selection states and click handlers.
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
