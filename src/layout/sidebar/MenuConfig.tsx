import Public from '@mui/icons-material/Public';
import {MenuGroupProps} from './MenuGroup'

/**
 * 系统菜单配置
 */
const menuConfig: readonly MenuGroupProps[] = [
    {
        type: "system",
        name:'系统应用管理',
        icon: <Public/>,
        children: [
            {
                icon: <Public/>,
                name:"1231231",
                permTag:"asdfasf",
                children:[
                    {
                        icon: <Public/>,
                        name:"bbbbbbbbbb",
                        permTag:"bbbbbbbbbbbbb",
                        navRoute:"",
                        children:[
                            {
                                icon: <Public/>,
                                name:"bbbbbbbbbb",
                                permTag:"bbbbbbbbbbbbb",
                                navRoute:"",
                            },
                            {
                                icon: <Public/>,
                                name:"bbbbbbbbbb",
                                permTag:"bbbbbbbbbbbbb",
                                navRoute:"",
                            },
                        ]
                    },
                    {
                        icon: <Public/>,
                        name:"bbbbbbbbbb",
                        permTag:"bbbbbbbbbbbbb",
                        navRoute:"",
                    },
                    {
                        icon: <Public/>,
                        name:"bbbbbbbbbb",
                        permTag:"bbbbbbbbbbbbb",
                        navRoute:"",
                    },
                    {
                        icon: <Public/>,
                        name:"bbbbbbbbbb",
                        permTag:"bbbbbbbbbbbbb",
                        navRoute:"",
                    },
                    {
                        icon: <Public/>,
                        name:"bbbbbbbbbb",
                        permTag:"bbbbbbbbbbbbb",
                        navRoute:"",
                    },
                ],
            },
            {
                icon: <Public/>,
                name:"1231231111",
                permTag:"asdfasf",
                children:[
                    {
                        icon: <Public/>,
                        name:"bbbbbbbbbb",
                        permTag:"bbbbbbbbbbbbb",
                        navRoute:"",
                    }
                ],
            },
            {
                icon: <Public/>,
                name:"1231231222",
                permTag:"asdfasf",
                children:[
                    {
                        icon: <Public/>,
                        name:"bbbbbbbbbb",
                        permTag:"bbbbbbbbbbbbb",
                        navRoute:"",
                    }
                ],
            },
            {
                icon: <Public/>,
                name:"1231231333",
                permTag:"asdfasf",
                children:[
                    {
                        icon: <Public/>,
                        name:"bbbbbbbbbb",
                        permTag:"bbbbbbbbbbbbb",
                        navRoute:"",
                    }
                ],
            }
        ],
    },
    {
        type: "nets",
        name:'非税管理',
        icon: <Public/>,
        children: [
            {
                icon: <Public/>,
                name:"txnBef",
                permTag:"asdfasf",
                children:[
                    {
                        icon: <Public/>,
                        name:"txnBefQuery",
                        permTag:"bbbbbbbbbbbbb",
                        navRoute:"",
                    }
                ],
            }
        ],
    },
];

export default menuConfig;

