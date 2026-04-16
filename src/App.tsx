/**
 * Main application component for the React Essentials app.
 *
 * This is the root component that composes the entire application UI.
 * It renders the header, main content area with core concepts and examples,
 * providing a complete overview of React fundamentals for learning purposes.
 */

// Import necessary components.
import Header from './components/Header/Header';
import CoreConcepts from './components/CoreConcepts/CoreConcepts';
import Examples from './components/Examples/Examples';
import React from 'react';

/**
 * Main application component.
 *
 * Serves as the root component of the React Essentials application.
 * Composes the header, core concepts section, and interactive examples
 * to create a comprehensive learning experience for React fundamentals.
 *
 * @returns The JSX element representing the entire application
 */
function App(): React.JSX.Element {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
