// A reusable Section component that takes a title and children as props.

/** Section component that wraps content in a section with a title **/
export default function Section({ children, title, ...props }) {
  // '...props' is used to pass all extra props to the section element.
  return (
    <section className="section" {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
