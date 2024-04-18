import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addBill, deleteBill, clearBills, addTax, deleteTax } from '../redux/data'
import { nanoid } from 'nanoid'

const Bill = () => {

    const { member, bill, tax } = useSelector((state)=> state.data)

    const dispatch = useDispatch()

    const [billData, setBillData] = useState({"name": "", "quantity": 0, "price": 0})
    const [selectedNames, setSelectedNames] = useState([])
    const [taxAmount, setTaxAmount] = useState(0)

    const handleChangeBill = (e)=>{
        setBillData({...billData, [e.target.id]: e.target.value})
    }

    const handleSubmitBill = (e)=>{
        e.preventDefault()
        let selectedMembers = []
        member.forEach((memberElem)=>{
            if(selectedNames.includes(memberElem["id"])) selectedMembers.push(memberElem)
        })
        dispatch(addBill({...billData, "id": nanoid(), "members": selectedMembers}))
        setBillData({"name": "", "quantity": 0, "price": 0})
        setSelectedNames([])
    }

    const handleClearBills = (e)=>{
        e.preventDefault()
        dispatch(clearBills())
    }

    const handleDeleteBill = (billId)=>{
        dispatch(deleteBill(billId))
    }

    const handleSelectName = (nameId)=>{
        setSelectedNames((prevValue)=>{
            let updatedValue=[...prevValue]
            if(updatedValue.includes(nameId)) updatedValue = updatedValue.filter((idElem)=> idElem != nameId)
            else updatedValue.push(nameId)
            return updatedValue
        })
    }

    const handleChangeTax = (e)=>{
        setTaxAmount(e.target.value)
    }

    const handleSubmitTax = (e)=>{
        e.preventDefault();
        dispatch(addTax({"amount": taxAmount, "id": nanoid()}))
        setTaxAmount(0)
    }

    const handleDeleteTax = (taxId)=>{
        dispatch(deleteTax(taxId))
    }

    return (
        <div  style={{ overflow: 'auto'}}>
            <form method="POST" onSubmit={handleSubmitBill}>
                <label htmlFor="name">Enter item name</label>
                <input type="text" id="name" value={billData["name"]} onChange={handleChangeBill} placeholder='item name'/>
                <br /><br />
                <label htmlFor="quantity">Enter the Quantity</label>
                <input type="number" id="quantity" value={billData["quantity"]} onChange={handleChangeBill} min={0}/>
                <br /><br />
                <label htmlFor="price">Enter the price</label>
                <input type="number" id="price" value={billData["price"]} onChange={handleChangeBill} min={0}/>
                <br /><br />
                <ul>
                    {
                    member.map((name,idx)=>{
                        return( 
                        <li key={name["id"]}>
                            <input type="checkbox" id={`checkbox_${idx}`} onChange={()=> handleSelectName(name["id"])} checked={selectedNames.includes(name["id"])}/>
                            <label htmlFor={`checkbox_${idx}`}>{name["name"]}</label>
                        </li>
                        )
                    })
                    }
                </ul>

                <button type='submit'>Add</button>
                <button onClick={handleClearBills}>Clear All</button>
            </form>

            <p>All bills</p>
            <ol>
            {
                bill.map((billElem, idx)=>{
                    return(
                    <div key={idx}>
                        <li>{billElem["name"]}</li>
                        <ul>
                            <li>{billElem["quantity"]}</li>
                            <li>{billElem["price"]}</li>
                            <li>
                                <ul>
                                {
                                    billElem["members"].map((member)=>{
                                        return <li key={member["id"]}>{member["name"]}</li>
                                    })
                                }
                                </ul>
                            </li>
                        </ul>
                        <button onClick={()=> handleDeleteBill(billElem["id"])}>Delete</button>
                    </div>
                    )
                })
            }
            </ol>

            <form method="post" onSubmit={handleSubmitTax}>
                <label htmlFor="taxAmount">Enter the tax amount</label>
                <input type="number" step="0.01" id="taxAmount" onChange={handleChangeTax} value={taxAmount} placeholder='tax amount'/>

                <button type="submit">Add</button>
            </form>
            <p>All Taxes</p>
            <ol>
            {
                tax.map((taxval)=>{
                    return (
                    <li key={taxval["id"]}>
                        {taxval["amount"]}
                        <button onClick={()=> handleDeleteTax(taxval["id"])}>Delete</button>
                    </li>
                    )
                })
            }
            </ol>
        </div>
    )
}

export default Bill