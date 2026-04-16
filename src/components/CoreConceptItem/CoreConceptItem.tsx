/**
 * CoreConceptItem component for displaying individual React concepts.
 *
 * This component represents a single core React concept, displaying its
 * associated image, title, and description in a structured list item format.
 * It's designed to be used within lists to showcase fundamental React principles.
 */

import "./CoreConceptItem.css";
import React from 'react';

/**
 * Props for the CoreConceptItem component.
 */
type Concept = {
  /** The image source URL for the concept */
  image: string;
  /** The title/name of the React concept */
  title: string;
  /** A description explaining the concept */
  description: string;
};

/**
 * CoreConceptItem component representing a single core React concept.
 *
 * Renders a list item containing an image, heading, and paragraph that
 * visually represent a core React concept. The component is styled using
 * the imported CSS file for consistent presentation.
 *
 * @param props - The concept data
 * @param props.image - Image source URL for the concept
 * @param props.title - The concept title
 * @param props.description - Description of the concept
 * @returns The JSX element representing the concept item
 */
function CoreConceptItem({ image, title, description }: Concept): React.JSX.Element {
  // Render a list item with an image, title, and description.
  return <li>
    <img src={image} alt={title} />
    <h3>{title}</h3>
    <p>{description}</p>
  </li>;
}

export default CoreConceptItem;
