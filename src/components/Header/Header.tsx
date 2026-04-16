/**
 * Header component for the React Essentials application.
 *
 * This module provides the main header section of the app, displaying
 * the React logo, title, and a randomly selected description of React concepts.
 */

import React from 'react';
import reactImg from '../../assets/react-core-concepts.png';
import './Header.css';

/**
 * Array of descriptive words used to randomly describe React concepts.
 */
const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

/**
 * Generates a random integer between 0 and the specified maximum value (inclusive).
 *
 * @param max - The maximum value for the random integer.
 * @returns A random integer from 0 to max.
 */
function genRandomInt(max: number): number {
  return Math.floor(Math.random() * (max + 1));
}

/**
 * Header component displaying the app title and a random description.
 *
 * Renders a header element containing the React logo image, the main title
 * "React Essentials", and a paragraph with a randomly selected adjective
 * describing React concepts that users will need for app development.
 *
 * @returns The JSX element representing the header.
 */
function Header(): React.JSX.Element {
  const description = reactDescriptions[genRandomInt(reactDescriptions.length - 1)];

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are going to build!
      </p>
    </header>
  );
}

export default Header;
