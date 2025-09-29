import React from 'react';
import data from './data/portfolio.json'
import Pages from './pages'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { ThemeProvider, useTheme } from './contexts/ThemeContext'

const StyledThemeWrapper = ({ children }) => {
  const theme = useTheme();
  return (
    <StyledThemeProvider theme={theme}>
      {children}
    </StyledThemeProvider>
  );
};

function App() {
  return (
    <ThemeProvider>
      <StyledThemeWrapper>
        <Pages user={data} />
      </StyledThemeWrapper>
    </ThemeProvider>
  );
}

export default App;
