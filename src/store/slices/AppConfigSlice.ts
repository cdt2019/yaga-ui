import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'


interface AppConfig {
    sidebarOpen: Boolean, //左侧菜单栏打开
    activeItem: string, //当前激活菜单
}

//初始状态
const initialState: AppConfig = {
    sidebarOpen: true,
    activeItem: "",
};

//导出
export const appConfigSlice = createSlice({
    name:'appConfig',
    initialState,
    reducers:{
        setSidebarOpen: (state) => {  
            state.sidebarOpen = !state.sidebarOpen;
        },
        setActiveItem: (state, action: PayloadAction<any>) => {
            console.log(state);
            console.log(action);

            state.activeItem = action.payload;
        }
    }
});

//导出actionCreator
export const {setSidebarOpen, setActiveItem} = appConfigSlice.actions;

//导出reducer
export default appConfigSlice.reducer;