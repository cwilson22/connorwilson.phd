import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check localStorage for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    // Check system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    // Save theme preference to localStorage
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    
    // Apply theme to document body
    document.body.className = isDarkMode ? 'dark-theme' : 'light-theme';
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const theme = {
    isDarkMode,
    toggleTheme,
    colors: {
      background: isDarkMode ? '#1a1a1a' : '#ffffff',
      surface: isDarkMode ? '#2d2d2d' : '#ffffff',
      text: isDarkMode ? '#ffffff' : '#000000',
      textSecondary: isDarkMode ? '#b0b0b0' : '#6c757d',
      textMuted: isDarkMode ? '#888888' : '#6c757d',
      border: isDarkMode ? '#404040' : '#dee2e6',
      link: isDarkMode ? '#4dabf7' : '#0066cc',
      linkHover: isDarkMode ? '#74c0fc' : '#0056b3',
      cardBackground: isDarkMode ? '#2d2d2d' : '#ffffff',
      navbarBackground: isDarkMode ? '#1a1a1a' : '#ffffff',
      hr: isDarkMode ? '#404040' : '#dee2e6'
    }
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};
