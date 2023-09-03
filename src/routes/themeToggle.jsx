// ThemeToggle.jsx
import React from 'react';
import { useTheme } from '../themeContext';

const ThemeToggle = () => {
  const { isDarkTheme, toggleTheme } = useTheme();
  const toggleText = isDarkTheme ? 'Light Mode' : 'Dark Mode';

  return (
    <button onClick={toggleTheme}>
      {toggleText}
    </button>
  );
};

export default ThemeToggle;
