import * as React from 'react';
import Routes from './routes';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';

export default () => {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#f44336'
      },
      secondary: {
        main: '#2979ff'
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Routes />
      </CssBaseline>
    </ThemeProvider>
  );
}
