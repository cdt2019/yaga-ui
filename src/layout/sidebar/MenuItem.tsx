import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { useState } from 'react';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import { styled } from '@mui/material/styles';

import sidebarStyleCofnig from './SidebarStyleConfig';
import {useAppSelector, useAppDispatch} from '../../store/hooks';
import {setActiveItem} from '../../store/slices/AppConfigSlice';
import { MenuGroupProps} from './MenuGroup';

/**
 * 菜单项
 */
export interface MenuItemProps extends MenuGroupProps {
    name: string, //必填
    readonly level? : number , //深度
    permTag?: string, //权限标签
    navRoute?: string, //导航路由
}

const NavItemButton = styled(ListItemButton)({
  py: 2,
  color: sidebarStyleCofnig.item.color,
  '& .MuiListItemIcon-root': {
    marginTop: 0,
  },
});

export default function MenuItem(props: MenuItemProps)  {
    const sidebarOpen = useAppSelector((state) => state.appConfig.sidebarOpen);
    const activeItem = useAppSelector((state) => state.appConfig.activeItem);
    //
    const dispatch = useAppDispatch();
    const activeItemHook = () => {
      dispatch({type: setActiveItem.type, payload: itemIdenty});
    }
     
    const [open, setOpen] = useState(false);
    const level = props.level || 1; //当前深度
    const pxp = level * 2; //不一样的深度不一样的 padding-left + 16px
    const leafItem = (props.children || []).length == 0;
    const itemIdenty = props.identy;
    const handleOnClick = () => {
      setOpen(!open);
      //叶子节点
       if(leafItem){
          activeItemHook(); //设置当前激活的 memuItem
       }
    }

    const renderMenuItem = () => {
        if(sidebarOpen || level == 1){ 
            //含有子节点
            return <>
                  <NavItemButton
                    alignItems="flex-start"
                    onClick={handleOnClick}
                    sx={{
                      justifyContent: sidebarOpen ? 'initial' : 'center',
                      height: sidebarStyleCofnig.item.height,
                      paddingLeft: pxp,
                      alignItems: 'center',
                      // '&:hover, &:focus': { '& svg': { opacity: sidebarOpen ? 1 : 0 } },
                    }}
                  >
                    <ListItemIcon sx={{ color: activeItem === props.identy? sidebarStyleCofnig.item.activeColor : sidebarStyleCofnig.item.color, }}>
                        {props.icon}
                    </ListItemIcon>
                    {
                      sidebarOpen ? 
                        <ListItemText
                        primary={props.name}
                        primaryTypographyProps={{
                          fontSize: sidebarStyleCofnig.item.fontSize,
                          fontWeight: sidebarStyleCofnig.item.fontWeight,
                          color:  activeItem === props.identy? sidebarStyleCofnig.item.activeColor : sidebarStyleCofnig.item.color, 
                        }}
                        sx={{ my: 0,}}
                      />
                      : null
                    }
                    {
                        sidebarOpen && !leafItem ? 
                          <KeyboardArrowDown
                              sx={{
                                mr: -1,
                                transformOrigin: "center, center",
                                transform: open ? 'rotate(-180deg)' : 'rotate(0deg)',
                                transition: '0.2s',
                              }}
                            /> : null
                    }
                  </NavItemButton>
                  {
                    open && 
                        (props.children || []).map((item) => 
                            <MenuItem key={item.name}  level={level + 1} {...item}></MenuItem>
                    )}
                </>
        }
    }
    return <>{renderMenuItem()}</>
};


