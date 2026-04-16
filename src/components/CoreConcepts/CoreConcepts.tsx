
/**
 * CoreConcepts component for displaying fundamental React concepts.
 *
 * This component showcases the core concepts of React by rendering a list
 * of key React principles. Each concept is displayed using the CoreConceptItem
 * component, providing users with an overview of essential React knowledge.
 */

import { CORE_CONCEPTS } from '../../data';
import CoreConceptItem from '../CoreConceptItem/CoreConceptItem';
import React from 'react';

/**
 * CoreConcepts component displaying a list of core React concepts.
 *
 * Renders a section containing a heading and an unordered list of core React concepts.
 * Each concept from the CORE_CONCEPTS data array is mapped to a CoreConceptItem component,
 * displaying the concept's title, description, and associated image.
 *
 * @returns The JSX element representing the core concepts section
 */
function CoreConcepts(): React.JSX.Element {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {/* Map over the CORE_CONCEPTS array to render each concept,
            this allows for better maintainability */}
        {CORE_CONCEPTS.map((concept) => {
          return <CoreConceptItem
            key={concept.title}
            title={concept.title}
            description={concept.description}
            image={concept.image} />
        })}
      </ul>
    </section>
  );
}

export default CoreConcepts;
