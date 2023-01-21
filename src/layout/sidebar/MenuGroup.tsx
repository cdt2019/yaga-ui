import Box from '@mui/material/Box'
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useAppSelector } from '../../store/hooks';
import AppConfigSlice from '../../store/slices/AppConfigSlice';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import {MenuItemProps} from './MenuItem'

interface MenuGroupProps {
    name: String,
    icon?: String,
    permTag?: String,
    navRoute?: String,
    children?: MenuItemProps[],
}

export default function MenuGroup() {

    const sidebarOpen = useAppSelector((state) => state.appConfig.sidebarOpen);

    return <Box
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

}