import "./CoreConceptItem.css";

/** CoreConceptItem component representing a single core React concept **/
function CoreConceptItem({ image, title, description }) {
  // Render a list item with an image, title, and description.
  return <li>
    <img src={image} alt={title} />
    <h3>{title}</h3>
    <p>{description}</p>
  </li>;
}

export default CoreConceptItem;
