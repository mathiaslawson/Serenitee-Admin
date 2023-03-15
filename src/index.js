import React from 'react';
import ReactDOM from 'react-dom';
// import { createRoot } from 'react-dom/client'
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './containers/App';
import { ColorModeContext, useMode } from './theme';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';



function Index() {
  const [theme, colorMode] = useMode()

  return (
    <React.StrictMode>
      <Provider store={store}>
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
          <div className='app'>
            <main className='content'>
          <Router>
            <App />
          </Router>
          </main>
          </div>
          </ThemeProvider>
        </ColorModeContext.Provider>
      </Provider>
    </React.StrictMode>
  );
}

ReactDOM.render(<Index />, document.getElementById('root'));
