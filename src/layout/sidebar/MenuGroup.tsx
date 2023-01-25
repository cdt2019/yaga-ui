import Box from '@mui/material/Box'
import ListItemText from '@mui/material/ListItemText';
import { useAppSelector } from '../../store/hooks';
import MenuItem, {MenuItemProps} from './MenuItem'
import * as React from 'react';

export interface MenuGroupProps {
    type?: string,
    name?: string,
    icon?: React.ReactNode,
    //permTag?: String,
    //navRoute?: String,
    children?: MenuItemProps[],
}

export default function MenuGroup(props: MenuGroupProps) {
    const sidebarOpen = useAppSelector((state) => state.appConfig.sidebarOpen);
    return <Box
          sx={{
            bgcolor: sidebarOpen ? 'rgba(71, 98, 130, 0.2)' : null,
          }}>
          {
            sidebarOpen && props.name 
                && <ListItemText 
                primary={props.name}
                primaryTypographyProps={{
                  fontSize: 10,
                  fontWeight: 'medium',
                  px: 2,
                  py: 1,
                }}
                sx={{ my: 0, height: '32px', opacity: 0.4,}} />
          }
          
          {
            props.children?.map((item) => {
              return <MenuItem key={item.name} {...item}></MenuItem>
            })
          }
      </Box>
}