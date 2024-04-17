import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addBill, deleteBill, clearBills } from '../redux/data'
import { nanoid } from 'nanoid'

const Bill = () => {

    const { member, bill } = useSelector((state)=> state.data)

    const dispatch = useDispatch()

    const [billData, setBillData] = useState({"name": "", "quantity": 0, "price": 0})
    const [selectedNames, setSelectedNames] = useState([])

    const handleChange = (e)=>{
        setBillData({...billData, [e.target.id]: e.target.value})
    }

    const handleSubmit = (e)=>{
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

    return (
        <div>
            <form method="POST" onSubmit={handleSubmit}>
                <label htmlFor="name">Enter item name</label>
                <input type="text" id="name" value={billData["name"]} onChange={handleChange} placeholder='item name'/>

                <label htmlFor="quantity">Enter the Quantity</label>
                <input type="number" id="quantity" value={billData["quantity"]} onChange={handleChange} min={0}/>

                <label htmlFor="price">Enter the price</label>
                <input type="number" id="price" value={billData["price"]} onChange={handleChange} min={0}/>

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
                    <div>
                        <li key={idx}>{billElem["name"]}</li>
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
        </div>
    )
}

export default Bill