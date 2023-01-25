import Header from './header'
import Sidebar from './sidebar'
import Footer from './footer'
import Content from './content';

import { Box, CssBaseline } from '@mui/material';

export default function Layout() {

  return (
        <Box sx={{ display: 'flex', height:'100vh', }}>
            <CssBaseline />
            <Sidebar />
            <Box sx={{display: 'flex', flexDirection: 'column', flexGrow:1,}}>
              <Header />
              <Content />
              <Footer />
           </Box>
        </Box>
  )
}
