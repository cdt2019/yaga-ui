import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { useAppSelector} from '../../store/hooks';

/**
 * 菜单项
 */
export interface MenuItemProps {
    icon?: string, //图标
    name?: string, //显示文本
    navRoute?: string, //导航路由
}

export default function MenuItem(props: MenuItemProps) {

    const sidebarOpen = useAppSelector((state) => state.appConfig.sidebarOpen);
    return <ListItemButton
                sx={{ py: 0, minHeight: 32, color: 'rgba(255,255,255,.8)', justifyContent: sidebarOpen ? 'initial' : 'center',
            }}
            >
                <ListItemIcon sx={{ color: 'inherit' }}>
                {props.icon}
                </ListItemIcon>
                <ListItemText
                primary={props.name}
                primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                sx={{ opacity: sidebarOpen ? 1 : 0 }}
                />
            </ListItemButton>
};


