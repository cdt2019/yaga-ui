import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useAppSelector} from '../../store/hooks';
import { useState } from 'react';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import { styled } from '@mui/material/styles';

/**
 * 菜单项
 */
export interface MenuItemProps {
    icon?: React.ReactNode, //图标
    name: string, //显示文本
    permTag?: string, //权限标签
    navRoute?: string, //导航路由
    children?: MenuItemProps[], //嵌套子菜单
    readonly dept? : number , //深度
}

const NavItemButton = styled(ListItemButton)({
  py: 2, 
  color: 'rgba(255,255,255,.8)',
  '& .MuiListItemIcon-root': {
    marginTop: 0,
  },
});

export default function MenuItem(props: MenuItemProps)  {
    const sidebarOpen = useAppSelector((state) => state.appConfig.sidebarOpen);
    const [open, setOpen] = useState(false);
    const curDept = props.dept || 0; //当前深度
    const childrenDept = curDept + 1; //子菜单深度
    const pxp = childrenDept * 2; //不一样的深度不一样的 padding-left + 16px
    
    /**
     * 展开，所有的
     * @param expand 
     */
    const onExpand = (expand: boolean) => {
      setOpen(expand);
      
    }

    const renderMenuItem = () => {
        const childrens = (props.children || []).length;
        if(childrens == 0){
            //节点
           return <NavItemButton
                    sx={{ justifyContent: sidebarOpen ? 'initial' : 'center', height:36, paddingLeft: pxp,}}>
                    <ListItemIcon sx={{ color: 'inherit' }}>
                        {props.icon}
                    </ListItemIcon>
                    <ListItemText
                    primary={props.name}
                    primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                    sx={{ opacity: sidebarOpen ? 1 : 0 }}
                    />
                </NavItemButton>
        } else {
            //含有子节点
            return <>
                  <NavItemButton
                    alignItems="flex-start"
                    onClick={()=>{setOpen(!open)}}
                    sx={{
                      justifyContent: sidebarOpen ? 'initial' : 'center',
                      height: 36,
                      paddingLeft: pxp,
                      // '&:hover, &:focus': { '& svg': { opacity: sidebarOpen ? 1 : 0 } },
                    }}
                  >
                    <ListItemIcon sx={{ color: 'inherit' }}>
                        {props.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={props.name}
                      primaryTypographyProps={{
                        fontSize: 15,
                        fontWeight: 'medium',
                      }}
                      sx={{ my: 0, opacity: sidebarOpen? 1 : 0}}
                    />
                    <KeyboardArrowDown
                        sx={{
                          mr: -1,
                          opacity: sidebarOpen? 1 : 0,
                          transformOrigin: "center, center",
                          transform: open ? 'rotate(-180deg)' : 'rotate(0deg)',
                          transition: '0.2s',
                        }}
                      />
                  </NavItemButton>
                  {
                    open && 
                        (props.children || []).map((item) => 
                            <MenuItem key={item.name}  dept={childrenDept} {...item}></MenuItem>
                    )}
                </>
        }
    }
    return <>{renderMenuItem()}</>
};


