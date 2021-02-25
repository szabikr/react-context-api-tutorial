import React, { useState } from 'react';
import { ThemeContext, themes } from './theme-context';
import ThemeTogglerButton from './theme-toggler-button';

export default function UpdateViaNestedComponent() {

  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = () => {
    theme === themes.light ? setTheme(themes.dark) : setTheme(themes.light);
  }

  return (
    <>
      <h1>Update via Nested Component</h1>

      <ThemeContext.Provider value={{theme, toggleTheme}}>
        <ThemeTogglerButton />
      </ThemeContext.Provider>
    </>
  );
}
