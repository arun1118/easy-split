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
            state.member = state.member.filter((mem)=> mem["id"] != action.payload)
        },
        addBill: (state,action)=>{
            state.bill.push(action.payload)
        },
        deleteBill: (state,action)=>{
            state.bill = state.bill.filter((billElem)=> billElem["id"] != action.payload)
        },
        clearBills: (state,action)=>{
            state.bill = []
        },
        calculateBill: (state)=>{

        }
    }
})

export const {
    addMember, deleteMember,
    addBill, deleteBill,clearBills,
    calculateBill
} = dataSlice.actions

export default dataSlice.reducer