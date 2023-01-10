import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

//定义接口状态
interface CounterState {
    value: number
}

//定义初始状态
const initialState: CounterState = {
    value: 0
}

//c
export const conterSlice  = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value  += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        }
    }
});

export const {increment, decrement, incrementByAmount} = conterSlice.actions
export default conterSlice.reducer
