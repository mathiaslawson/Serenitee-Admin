import {Routes, Route} from 'react-router-dom'
import {CssBaseline, ThemeProvider} from '@mui/material'
import { ColorModeContext, useMode } from './theme';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
    const [theme, colorMode] = useMode()

  return (
    <>
          <ColorModeContext.Provider value={colorMode}>
              <ThemeProvider theme={theme}>
                  <CssBaseline />
                     <div className='app'>
                        {/*  */}
                        <main className='content'>
                              <Routes>
                                <Route path='/login' element={<Login />}/>
                                <Route path='/register' element={<Register />}/>
                              </Routes>
                        </main>
                     </div>
              </ThemeProvider>
          </ColorModeContext.Provider>
    </>
  );
}

export default App;
