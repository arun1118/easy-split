import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { calculateBill } from '../redux/data'

const Result = () => {

  const { member, bill, tax } = useSelector((state)=> state.data)

  const [billDetail, setBillDetail] = useState({})

  const handleCalculate = ()=>{

    let amountIndividual = {}
    member.forEach((memberElem)=> amountIndividual[memberElem["name"]] = 0)

    let totalBillAmount = 0;
    bill.forEach((billElem)=> {
      let currentItemTotal = parseFloat(billElem["price"]) * parseInt(billElem["quantity"])
      totalBillAmount += currentItemTotal
      let currentItemMembers = billElem["members"].length 
      billElem["members"].forEach((member)=>{
        amountIndividual[member["name"]] += (currentItemTotal/currentItemMembers)
      })
    })

    let totalTaxAmount = 0;
    tax.forEach((taxElem)=> {
      totalTaxAmount += parseFloat(taxElem["amount"]) 
    })

    setBillDetail(amountIndividual)
  }

  return (
    <>
    <div>
      <button onClick={handleCalculate}>Calculate</button>
    </div>
    <ul>
    {
      Object.entries(billDetail).map(([name,amount],idx)=>{
        return <li key={idx}>{name} -----  {amount}</li>
      })
    }
    </ul>
    </>
  )
}

export default Result