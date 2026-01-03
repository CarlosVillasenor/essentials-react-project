/** Tabs component that displays a set of buttons and associated content **/
function Tabs({ children, butttons, buttonsContainer = "menu" }) {
  // Use the buttonsContainer prop to determine which HTML element to use for the buttons container.
  // Assign the value of buttonsContainer to a variable named ButtonsContainer which will be used as a component.

  /** Component that displays buttons in the buttons container **/
  const ButtonsContainer = buttonsContainer;
  return (
    <>
      <ButtonsContainer>
        {butttons}
      </ButtonsContainer>
      {children}
    </>
  );
}

export default Tabs;