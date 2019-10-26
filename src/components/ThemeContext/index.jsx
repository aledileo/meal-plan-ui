import React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./themes";

const Theme = React.createContext();

function ThemeProvider(props) {
  const [isDarkTheme, toggleDarkTheme] = React.useState(true);
  const getTheme = () => isDarkTheme ? darkTheme : lightTheme;
  const toggleTheme = () => toggleDarkTheme(prevState => !prevState);
  
  return (
    <Theme.Provider value={{ isDarkTheme, toggleTheme }}>
      <StyledThemeProvider theme={getTheme()}>
        {props.children}
      </StyledThemeProvider>
    </Theme.Provider>
  );
}

const ThemeConsumer = Theme.Consumer;

export { Theme as default, ThemeProvider, ThemeConsumer };
