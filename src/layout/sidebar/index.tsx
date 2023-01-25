import * as React from 'react';
import Box from '@mui/material/Box';
import { styled, ThemeProvider, createTheme, CSSObject, Theme } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import MuiDrawer  from '@mui/material/Drawer';

import {useAppSelector, useAppDispatch} from '../../store/hooks';
import MenuGroup from './MenuGroup'
import menuConfig from './MenuConfig'

const FireNav = styled(List)<{ component?: React.ElementType }>({
   '& .MuiListItemButton-root': {
    //paddingLeft: 24,
    //paddingRight: 24,
  },
  '& .MuiListItemIcon-root': {
    minWidth: 0,
    marginRight: 16,
  },
  '& .MuiSvgIcon-root': {
    fontSize: 20,
  },
});

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
  borderRightWidth:'0px',
  '&::-webkit-scrollbar': {
    width: '0.4em'
  },
  '&::-webkit-scrollbar-track': {
    boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
    webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: 'rgba(0,0,0,.1)',
    outline: '1px solid slategrey'
  }
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
  borderRightWidth:'0px',
  "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
    backgroundColor: "#2b2b2b",
  },
  "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
    borderRadius: 8,
    backgroundColor: "#6b6b6b",
    minHeight: 24,
    border: "3px solid #2b2b2b",
  },
  "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus": {
    backgroundColor: "#959595",
  },
  "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active": {
    backgroundColor: "#959595",
  },
  "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover": {
    backgroundColor: "#959595",
  },
  "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
    backgroundColor: "#2b2b2b",
  },
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function Sidebar() {
  //const [open, setOpen] = React.useState(true);
  const sidebarOpen = useAppSelector((state) => state.appConfig.sidebarOpen);

  return (
    <Drawer variant="permanent" open={sidebarOpen?true:false} >
        <Box sx={{ display: 'flex', flexGrow:1,}}>
          <ThemeProvider
            theme={createTheme({
              components: {
                MuiListItemButton: {
                  defaultProps: {
                    disableTouchRipple: true,
                  },
                },
              },
              palette: {
                mode: 'dark',
                primary: { main: 'rgb(102, 157, 246)' },
                background: { paper: 'rgb(5, 30, 52)' },
              },
            })}
          >
            <Paper elevation={0} sx={{ maxWidth: 256, flexGrow:1,
               alignItems:'stretch',borderRadius: '0px',}}>
              <FireNav component="nav" disablePadding >
                <ListItemButton component="a" href="#customized-list">
                  <ListItemIcon sx={{ fontSize: 20 }}>🔥</ListItemIcon>
                  <ListItemText
                    sx={{ my: 0, opacity: sidebarOpen? 1 : 0, }}
                    primary="Firebash"
                    primaryTypographyProps={{
                      fontSize: 20,
                      fontWeight: 'medium',
                      letterSpacing: 0,
                    }} 
                  />
                </ListItemButton>
                <Divider />
                {
                  menuConfig.map(
                    (item) => <>
                                <MenuGroup key={item.type} {...item}></MenuGroup>
                                <Divider />
                              </>
                     
                  )
                }
              </FireNav>
            </Paper>
          </ThemeProvider>
        </Box>
      </Drawer>
  );
}