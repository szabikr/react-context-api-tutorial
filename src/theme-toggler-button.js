import React, { useContext } from 'react';
import { ThemeContext } from './theme-context';

export function ThemeTogglerButtonWithConsumer() {
  return (
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }) => (
        <button
          onClick={toggleTheme}
          style={{backgroundColor: theme.background}}>
          Toggle Theme
        </button>
      )}
    </ThemeContext.Consumer>
  )
}

function ThemeTogglerButton() {
  const ctx = useContext(ThemeContext);

  return (
    <button
      onClick={ctx.toggleTheme}
      style={{backgroundColor: ctx.theme.background}}>
      Toggle Theme
    </button>
  )
}

export default ThemeTogglerButton;
