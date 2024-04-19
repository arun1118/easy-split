import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { calculateBill } from '../redux/data'

const Result = () => {

  const { member, bill, tax } = useSelector((state)=> state.data)

  const [billDetail, setBillDetail] = useState({})

  const handleCalculate = ()=>{
    let amountIndividual = {}
    member.forEach((memberElem)=> amountIndividual[memberElem["name"]] = {"item": 0, "tax": 0, "details": []})
    
    let totalBillAmount = 0;
    bill.forEach((billElem)=> {
      let currentItemTotal = parseFloat(billElem["price"]) * parseInt(billElem["quantity"])
      currentItemTotal = parseFloat((currentItemTotal).toFixed(2))
      totalBillAmount += currentItemTotal

      let currentItemMembers = billElem["members"].length 
      let currentItemIndividualAmount = parseFloat((currentItemTotal/currentItemMembers).toFixed(2))

      billElem["members"].forEach((member)=>{
        amountIndividual[member["name"]]["item"] += currentItemIndividualAmount
        let itemDetail={"name": billElem["name"], "price": currentItemIndividualAmount}
        amountIndividual[member["name"]]["details"].push(itemDetail)
      }
    )

    })

    let totalTaxAmount = 0;
    tax.forEach((taxElem)=> totalTaxAmount += parseFloat(taxElem["amount"]) )

    Object.entries(amountIndividual).map(([name,amount])=>{
      let taxAmountToAdd = (amount["item"]*totalTaxAmount)/totalBillAmount
      taxAmountToAdd = parseFloat((taxAmountToAdd).toFixed(2))
      amountIndividual[name]["tax"] += taxAmountToAdd
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
        return(
        <li key={idx}>
          {name} ----- {amount["item"]} ----- {amount["tax"]} ----- {amount["item"]+amount["tax"]} -----
          {amount["details"].map((itemName)=> <i>{itemName["name"]} = {itemName["price"]} , </i> )}
        </li>)
      })
    }
    </ul>
    </>
  )
}

export default Result