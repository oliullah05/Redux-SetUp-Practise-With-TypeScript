import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type counterState = {
    value:number
}


const initialState:counterState  = {value:0}



export const counterSlice = createSlice({
    name:"count",
    initialState,
    reducers:{
        increment :(state)=>{
            state.value+=1
        },
        decrement :(state)=>{
            state.value-=1
        },
        incrementByValue:(state,actions:PayloadAction<counterState>)=>{
            state.value+=actions.payload.value;
        }
    }
})


export const {increment,decrement,incrementByValue}=counterSlice.actions;
export default counterSlice.reducer
