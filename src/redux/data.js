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
            state.member.push(action.payload)
        },
        deleteMember: (state,action)=>{
            state.member = state.member.filter((mem)=> mem!=action.payload)
        },
        addBill: (state,action)=>{
            state.bill.push(action.payload)
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