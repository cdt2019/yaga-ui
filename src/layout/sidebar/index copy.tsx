import * as React from 'react';
import Box from '@mui/material/Box';
import { styled, ThemeProvider, createTheme, CSSObject, Theme } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import MuiDrawer  from '@mui/material/Drawer';

import ArrowRight from '@mui/icons-material/ArrowRight';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import Home from '@mui/icons-material/Home';
import Settings from '@mui/icons-material/Settings';
import People from '@mui/icons-material/People';
import PermMedia from '@mui/icons-material/PermMedia';
import Dns from '@mui/icons-material/Dns';
import Public from '@mui/icons-material/Public';

import {useAppSelector, useAppDispatch} from '../../store/hooks';
import {setSidebarOpen} from '../../store/slices/AppConfigSlice';
import MenuItem from './MenuItem'
const data = [
  { icon: <People />, label: 'Authentication' },
  { icon: <Dns />, label: 'Database' },
  { icon: <PermMedia />, label: 'Storage' },
  { icon: <Public />, label: 'Hosting' },
];

const FireNav = styled(List)<{ component?: React.ElementType }>({
  '& .MuiListItemButton-root': {
    paddingLeft: 24,
    paddingRight: 24,
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
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
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
  const dispatch = useAppDispatch();
  const siwtchOpenSidebar = () => {
    dispatch({"type": setSidebarOpen.type});
  }

  return (
    <Drawer variant="permanent" open={sidebarOpen?true:false}>
        <Box sx={{ display: 'flex' }}>
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
            <Paper elevation={0} sx={{ maxWidth: 256 }}>
              <FireNav component="nav" disablePadding>
                <ListItemButton component="a" href="#customized-list">
                  <ListItemIcon sx={{ fontSize: 20 }}>🔥</ListItemIcon>
                  <ListItemText
                    sx={{ my: 0 }}
                    primary="Firebash"
                    primaryTypographyProps={{
                      fontSize: 20,
                      fontWeight: 'medium',
                      letterSpacing: 0,
                    }} 
                  />
                </ListItemButton>
                <Divider />
                <ListItem component="div" disablePadding>
                  <ListItemButton sx={{ height: 56 }}>
                    <ListItemIcon>
                      <Home color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      primary="Project Overview"
                      primaryTypographyProps={{
                        color: 'primary',
                        fontWeight: 'medium',
                        variant: 'body2',
                      }}
                    />
                  </ListItemButton>
                  <Tooltip title="Project Settings">
                    <IconButton
                      size="large"
                      sx={{
                        '& svg': {
                          color: 'rgba(255,255,255,0.8)',
                          transition: '0.2s',
                          transform: 'translateX(0) rotate(0)',
                        },
                        '&:hover, &:focus': {
                          bgcolor: 'unset',
                          '& svg:first-of-type': {
                            transform: 'translateX(-4px) rotate(-20deg)',
                          },
                          '& svg:last-of-type': {
                            right: 0,
                            opacity: 1,
                          },
                        },
                        '&:after': {
                          content: '""',
                          position: 'absolute',
                          height: '80%',
                          display: 'block',
                          left: 0,
                          width: '1px',
                          bgcolor: 'divider',
                        },
                      }}
                    >
                      <Settings />
                      <ArrowRight sx={{ position: 'absolute', right: 4, opacity: 0 }} />
                    </IconButton>
                  </Tooltip>
                </ListItem>
                <Divider />
                <Box
                  sx={{
                    bgcolor: sidebarOpen ? 'rgba(71, 98, 130, 0.2)' : null,
                    pb: sidebarOpen ? 2 : 0,
                  }}
                >
                  <ListItemButton
                    alignItems="flex-start"
                    onClick={siwtchOpenSidebar}
                    sx={{
                      px: 0,
                      pt: 2.5,
                      pb: 2.5,
                      justifyContent: sidebarOpen ? 'initial' : 'center',
                      //pb: sidebarOpen ? 0 : 2.5,
                      // '&:hover, &:focus': { '& svg': { opacity: sidebarOpen ? 1 : 0 } },
                    }}
                  >
                    <ListItemText
                      primary="Build"
                      primaryTypographyProps={{
                        fontSize: 15,
                        fontWeight: 'medium',
                        lineHeight: '16px',
                        mb: '2px',
                      }}
                      // secondary="Authentication, Firestore Database, Realtime Database, Storage, Hosting, Functions, and Machine Learning"
                      // secondaryTypographyProps={{
                      //   noWrap: true,
                      //   fontSize: 12,
                      //   lineHeight: '16px',
                      //   color: sidebarOpen ? 'rgba(0,0,0,0)' : 'rgba(255,255,255,0.5)',
                      // }}
                      sx={{ my: 0 }}
                    />
                    <KeyboardArrowDown
                        sx={{
                          mr: -1,
                          opacity: 1,
                          transformOrigin: "center, center",
                          transform: sidebarOpen ? 'rotate(-180deg)' : 'rotate(0deg)',
                          transition: '0.2s',
                        }}
                      />
                  
                      {/* <KeyboardArrowDown
                        sx={{
                          mr: -1,
                          opacity: 0,
                          transform: sidebarOpen ? 'rotate(-180deg)' : 'rotate(0)',
                          transition: '0.2s',
                        }}
                      />
                    <KeyboardArrowUp
                      sx={{
                        mr: -1,
                        opacity: 0,
                        transform: !sidebarOpen ? 'rotate(-180deg)' : 'rotate(0)',
                        transition: '0.2s',
                      }}
                    /> */}
                  </ListItemButton>
                  {//sidebarOpen &&
                    data.map((item) => (
                      // <ListItemButton
                      //   key={item.label}
                      //   sx={{ py: 0, minHeight: 32, color: 'rgba(255,255,255,.8)', justifyContent: sidebarOpen ? 'initial' : 'center',
                      // }}
                      // >
                      //   <ListItemIcon sx={{ color: 'inherit' }}>
                      //     {item.icon}
                      //   </ListItemIcon>
                      //   <ListItemText
                      //     primary={item.label}
                      //     primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                      //     sx={{ opacity: sidebarOpen ? 1 : 0 }}
                      //   />
                      // </ListItemButton>
                      <MenuItem name={item.label}></MenuItem>
                    ))}
                </Box>
              </FireNav>
            </Paper>
          </ThemeProvider>
        </Box>
      </Drawer>
  );
}