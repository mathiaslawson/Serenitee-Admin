import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import Firebase, { FirebaseContext } from './services/index';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './containers/App';
import { ColorModeContext, useMode } from './theme';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import './index.css'



function Index() {
  const [theme, colorMode] = useMode()

  return (
    <React.StrictMode>
      <Provider store={store}>
      <FirebaseContext.Provider value={new Firebase()}>
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
          <div >
            <main className='content'>
          <Router>
            <App />
          </Router>
          </main>
          </div>
          </ThemeProvider>
        </ColorModeContext.Provider>
        </FirebaseContext.Provider>
      </Provider>
    </React.StrictMode>
  );
}

ReactDOM.render(<Index />, document.getElementById('root'));
