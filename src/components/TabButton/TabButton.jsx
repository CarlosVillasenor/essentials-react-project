/** TabButton component representing a single tab button **/
function TabButton({ children, isSelected, ...props }) {
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
