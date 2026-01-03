
import { CORE_CONCEPTS } from '../../data';
import CoreConceptItem from '../CoreConceptItem/CoreConceptItem';

/** CoreConcepts component displaying a list of core React concepts **/
function CoreConcepts() {
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
