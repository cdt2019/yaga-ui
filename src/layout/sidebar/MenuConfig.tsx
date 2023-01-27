import Public from '@mui/icons-material/Public';
import {MenuGroupProps} from './MenuGroup'

/**
 * 系统菜单配置
 */
const menuConfig: readonly MenuGroupProps[] = [
    {
        
        identy: "system",
        name:'系统应用管理',
        icon: <Public/>,
        children: [
            {
                identy: "system.1231231",
                name:"1231231",
                icon: <Public/>,
                permTag:"asdfasf",
                children:[
                    {
                        identy: "system.bbbbbbbbbb1",
                        icon: <Public/>,
                        name:"bbbbbbbbbb",
                        permTag:"bbbbbbbbbbbbb",
                        navRoute:"",
                        children:[
                            {
                                identy: "system.bbbbbbbbbb2",
                                name:"bbbbbbbbbb",
                                icon: <Public/>,
                                permTag:"bbbbbbbbbbbbb",
                                navRoute:"",
                            },
                            {
                                identy: "system.bbbbbbbbbb3",
                                icon: <Public/>,
                                name:"bbbbbbbbbb",
                                permTag:"bbbbbbbbbbbbb",
                                navRoute:"",
                            },
                        ]
                    },
                    {
                        identy: "system.bbbbbbbbbb4",
                        icon: <Public/>,
                        name:"bbbbbbbbbb",
                        permTag:"bbbbbbbbbbbbb",
                        navRoute:"",
                    },
                    {
                        identy: "system.bbbbbbbbbb5",
                        icon: <Public/>,
                        name:"bbbbbbbbbb",
                        permTag:"bbbbbbbbbbbbb",
                        navRoute:"",
                    },
                ],
            },
            {
                identy: "system.12312311116",
                icon: <Public/>,
                name:"1231231111",
                permTag:"asdfasf",
                children:[
                    {
                        identy: "system.1231231111.bbbbbbbbbb",
                        icon: <Public/>,
                        name:"bbbbbbbbbb",
                        permTag:"bbbbbbbbbbbbb",
                        navRoute:"",
                    }
                ],
            },
        ],
    },
    {
        identy: "nets",
        name:'非税管理',
        icon: <Public/>,
        children: [
            {
                identy: "nets.txnBef",
                icon: <Public/>,
                name:"txnBef",
                permTag:"asdfasf",
                children:[
                    {
                        identy: "nets.txnBef.txnBefQuery",
                        icon: <Public/>,
                        name:"txnBefQuery",
                        permTag:"bbbbbbbbbbbbb",
                        navRoute:"",
                    },{
                        identy: "nets.txnBef.txnBefQuery1",
                        icon: <Public/>,
                        name:"txnBefQuery1",
                        permTag:"bbbbbbbbbbbbb",
                        navRoute:"",
                    }
                ],
            }
        ],
    },
];

export default menuConfig;

