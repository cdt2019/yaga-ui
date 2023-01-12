import Header from './header'
import Sidebar from './sidebar'
import Footer from './footer'
import Content from './content';

import {  Box, CssBaseline } from '@mui/material';


export default function Layout() {
  return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Header />

            <Sidebar />

            <Content />
           
           <Footer />
        </Box>
  )
}
