import { useState, createContext } from 'react';
 
export const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
});
 
export default function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState('light');
 
  const toggleTheme = () => {
    setTheme((prevTheme) => {
      return prevTheme === 'light' ? 'dark' : 'light';
    });
  };

  const ctxValue = {
    theme,
    toggleTheme,
  }
 
  return (
    <ThemeContext.Provider value={ctxValue}>
      {children}
    </ThemeContext.Provider>
  );
}
