import {lazy} from 'react'

import Layout from '../layout';
//延迟加载组件
//const main = lazy(()=> import('12312331/1231231/'));

//定义主页面路由
const MainRoutes = {
    path: "/",
    element: <Layout></Layout>
};

export default MainRoutes;
