import { useSelector } from 'react-redux';

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

//本地配置的主题
import theme from './themes';

//引入路由
import ThemeRoutes from './routes'

function App() {
  //const customization = useSelector((state) => state.customization);
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
          <CssBaseline /> 
          <ThemeRoutes />
      </ThemeProvider>
  </StyledEngineProvider>
  );
}

export default App;
