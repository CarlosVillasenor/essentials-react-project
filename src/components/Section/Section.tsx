/**
 * Section component for organizing content with titles.
 *
 * This reusable component provides a consistent way to structure page sections
 * with a heading and associated content. It's commonly used to group related
 * UI elements under semantic section elements with proper styling.
 */

// A reusable Section component that takes a title and children as props.

import React from "react";

/**
 * Props for the Section component.
 */
type SectionProps = {
  /** The title to display as a heading for the section */
  title: string;
  /** The content to display within the section */
  children: React.ReactNode;
  /** Allow any additional props to be passed through */
  [key: string]: any;
};

/**
 * Section component that wraps content in a section with a title.
 *
 * Renders a semantic HTML section element with a consistent "section" CSS class,
 * an h2 heading displaying the title, and the provided children content.
 * Additional props are spread to the section element for flexibility.
 *
 * @param props - The component props
 * @param props.title - The section heading text
 * @param props.children - The content to display in the section
 * @param props - Additional props spread to the section element
 * @returns The JSX element representing the section
 */
export default function Section({ children, title, ...props }: SectionProps): React.JSX.Element {
  // '...props' is used to pass all extra props to the section element.
  return (
    <section className="section" {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
