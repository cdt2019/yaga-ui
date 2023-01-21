import Public from '@mui/icons-material/Public';

const MenuConfig = [
    {
        type: "system",
        name:'系统应用管理',
        icon: <Public />,
        children: [
            {
                icon:<Public />,
                name:"1231231",
                permTag:"asdfasf",
                children:[
                    {
                        icon:<Public />,
                        name:"1231231",
                        permTag:"asdfasf",
                        navRoute:"",
                    }
                ],
            }
        ],
    },
];

export default MenuConfig;

