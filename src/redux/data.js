import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    member: [],
    bill: [],
    result: {}
}

const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers:{
        addMember: (state,action)=>{

        },
        deleteMember: (state,action)=>{

        },
        addBill: (state,action)=>{

        },
        deleteBill: (state,action)=>{

        },
        calculateBill: (state)=>{

        }
    }
})

export const {
    addMember, deleteMember,
    addBill, deleteBill,
    calculateBill
} = dataSlice.actions

export default dataSlice.reducer