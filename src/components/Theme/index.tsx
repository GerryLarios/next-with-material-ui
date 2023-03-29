import { createTheme, ThemeProvider } from '@mui/material';
import React from 'react';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 480,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          height: '100%',
        },
        html: {
          fontFamily: 'Robot',
          height: '100%',
        },
        '#__next': {
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          maxHeight: '100%',
        },
        'h1, h2, h3, h4, h5, h6, p': { margin: 0 },
        ul: { listStyle: 'none', padding: 0 },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
    MuiSwitch: {
      defaultProps: {
        color: 'default',
      },
    },
  },
});

const Theme: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
