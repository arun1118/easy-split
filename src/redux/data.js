import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    member: [],
    bill: [],
    tax: [],
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
        addTax: (state,action)=>{
            state.tax.push(action.payload)
        },
        deleteTax: (state,action)=>{
            state.tax = state.tax.filter((taxElem)=> taxElem["id"] != action.payload)
        },
        calculateBill: (state)=>{

        }
    }
})

export const {
    addMember, deleteMember,
    addBill, deleteBill,clearBills,
    addTax, deleteTax,
    calculateBill
} = dataSlice.actions

export default dataSlice.reducer