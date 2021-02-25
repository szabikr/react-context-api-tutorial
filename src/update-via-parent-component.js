import React, { useState } from 'react';
import { ThemeContext, themes } from './theme-context';
import ThemedButton from './themed-button';

export default function UpdateViaParentComponent() {

  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = () => {
    theme === themes.light ? setTheme(themes.dark) : setTheme(themes.light);
  }

  return (
    <>
      <h1>Update via Parent Component</h1>

      <ThemeContext.Provider value={theme}>
        <ThemedButton onClick={toggleTheme}>
          Toggle Theme
        </ThemedButton>
      </ThemeContext.Provider>
    </>
  );
}
