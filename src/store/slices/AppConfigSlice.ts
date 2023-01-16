import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

interface AppConfig {
    sidebarOpen: Boolean, //左侧菜单栏打开
}

//初始状态
const initialState: AppConfig = {
    sidebarOpen: true,
};

//导出
export const appConfigSlice = createSlice({
    name:'appConfig',
    initialState,
    reducers:{
        setSidebarOpen: (state) => {  
            state.sidebarOpen = !state.sidebarOpen;
        }    
    }
});

console.log(appConfigSlice);
console.log(appConfigSlice.actions);

//导出actionCreator
export const {setSidebarOpen} = appConfigSlice.actions;

//导出reducer
export default appConfigSlice.reducer;