import * as React from 'react';
import Box from '@mui/material/Box'
import ListItemText from '@mui/material/ListItemText';
import { useAppSelector } from '../../store/hooks';
import MenuItem, {MenuItemProps} from './MenuItem'
import sidebarStyleCofnig from './SidebarStyleConfig';

export interface MenuGroupProps {
    identy: string, //标识 
    name?: string,
    icon?: React.ReactNode,
    children?: MenuItemProps[],
}

export default function MenuGroup(props: MenuGroupProps) {
    const sidebarOpen = useAppSelector((state) => state.appConfig.sidebarOpen);
    return <Box
          sx={{
            bgcolor: sidebarStyleCofnig.group.bgcolor,
          }}>
          {
            sidebarOpen && props.name 
                && <ListItemText 
                primary={props.name}
                primaryTypographyProps={{
                  fontSize: sidebarStyleCofnig.group.fontSize,
                  fontWeight: sidebarStyleCofnig.group.fontWeight,
                  px: 2,
                  py: 1,
                }}
                sx={{ my: 0, height: sidebarStyleCofnig.group.height, 
                  opacity: sidebarStyleCofnig.group.opacity,}} />
          }
          
          {
            props.children?.map((item) => {
              return <MenuItem key={item.name} {...item}></MenuItem>
            })
          }
      </Box>
}